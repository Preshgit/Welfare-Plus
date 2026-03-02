import About from "@/components/homepage/about";
import Approach from "@/components/homepage/approach";
import Faq from "@/components/homepage/faq";
import Illustration from "@/components/homepage/illustration";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <About />
      <Approach />
      <Faq />
      <Illustration />
    </div>
  );
}
