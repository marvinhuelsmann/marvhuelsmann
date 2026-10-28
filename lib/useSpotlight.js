import {useEffect} from "react";

/**
 * One document-level listener drives the `spotlight` utility on every card:
 * it writes the pointer position into --mx/--my of the hovered `.spotlight`
 * element so its sheen follows the cursor. Touch devices never see it.
 */
export default function useSpotlight() {
    useEffect(() => {
        if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
        let current = null;
        let frame = 0;

        const onMove = (e) => {
            const el = e.target instanceof Element ? e.target.closest(".spotlight") : null;
            if (current && current !== el) current.style.setProperty("--spot", "0");
            current = el;
            if (!el) return;
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                const r = el.getBoundingClientRect();
                el.style.setProperty("--mx", `${e.clientX - r.left}px`);
                el.style.setProperty("--my", `${e.clientY - r.top}px`);
                el.style.setProperty("--spot", "1");
            });
        };
        const onLeave = () => {
            if (current) current.style.setProperty("--spot", "0");
            current = null;
        };

        document.addEventListener("pointermove", onMove, {passive: true});
        document.documentElement.addEventListener("pointerleave", onLeave);
        return () => {
            cancelAnimationFrame(frame);
            document.removeEventListener("pointermove", onMove);
            document.documentElement.removeEventListener("pointerleave", onLeave);
        };
    }, []);
}
