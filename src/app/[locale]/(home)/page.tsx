// Next.js
import Image from "next/image";

// Componentes
import NavigationBar from "@/components/layout/NavigationBar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import CustomerQuote from "./components/CustomerQuote";
import { About } from "./components/About";
import LogosTicker from "./components/LogosTicker";
import { Services } from "./components/Services";
import { HowWorks } from "./components/HowWorks";
import { Programs } from "./components/Programs";
import { Results } from "./components/Results";

// Assets
import { heroImage } from "@/assets";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";

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

      <div>
        <About />
        <LogosTicker />
      </div>

      <div className="bg-custom-black-90">
        <Services />
      </div>
      <HowWorks />
      <Programs />
      <Results />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Home;
