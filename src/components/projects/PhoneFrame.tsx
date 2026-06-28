import { cn } from "../../utils/cn";

type PhoneFrameProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
};

export default function PhoneFrame({
  src,
  alt,
  className,
  imageClassName,
}: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative mx-auto shrink-0 overflow-hidden rounded-[2.15rem] border-[6px] border-slate-950 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.5)] ring-1 ring-white/15",
        "before:absolute before:left-1/2 before:top-2 before:z-20 before:h-1.5 before:w-16 before:-translate-x-1/2 before:rounded-full before:bg-black/35",
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn(
          "block h-full w-full object-cover object-top",
          imageClassName
        )}
      />
    </div>
  );
}