import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Classes = () => {
    return (
        <div>
            <Helmet>
                <title>Martial Arts | Classes</title>
            </Helmet>
            <SectionTitle heading="Our All Classes"></SectionTitle>
        </div>
    );
};

export default Classes;