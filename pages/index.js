import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HeaderTwo from "@/components/HeaderTwo";
import HomeHero from "@/components/Home/HomeHero";
import OurService from "@/components/Home/OurService";
import BestWork from "@/components/Home/BestWork";
import OurProcess from "@/components/Home/OurProcess";
import WhyUs from "@/components/Home/WhyUs";
import Testimonial from "@/components/Home/Testimonial";
import Technologies from "@/components/Home/Technologies";
import Brands from "@/components/Home/Brands";
import ContactForm from "@/components/Home/ContactForm";
import FAQ from "@/components/Home/FAQ";
import Meta from "@/utils/Meta";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Meta
        title={"Bleeding Edge"}
        description={
          "Quality iOS & Android Games Development Company in Dubai , UAE & Lahore , Pakistan"
        }
      />
      <>
        <HomeHero />
        <OurService />
        <BestWork />
        <OurProcess />
        <WhyUs />
        <Technologies />
        <Testimonial />
        <Brands />
        <ContactForm />
        <FAQ />
      </>
    </>
  );
}
