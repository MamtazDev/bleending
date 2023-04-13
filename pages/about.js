import AboutCards from "@/components/About/AboutCards";
import AboutHero from "@/components/About/AboutHero";
import AboutIndustries from "@/components/About/AboutIndustries";
import AboutSquad from "@/components/About/AboutSquad";
import AboutValues from "@/components/About/AboutValues";
import BestWork from "@/components/Home/BestWork";
import Brands from "@/components/Home/Brands";
import ContactForm from "@/components/Home/ContactForm";
import FAQ from "@/components/Home/FAQ";
import Technologies from "@/components/Home/Technologies";
import Testimonial from "@/components/Home/Testimonial";
import Meta from "@/utils/Meta";
import React from "react";

const about = () => {
  return (
    <>
      <Meta
        title={"About Us - Bleeding Edge"}
        description={
          "Welcome to Bleeding Edge! Our company is at the forefront of innovation, constantly pushing the boundaries of what's possible in our industry. Learn more about our cutting-edge technology and expert team on our page. Discover how we're staying ahead of the curve and driving progress forward."
        }
      />
      <AboutHero />
      <AboutCards />
      <AboutValues />
      <AboutSquad />
      <AboutIndustries />
      <Technologies />
      <Testimonial />
      <BestWork />
      <Brands />
      <ContactForm />
      <FAQ />
    </>
  );
};

export default about;
