import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../assets/icon/404.gif';

const ErrorPage = () => {
    return (
        <div className='mt-12'>
            <div className='relative ml-64'>
                <img src={errorImg} alt="" />
                <div className='absolute left-5 right-5 bottom-5'>
                    <button className='btn btn-error'><Link className='text-decoration-none text-white' to='/'>Back To Home</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;