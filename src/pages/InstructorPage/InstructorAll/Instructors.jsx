import React from 'react';
import { Helmet } from 'react-helmet-async';
import useInstructor from '../../../hooks/useInstructor';
import InstructorsAll from './InstructorsAll';

const Instructors = () => {
    const [instructors] = useInstructor();
    return (
        <div>
            <Helmet>
                <title>Martial Arts | Instructor</title>
            </Helmet>
            <div className='flex flex-col items-center'>
                <h3 className='text-3xl font-roboto uppercase text-center py-4'>Our All Instructors</h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                    {
                        instructors?.map(teach => <InstructorsAll
                            key={teach._id}
                            teach={teach}
                        ></InstructorsAll>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Instructors;