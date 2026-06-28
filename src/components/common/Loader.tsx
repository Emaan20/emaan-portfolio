import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="grid min-h-screen place-items-center bg-ink text-white">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          className="mx-auto mb-5 h-14 w-14 rounded-full border border-white/10 border-t-electric"
        />
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Loading portfolio</p>
      </div>
    </div>
  );
}
