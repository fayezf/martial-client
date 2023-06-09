import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useClass from '../../../hooks/useClass';
import ClassesAll from './ClassesAll';

const Classes = () => {
    const [classes] = useClass();

    return (
        <div>
            <Helmet>
                <title>Martial Arts | Classes</title>
            </Helmet>
            <SectionTitle heading="Our All Classes"></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 ml-8'>
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