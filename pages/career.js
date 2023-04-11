import CareerFewThings from "@/components/Career/CareerFewThings";
import CareerFindPositions from "@/components/Career/CareerFindPositions";
import CareerHero from "@/components/Career/CareerHero";
import React from "react";

const CareerPage = () => {
  return (
    <section className="bg-black text-light">
      <CareerHero />
      <CareerFewThings />
      <CareerFindPositions />
    </section>
  );
};

export default CareerPage;
