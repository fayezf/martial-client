import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import InstructorCard from './InstructorCard';
import useInstructor from '../../../hooks/useInstructor';

const PopularInstructor = () => {
    const [instructors] = useInstructor();

    return (
        <div>
            <SectionTitle
            heading="Our Popular Instructors"
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 ml-8'>
                {
                    instructors?.slice(4).map(teacher => <InstructorCard
                    key={teacher._id}
                    teacher={teacher}
                    ></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;