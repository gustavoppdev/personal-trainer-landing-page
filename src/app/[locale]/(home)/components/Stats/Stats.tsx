// Components
import StatCard from "./StatCard";

// Constants
import { StatsArray } from "@/constants";

export const Stats = () => {
  return (
    <section className="section-container py-14 lg:py-24 grid place-content-start lg:place-content-center">
      <ul className="flex flex-col gap-10 lg:flex-row">
        {StatsArray.map((stat) => (
          <StatCard key={stat.title} stat={stat} />
        ))}
      </ul>
    </section>
  );
};
