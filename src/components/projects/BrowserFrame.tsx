import { cn } from "../../utils/cn";

type BrowserFrameProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
};

export default function BrowserFrame({
  src,
  alt,
  className,
  imageClassName,
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#11131a] shadow-[0_24px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/10",
        className
      )}
    >
      <div className="flex h-12 items-center gap-2 border-b border-white/10 bg-[#1b1d24] px-4">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-300" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />

        <div className="ml-3 flex h-8 flex-1 items-center rounded-full bg-black/25 px-4 text-xs text-slate-400">
          tractcorp.com
        </div>
      </div>

      <div className="flex h-[calc(100%-3rem)] w-full items-start justify-center bg-[#f5efe3]">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={cn(
            "block h-full w-full object-contain object-top",
            imageClassName
          )}
        />
      </div>
    </div>
  );
}