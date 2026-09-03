import { ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

export default function NotFound() {
  return (
    <main className="min-h-screen overflow-hidden bg-white px-5 py-6 sm:px-8">
      <div className="mesh absolute inset-0" />
      <div className="grid-surface absolute inset-0 opacity-70" />
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-3rem)] max-w-7xl flex-col">
        <a href="/" className="glass inline-flex w-fit items-center gap-3 rounded-full px-4 py-3" aria-label="Inphade home">
          <BrandLogo width={48} height={48} className="h-10 w-10 rounded-md object-contain" />
          <span className="text-xl font-semibold text-brandNavy">Inphade</span>
        </a>
        <section className="flex flex-1 items-center py-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-accent">Page Not Found</p>
            <h1 className="max-w-3xl text-[30px] font-semibold leading-[1.08] text-brandNavy sm:text-[30px] lg:text-[48px] lg:leading-[1.04]">This page is not available.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              The page may have moved, or the address may be incorrect. You can return to the homepage or contact Inphade about a website project.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="/" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-semibold text-white shadow-glow">
                Back to Home <ArrowRight size={18} />
              </a>
              <a href="/contact" className="focus-ring inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-4 font-semibold text-ink shadow-sm">
                Contact Inphade
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
