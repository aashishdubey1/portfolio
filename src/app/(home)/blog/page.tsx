import ShinyText from "@/components/blocks/TextAnimations/ShinyText/ShinyText";

export default function Blog() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-white">Blog Page</h1>
            <ShinyText text="Coming Soon" disabled={false} speed={3} className="text-4xl font-bold text-white mt-4" />
        </div>
    )   
}