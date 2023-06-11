import React from 'react';
import { Helmet } from 'react-helmet-async';
import useInstructor from '../../../hooks/useInstructor';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import InstructorsAll from './InstructorsAll';

const Instructors = () => {
    const [instructors] = useInstructor();
    return (
        <div>
            <Helmet>
                <title>Martial Arts | Instructor</title>
            </Helmet>
            <SectionTitle heading="Our All Instructor"></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                {
                    instructors?.map(teach => <InstructorsAll
                        key={teach._id}
                        teach={teach}
                    ></InstructorsAll>)
                }
            </div>
        </div>
    );
};

export default Instructors;