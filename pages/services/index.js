import Brands from "@/components/Home/Brands";
import ContactForm from "@/components/Home/ContactForm";
import FAQ from "@/components/Home/FAQ";
import ServiceAward from "@/components/Services/ServiceAward";
import ServiceHero from "@/components/Services/ServiceHero";
import ServiceLatestGames from "@/components/Services/ServiceLatestGames";
import ServiceTabs from "@/components/Services/ServiceTabs";
import ServiceWhyUs from "@/components/Services/ServiceWhyUs";
import Meta from "@/utils/Meta";
import React from "react";

const services = () => {
  return (
    <>
      <Meta title={"Services by Bleeding Edge"} />
      <ServiceHero />
      <ServiceAward />
      <ServiceTabs />
      <ServiceWhyUs />
      <ServiceLatestGames />
      <Brands />
      <ContactForm />
      <FAQ />
    </>
  );
};

export default services;
