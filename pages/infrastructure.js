import ContactForm from '@/components/Home/ContactForm';
import FAQ from '@/components/Home/FAQ';
import InfrastructureArchitecture from '@/components/Infrastructure/InfrastructureArchitecture';
import InfrastructureCards from '@/components/Infrastructure/InfrastructureCards';
import InfrastructureHero from '@/components/Infrastructure/InfrastructureHero';
import InfrastructureTabs from '@/components/Infrastructure/InfrastructureTabs';
import React from 'react';

const infrastructure = () => {
    return (
        <div>
            <InfrastructureHero/>
            <InfrastructureTabs/>
            <InfrastructureArchitecture/>
            <InfrastructureCards/>
            <ContactForm/>
            <FAQ/>
        </div>
    );
};

export default infrastructure;