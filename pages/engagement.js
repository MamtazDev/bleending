import EngagementHero from "@/components/Engagement/EngagementHero";
import EngagementModels from "@/components/Engagement/EngagementModels";
import Brands from "@/components/Home/Brands";
import ContactForm from "@/components/Home/ContactForm";
import FAQ from "@/components/Home/FAQ";
import Testimonial from "@/components/Home/Testimonial";
import React from "react";

const engagement = () => {
  return (
    <div>
      <EngagementHero />
      <EngagementModels />
      <Testimonial />
      <Brands />
      <ContactForm />
      <FAQ />
    </div>
  );
};

export default engagement;
