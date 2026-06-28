import { Project } from "../../data/portfolio";
import { cn } from "../../utils/cn";
import PhoneFrame from "./PhoneFrame";
import BrowserFrame from "./BrowserFrame";

type ProjectMockupProps = {
  project: Project;
  large?: boolean;
};

export default function ProjectMockup({
  project,
  large = false,
}: ProjectMockupProps) {
  const isMobile = project.mockupType === "mobile" && project.coverImage;
  const isWeb = project.mockupType === "web" && project.coverImage;

  if (isMobile) {
    const previewImages = project.screenshots?.slice(0, large ? 3 : 1) ?? [
      project.coverImage!,
    ];

    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80",
          large ? "min-h-[430px] lg:min-h-[520px]" : "min-h-[340px]"
        )}
      >
        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-80", project.accent)} />
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-electric/20 blur-3xl" />

        {large ? (
          <div className="relative z-10 flex h-full min-h-[430px] items-center justify-center px-6 py-8 lg:min-h-[520px]">
            <div className="hidden md:block">
              <PhoneFrame
                src={previewImages[1] ?? project.coverImage!}
                alt={`${project.name} screen preview`}
                className="h-[390px] w-[195px] -rotate-6 opacity-75"
              />
            </div>

            <PhoneFrame
              src={previewImages[0]}
              alt={`${project.name} main app preview`}
              className="z-20 h-[430px] w-[215px] md:h-[470px] md:w-[235px]"
            />

            <div className="hidden md:block">
              <PhoneFrame
                src={previewImages[2] ?? project.coverImage!}
                alt={`${project.name} screen preview`}
                className="h-[390px] w-[195px] rotate-6 opacity-75"
              />
            </div>
          </div>
        ) : (
          <div className="relative z-10 flex min-h-[340px] items-center justify-center px-5 py-7">
            <PhoneFrame
              src={project.coverImage!}
              alt={`${project.name} mobile app preview`}
              className="h-[300px] w-[150px]"
            />
          </div>
        )}

        <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-xl">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/60">Preview</p>
            <p className="mt-1 font-semibold text-white">{project.mockupLabel}</p>
          </div>

          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-ink">
            Mobile
          </span>
        </div>
      </div>
    );
  }

 if (isWeb) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80",
        large ? "min-h-[430px] lg:min-h-[520px]" : "min-h-[340px]"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-75",
          project.accent
        )}
      />
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="absolute -left-12 top-12 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-14 bottom-6 h-60 w-60 rounded-full bg-electric/10 blur-3xl" />

      <div className="relative z-10 flex min-h-[340px] items-center justify-center p-5">
       <BrowserFrame
  src={project.coverImage!}
  alt={`${project.name} dashboard preview`}
  className={cn(
    "mx-auto w-full",
    large
      ? "aspect-[1.9/1] max-w-[820px]"
      : "aspect-[1.9/1] max-w-[420px]"
  )}
  imageClassName="object-contain object-top"
/>
      </div>

      <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-xl">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-white/60">
            Preview
          </p>
          <p className="mt-1 font-semibold text-white">
            {project.mockupLabel}
          </p>
        </div>

        <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-ink">
          Web App
        </span>
      </div>
    </div>
  );
}

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80",
        large ? "min-h-[360px]" : "min-h-[230px]"
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-70", project.accent)} />
      <div className="absolute inset-0 grid-overlay opacity-45" />

      <div className="absolute left-6 right-6 top-6 rounded-2xl border border-white/15 bg-black/35 p-3 backdrop-blur-xl">
        <div className="mb-3 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>

        <div className="space-y-3">
          <div className="h-3 w-1/3 rounded-full bg-white/60" />
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 h-20 rounded-2xl bg-white/10" />
            <div className="h-20 rounded-2xl bg-white/10" />
          </div>
          <div className="grid grid-cols-4 gap-3">
            <div className="h-16 rounded-2xl bg-white/10" />
            <div className="h-16 rounded-2xl bg-white/10" />
            <div className="h-16 rounded-2xl bg-white/10" />
            <div className="h-16 rounded-2xl bg-white/10" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-xl">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-white/60">Preview</p>
          <p className="mt-1 font-semibold text-white">{project.mockupLabel}</p>
        </div>

        <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-ink">
          {project.type}
        </span>
      </div>
    </div>
  );
}