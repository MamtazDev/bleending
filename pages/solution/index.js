import BestWork from '@/components/Home/BestWork';
import Brands from '@/components/Home/Brands';
import ContactForm from '@/components/Home/ContactForm';
import FAQ from '@/components/Home/FAQ';
import Technologies from '@/components/Home/Technologies';
import Testimonial from '@/components/Home/Testimonial';
import SolutionAnim from '@/components/Solution/SolutionAnim';
import SolutionGames from '@/components/Solution/SolutionGames';
import SolutionHero from '@/components/Solution/SolutionHero';
import SolutionSteps from '@/components/Solution/SolutionSteps';
import SolutionWorking from '@/components/Solution/SolutionWorking';
import SolutionWhyUs from '@/components/Solution/WhyUs';
import React from 'react';

const index = () => {
    return (
        <div>
        <SolutionHero />
        <SolutionAnim />
        <SolutionSteps />
        <SolutionGames />
        <Technologies />
        <SolutionWorking />
        <SolutionWhyUs />
        <Testimonial />
        <BestWork />
        <Brands />
        <ContactForm />
        <FAQ />
      </div>
    );
};

export default index;