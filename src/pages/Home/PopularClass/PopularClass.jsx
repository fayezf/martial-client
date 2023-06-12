import React from 'react';
import PopularCard from './PopularCard';
import useClass from '../../../hooks/useClass';

const PopularClass = () => {
    const [classes] = useClass();
    const popular = classes.filter(item => item.category === 'popular');
    return (
        <div>
            <h3 className='text-3xl font-bold uppercase text-center py-4'>Popular Martial Classes</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
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