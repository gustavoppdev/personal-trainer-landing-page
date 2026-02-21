// Next.js & Next-Intl
import Image from "next/image";

// Componentes
import { Hero } from "./components/Hero";
import NavigationBar from "@/components/layout/NavigationBar";

// Assets
import { heroImage } from "@/assets";
import { Stats } from "./components/Stats";
import CustomerQuote from "./components/CustomerQuote";
import { About } from "./components/About";

const Home = () => {
  return (
    <main>
      <div
        id="home"
        className="relative min-h-dvh flex flex-col justify-between w-full"
      >
        <Image
          src={heroImage}
          placeholder="blur"
          alt="Rachel Stone"
          fill
          priority
          fetchPriority="high"
          className="object-cover aspect-16/10 object-right -z-10"
          quality={90}
        />
        <NavigationBar />
        <Hero />
      </div>
      <Stats />
      <CustomerQuote />

      <div className="space-y-10">
        <About />
      </div>
    </main>
  );
};

export default Home;
