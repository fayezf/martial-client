import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import PopularCard from './PopularCard';

const PopularClass = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('classes.json')
        .then(res => res.json())
        .then(data => setClasses(data))
    }, [])

    return (
        <div>
            <SectionTitle
                heading="Popular Martial Classes"
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 ml-8'>
                {
                    classes?.slice(4).map(arts => <PopularCard
                    key={arts._id}
                    arts={arts}
                    ></PopularCard>)
                }
            </div>
        </div>
    );
};

export default PopularClass;