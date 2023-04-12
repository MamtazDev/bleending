import ContactForm from '@/components/Home/ContactForm';
import FAQ from '@/components/Home/FAQ';
import WorkCards from '@/components/Work/WorkCards';
import WorkHero from '@/components/Work/WorkHero';
import React from 'react';

const work = () => {
    return (
        <div>
            <WorkHero/>
            <WorkCards/>
            <ContactForm/>
            <FAQ/>
        </div>
    );
};

export default work;