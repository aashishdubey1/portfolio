import { RetroGrid } from "./magicui/retro-grid";
import SplitText from "./blocks/TextAnimations/SplitText/SplitText";
import TextPressure from "./blocks/TextAnimations/TextPressure/TextPressure";
import { RainbowButton } from "./magicui/rainbowButton";
import MeetButton from "./ui/meetButton";

export default function HeroSection() {
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-none border-0 bg-black">
            <SplitText text="Hi, I'm" className="text-4xl font-bold leading-none tracking-tighter text-white" />
            <div className="h-[100px] w-[400px] relative mt-3">
            <TextPressure minFontSize={36} text="Aashish Dubey" width={false} flex={true} alpha={false} stroke={false} weight={true} italic={true} className="text-4xl font-bold leading-none tracking-tighter text-white" />
            </div>
            <div className="flex gap-4 mt-4">
            <MeetButton />   
            <RainbowButton variant="outline" className="py-3 px-6">
            Get in Touch
            </RainbowButton>   
            </div>
            <RetroGrid />
        </div>
    )
}