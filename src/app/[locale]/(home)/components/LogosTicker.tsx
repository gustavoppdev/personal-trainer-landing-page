// Next.js
import Image from "next/image";

// Constants
import { LogosTickerArray } from "@/constants";

const LogosTicker = () => {
  return (
    <div className="section-container py-16 select-none">
      <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-14 pr-14 flex-none animate-infinite-scroll">
          {Array.from({ length: 3 }).map((_, index) =>
            LogosTickerArray.map((logo) => (
              <Image
                src={logo.image}
                alt={logo.alt}
                key={`${logo.alt}-${index}`}
                className="h-8 w-auto opacity-40 dark:invert"
              />
            )),
          )}
        </div>
      </div>
    </div>
  );
};

export default LogosTicker;
