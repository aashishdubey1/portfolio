import { Navbar } from "@/components/Navbar";


export default function Home() {
  return (
    <div className="flex flex-col items-center md:px-4 px-8  mt-10  w-full text-slate-300 mx-auto">
      <div className="fixed top-0 z-50">
        <Navbar />
      </div>
    </div>
  ) 
}
