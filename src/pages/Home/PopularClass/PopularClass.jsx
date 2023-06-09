import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import PopularCard from './PopularCard';
import useClass from '../../../hooks/useClass';

const PopularClass = () => {
    const [classes] = useClass();
    const popular = classes.filter(item => item.category === 'popular');
    return (
        <div>
            <SectionTitle
                heading="Popular Martial Classes"
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 ml-8'>
                {
                    popular?.map(arts => <PopularCard
                        key={arts._id}
                        arts={arts}
                    ></PopularCard>)
                }
            </div>
        </div>
    );
};

export default PopularClass;