import React from 'react';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Martial Arts | Home</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;