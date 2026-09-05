import {motion} from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Scroll-triggered reveal used everywhere so every page shares one motion language.
 */
export default function Reveal({children, delay = 0, y = 28, once = true, className, as = "div"}) {
    const Tag = motion[as] || motion.div;
    return (
        <Tag
            initial={{opacity: 0, y}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once, amount: 0.15}}
            transition={{duration: 0.75, delay, ease: EASE}}
            className={className}
        >
            {children}
        </Tag>
    )
}

export function Stagger({children, className, delay = 0, step = 0.08}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.1}}
            variants={{hidden: {}, show: {transition: {staggerChildren: step, delayChildren: delay}}}}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function Item({children, className, y = 24}) {
    return (
        <motion.div
            variants={{hidden: {opacity: 0, y}, show: {opacity: 1, y: 0, transition: {duration: 0.7, ease: EASE}}}}
            className={className}
        >
            {children}
        </motion.div>
    )
}
