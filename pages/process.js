import Brands from "@/components/Home/Brands";
import ContactForm from "@/components/Home/ContactForm";
import FAQ from "@/components/Home/FAQ";
import Testimonial from "@/components/Home/Testimonial";
import ProcessHero from "@/components/Process/ProcessHero";
import ProcessSteps from "@/components/Process/ProcessSteps";
import ProcessTechnology from "@/components/Process/ProcessTechnology";
import React from "react";

const process = () => {
  return (
    <div>
      <ProcessHero />
      <ProcessTechnology />
      <ProcessSteps />
      <Testimonial />
      <Brands />
      <ContactForm />
      <FAQ />
    </div>
  );
};

export default process;
