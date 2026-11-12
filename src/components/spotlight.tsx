import { motion, useReducedMotion } from "motion/react"
export function Spotlight() {
  const reduceMotion = useReducedMotion()
  return <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
    <motion.div initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: "easeOut" }} className="spotlight-orb absolute -right-44 -top-48 size-[42rem] rounded-full" />
    {!reduceMotion && <div className="hero-grid absolute inset-0 opacity-50" />}
    <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-background" />
  </div>
}