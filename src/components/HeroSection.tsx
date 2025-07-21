import { RetroGrid } from "./magicui/retro-grid";

export default function HeroSection() {
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-none border-0 bg-black">
            <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
                Hi, I'm
            </span>
            <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent">
                Aashish Dubey
            </span>
            <RetroGrid />
        </div>
    )
}