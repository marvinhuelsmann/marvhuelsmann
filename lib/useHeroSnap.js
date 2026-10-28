import {useEffect} from "react";

/**
 * Apple-style hand-off from the full-screen hero to the next section.
 *
 * Inside the hero there is no "in between": the first downward gesture
 * (wheel, trackpad, keyboard or a swipe on touch screens) glides the page
 * to `targetId`, and the first upward gesture while resting at the top of
 * that section glides back. Everywhere else the page scrolls natively.
 */

const DURATION = 720;
const COOLDOWN = 380;  // swallows trackpad inertia after a glide
const SWIPE = 18;      // px of finger travel that counts as a swipe
const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

export default function useHeroSnap(targetId) {
    useEffect(() => {
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const root = document.documentElement;

        let locked = false;
        let raf = 0;

        const targetTop = () => {
            const el = document.getElementById(targetId);
            return el ? Math.round(el.getBoundingClientRect().top + window.scrollY) : null;
        };

        const jump = (y) => {
            // bypass `scroll-behavior: smooth` on <html> so every frame lands exactly
            const prev = root.style.scrollBehavior;
            root.style.scrollBehavior = "auto";
            window.scrollTo(0, y);
            root.style.scrollBehavior = prev;
        };

        const glide = (to) => {
            const from = window.scrollY;
            if (Math.abs(to - from) < 2) return;
            locked = true;
            if (reduced) {
                jump(to);
                setTimeout(() => { locked = false; }, COOLDOWN);
                return;
            }
            const start = performance.now();
            const step = (now) => {
                const p = Math.min(1, (now - start) / DURATION);
                jump(from + (to - from) * easeOutQuart(p));
                if (p < 1) raf = requestAnimationFrame(step);
                else setTimeout(() => { locked = false; }, COOLDOWN);
            };
            raf = requestAnimationFrame(step);
        };

        /** Where a gesture should glide to, or null to let the page scroll natively. */
        const decide = (down) => {
            const top = targetTop();
            if (top == null) return null;
            const y = window.scrollY;
            if (down && y < top - 4) return top;          // anywhere inside the hero
            if (!down && y > 4 && y <= top + 4) return 0; // resting at the top of the next section
            return null;
        };

        /* ── wheel & trackpad ─────────────────────────── */
        const onWheel = (e) => {
            if (e.ctrlKey) return; // pinch-zoom
            if (locked) { e.preventDefault(); return; }
            if (Math.abs(e.deltaY) < 4 || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
            const to = decide(e.deltaY > 0);
            if (to == null) return;
            e.preventDefault();
            glide(to);
        };

        /* ── keyboard ─────────────────────────────────── */
        const onKey = (e) => {
            if (e.defaultPrevented || e.altKey || e.metaKey || e.ctrlKey) return;
            const a = document.activeElement;
            if (a && (a.tagName === "INPUT" || a.tagName === "TEXTAREA" || a.tagName === "SELECT" || a.isContentEditable)) return;
            const down = (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") && !e.shiftKey;
            const up = e.key === "ArrowUp" || e.key === "PageUp" || (e.key === " " && e.shiftKey);
            if (!down && !up) return;
            if (locked) { e.preventDefault(); return; }
            const to = decide(down);
            if (to == null) return;
            e.preventDefault();
            glide(to);
        };

        /* ── touch ────────────────────────────────────── */
        let touchY = null;
        const onTouchStart = (e) => {
            touchY = e.touches.length === 1 ? e.touches[0].clientY : null;
        };
        const onTouchMove = (e) => {
            if (locked) { if (e.cancelable) e.preventDefault(); return; }
            if (touchY == null || e.touches.length !== 1) return;
            const dy = touchY - e.touches[0].clientY; // > 0: finger moves up, page should scroll down
            const top = targetTop();
            if (top == null) return;
            const y = window.scrollY;
            const inHero = y < top - 4;
            const atTarget = y > 4 && y <= top + 4;

            // hold the page still while deciding, so there is never a half-scrolled hero
            if ((inHero && dy > 0) || (atTarget && dy < 0) || (inHero && y > 4)) {
                if (e.cancelable) e.preventDefault();
            }
            if (Math.abs(dy) < SWIPE) return;
            const to = decide(dy > 0);
            if (to == null) return;
            touchY = null;
            glide(to);
        };
        const onTouchEnd = () => { touchY = null; };

        window.addEventListener("wheel", onWheel, {passive: false});
        window.addEventListener("keydown", onKey);
        window.addEventListener("touchstart", onTouchStart, {passive: true});
        window.addEventListener("touchmove", onTouchMove, {passive: false});
        window.addEventListener("touchend", onTouchEnd, {passive: true});
        window.addEventListener("touchcancel", onTouchEnd, {passive: true});
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("wheel", onWheel);
            window.removeEventListener("keydown", onKey);
            window.removeEventListener("touchstart", onTouchStart);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchend", onTouchEnd);
            window.removeEventListener("touchcancel", onTouchEnd);
        };
    }, [targetId]);
}
