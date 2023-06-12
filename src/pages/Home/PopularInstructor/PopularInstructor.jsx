import React from 'react';
import InstructorCard from './InstructorCard';
import useInstructor from '../../../hooks/useInstructor';

const PopularInstructor = () => {
    const [instructors] = useInstructor();
    const popular = instructors.filter(item => item.category === 'popular');

    return (
        <div>
            <h3 className='text-3xl font-bold uppercase text-center py-4'>Popular Martial Instructors</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                {
                    popular?.map(teacher => <InstructorCard
                    key={teacher._id}
                    teacher={teacher}
                    ></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;