import AboutCards from '@/components/About/AboutCards';
import AboutHero from '@/components/About/AboutHero';
import AboutIndustries from '@/components/About/AboutIndustries';
import AboutSquad from '@/components/About/AboutSquad';
import AboutValues from '@/components/About/AboutValues';
import BestWork from '@/components/Home/BestWork';
import Brands from '@/components/Home/Brands';
import ContactForm from '@/components/Home/ContactForm';
import FAQ from '@/components/Home/FAQ';
import Technologies from '@/components/Home/Technologies';
import Testimonial from '@/components/Home/Testimonial';
import React from 'react';

const about = () => {
    return (
        <div>
            <AboutHero/>
            <AboutCards/>
            <AboutValues/>
            <AboutSquad/>
            <AboutIndustries/>
            <Technologies/>
            <Testimonial/>
            <BestWork/>
            <Brands/>
            <ContactForm/>
            <FAQ/>
        </div>
    );
};

export default about;