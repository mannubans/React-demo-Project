import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ContactForm from '../Components/Contact';
import Banner from '../Components/Banner';
const Contact = () => {
    return (
        <>
            <Header />
            <Banner title="Contact" bgimage="url(Images/contact2.jpeg)" />
            <ContactForm />
            <Footer />
        </>
    )
}
export default Contact;