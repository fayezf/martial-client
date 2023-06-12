import React from 'react';
import { Helmet } from 'react-helmet-async';
import useClass from '../../../hooks/useClass';
import ClassesAll from './ClassesAll';

const Classes = () => {
    const [classes] = useClass();

    return (
        <div>
            <Helmet>
                <title>Martial Arts | Classes</title>
            </Helmet>
            <h3 className='text-3xl font-bold uppercase text-center py-4'>Our All Classes</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12 '>
                {
                    classes?.map(martial => <ClassesAll
                    key={martial._id}
                    martial={martial}
                    ></ClassesAll>)
                }
            </div>
        </div>
    );
};

export default Classes;