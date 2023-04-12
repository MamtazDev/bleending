import ContactOffice from "@/components/Contact/ContactOffice";
import ContactForm from "@/components/Home/ContactForm";
import FAQ from "@/components/Home/FAQ";
import Meta from "@/utils/Meta";
import React from "react";

const contact = () => {
  return (
    <>
      <Meta title={"Contact Us - Bleeding Edge"} />
      <ContactForm />
      <ContactOffice />
      <FAQ />
    </>
  );
};

export default contact;
