import ContactOffice from '@/components/Contact/ContactOffice';
import ContactForm from '@/components/Home/ContactForm';
import FAQ from '@/components/Home/FAQ';
import React from 'react';

const contact = () => {
    return (
        <div>
            <ContactForm/>
            <ContactOffice/>
            <FAQ/>
        </div>
    );
};

export default contact;