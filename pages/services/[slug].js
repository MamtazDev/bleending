import { useRouter } from "next/router";
import React from "react";
import services from "../../utils/services";
import ServiceHero from "@/components/Services/ServiceHero";
import ServiceWhyUs from "@/components/Services/ServiceWhyUs";
import ServiceLatestGames from "@/components/Services/ServiceLatestGames";
import Brands from "@/components/Home/Brands";
import ContactForm from "@/components/Home/ContactForm";
import FAQ from "@/components/Home/FAQ";
import faqs from "../../utils/faqs-service";
import ServiceDescription from "@/components/Services/ServiceDescription";
import Meta from "@/utils/Meta";

const ServicesItems = () => {
  const router = useRouter();
  const { slug } = router.query;

  const content = services[slug];

  return (
    <>
      <Meta title={content?.title} />
      <ServiceHero title={content?.title} />
      <ServiceDescription contents={content?.content} />
      <ServiceWhyUs title={content?.title} />
      <ServiceLatestGames />
      <Brands />
      <ContactForm />
      <FAQ questions={faqs(content?.title)} />
    </>
  );
};

export default ServicesItems;
