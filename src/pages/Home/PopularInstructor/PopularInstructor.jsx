import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import InstructorCard from './InstructorCard';

const PopularInstructor = () => {
    const [instructors, setInstructor] = useState([]);

    useEffect(() => {
        fetch('instructors.json')
        .then(res => res.json())
        .then(data => setInstructor(data))
    }, [])

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