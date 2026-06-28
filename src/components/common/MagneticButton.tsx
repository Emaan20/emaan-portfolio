import { MouseEvent, ReactNode, useRef } from "react";
import { HTMLMotionProps, motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "../../utils/cn";

type MagneticButtonProps = HTMLMotionProps<"a"> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export default function MagneticButton({ children, className, variant = "primary", ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 14 });
  const springY = useSpring(y, { stiffness: 180, damping: 14 });

  const onMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    x.set((event.clientX - bounds.left - bounds.width / 2) * 0.18);
    y.set((event.clientY - bounds.top - bounds.height / 2) * 0.18);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const variants = {
    primary: "bg-white text-ink shadow-[0_0_38px_rgba(255,78,205,0.24)] hover:bg-electric",
    secondary: "glass-card text-white hover:border-electric/40 hover:bg-white/10",
    ghost: "text-slate-300 hover:text-white",
  };

  return (
    <motion.a
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.96 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.a>
  );
}
