import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink px-5 text-center text-white">
      <SEO title="Page not found | Emaan Fatima" />
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-electric">404</p>
        <h1 className="mt-4 text-5xl font-semibold">This page drifted into deep space.</h1>
        <p className="mx-auto mt-5 max-w-lg text-slate-400">The portfolio route you opened does not exist.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-electric">
          Back home
        </Link>
      </div>
    </main>
  );
}
