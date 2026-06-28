type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      data-scroll-reveal
      className={
        align === "center"
          ? "section-heading mx-auto mb-14 max-w-4xl text-center"
          : "section-heading mb-12 max-w-4xl"
      }
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-electric/80">
        {eyebrow}
      </p>

      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}