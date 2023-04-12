import ServiceAward from '@/components/Services/ServiceAward';
import ServiceHero from '@/components/Services/ServiceHero';
import ServiceTabs from '@/components/Services/ServiceTabs';
import React from 'react';

const services = () => {
    return (
        <div>
           <ServiceHero/>
           <ServiceAward/>
           <ServiceTabs/> 
        </div>
    );
};

export default services;