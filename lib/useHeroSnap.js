import {useEffect} from "react";

/**
 * Apple-style hand-off from the full-screen hero to the next section.
 *
 * Inside the hero there is no "in between": the first downward gesture
 * (wheel, trackpad, keyboard or a swipe on touch screens) glides the page
 * to `targetId`, and the first upward gesture while resting at the top of
 * that section glides back. Everywhere else the page scrolls natively.
 */

const DURATION = 900;
const QUIET = 180;     // ms without wheel input before the next gesture counts (trackpad inertia)
const SWIPE = 14;      // px of finger travel that counts as a swipe

/** cubic-bezier(0.45, 0, 0.15, 1): soft start, long calm settle – like Apple's page transitions. */
function bezier(x1, y1, x2, y2) {
    const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
    const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
    const sx = (t) => ((ax * t + bx) * t + cx) * t;
    const sy = (t) => ((ay * t + by) * t + cy) * t;
    const dx = (t) => (3 * ax * t + 2 * bx) * t + cx;
    return (x) => {
        let t = x;
        for (let i = 0; i < 6; i++) {
            const d = dx(t);
            if (Math.abs(d) < 1e-6) break;
            t -= (sx(t) - x) / d;
        }
        return sy(Math.min(1, Math.max(0, t)));
    };
}
const ease = bezier(0.45, 0, 0.15, 1);

export default function useHeroSnap(targetId) {
    useEffect(() => {
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const root = document.documentElement;

        let locked = false;
        let gliding = false;
        let raf = 0;
        let lastWheel = 0;
        let releaseTimer = 0;

        // unlock only once the glide is done AND the trackpad has gone quiet
        const release = () => {
            clearTimeout(releaseTimer);
            const wait = QUIET - (performance.now() - lastWheel);
            if (gliding || wait > 0) {
                releaseTimer = setTimeout(release, Math.max(wait, 30));
                return;
            }
            locked = false;
        };

        const targetTop = () => {
            const el = document.getElementById(targetId);
            return el ? Math.round(el.getBoundingClientRect().top + window.scrollY) : null;
        };

        const glide = (to) => {
            const from = window.scrollY;
            if (Math.abs(to - from) < 2) return;
            locked = true;
            gliding = true;
            // `scroll-behavior: smooth` on <html> would turn every frame into its own animation
            const prevBehavior = root.style.scrollBehavior;
            root.style.scrollBehavior = "auto";
            const finish = () => {
                window.scrollTo(0, to);
                root.style.scrollBehavior = prevBehavior;
                gliding = false;
                release();
            };
            if (reduced) { finish(); return; }

            const distance = Math.abs(to - from);
            const duration = Math.min(DURATION, 520 + distance * 0.45);
            let start = 0;
            const step = (now) => {
                if (!start) start = now;
                const p = Math.min(1, (now - start) / duration);
                window.scrollTo(0, Math.round(from + (to - from) * ease(p)));
                if (p < 1) raf = requestAnimationFrame(step);
                else finish();
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
            if (locked) { lastWheel = performance.now(); e.preventDefault(); return; }
            if (Math.abs(e.deltaY) < 4 || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
            const to = decide(e.deltaY > 0);
            if (to == null) return;
            e.preventDefault();
            lastWheel = performance.now();
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
            clearTimeout(releaseTimer);
            root.style.scrollBehavior = "";
            window.removeEventListener("wheel", onWheel);
            window.removeEventListener("keydown", onKey);
            window.removeEventListener("touchstart", onTouchStart);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchend", onTouchEnd);
            window.removeEventListener("touchcancel", onTouchEnd);
        };
    }, [targetId]);
}
