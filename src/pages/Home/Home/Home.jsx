import React from 'react';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet-async';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import Contact from '../About/Contact';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Martial Arts | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <Contact></Contact>
        </div>
    );
};

export default Home;