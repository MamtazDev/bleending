import CareerFewThings from "@/components/Career/CareerFewThings";
import CareerFindPositions from "@/components/Career/CareerFindPositions";
import CareerGlobal from "@/components/Career/CareerGlobal";
import CareerHero from "@/components/Career/CareerHero";
import CareerWhoWeAre from "@/components/Career/CareerWhoWeAre";
import CareerWhyUs from "@/components/Career/CareerWhyUs";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import React from "react";

const CareerPage = () => {
  return (
    <section className="bg-black text-light">
      <CareerHero />
      <CareerFewThings />
      <CareerFindPositions />
      <CareerWhoWeAre />
      <CareerWhyUs />
      <CareerGlobal />
      <ContactForm />
      <FAQ />
    </section>
  );
};

export default CareerPage;
