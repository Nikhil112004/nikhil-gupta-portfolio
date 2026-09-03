import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";

export default function Hero() {
    return (
        <section id="home" className=" relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
                 <HeroBackground /> 
            <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-8 px-4 text-center">
                <HeroContent />
                <HeroButtons />
                <HeroSocials />
                <a href="#about" aria-label="Scroll to About section"className="mt-10 text-xs uppercase tracking-[0.25em] text-slate-500 transition hover:text-white">
                    Scroll to explore
                </a>
            </div>
        </section>
    )
}