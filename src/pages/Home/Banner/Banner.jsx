import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/banner/banner.jpg';
import img2 from '../../../assets/banner/banner1.jpg';
import img3 from '../../../assets/banner/banner2.jpg';
import img4 from '../../../assets/banner/banner3.jpg';
import img5 from '../../../assets/banner/banner4.jpg';
import img6 from '../../../assets/banner/banner5.jpg';

const Banner = () => {
    return (
        <Carousel>
            <div className='relative'>
                <img src={img1} />
                <div className='absolute top-28'>
                    <p style={{ marginLeft: '450px' }} className='font-bold uppercase text-2xl'>Martial Arts</p>
                    <p style={{ marginLeft: '450px' }} className='font-bold uppercase text-6xl'>Train Different</p>
                    <button style={{ marginLeft: '450px' }} className="btn btn-active btn-ghost">Our vision</button>
                </div>
            </div>
            <div className='relative'>
                <img src={img2} />
                <div className='absolute top-28'>
                    <p style={{ marginLeft: '200px' }} className='font-bold uppercase text-2xl text-white'>Martial Arts</p>
                    <p style={{ marginLeft: '200px' }} className='font-bold uppercase text-6xl text-white'>The best fighters are never angry</p>
                </div>
            </div>
            <div className='relative'>
                <img src={img3} />
                <div className='absolute top-28'>
                    <p style={{ marginLeft: '450px' }} className='font-bold uppercase text-2xl text-white'>Martial Arts</p>
                    <p style={{ marginLeft: '450px' }} className='font-bold text-6xl text-white'>'Where There Is<br />Preparation <br /> There Is No Fear'</p>
                </div>
            </div>
            <div className='relative'>
                <img src={img4} />
                <div className='absolute top-28'>
                    <p style={{ marginLeft: '350px' }} className='font-bold uppercase text-2xl text-white'>Martial Arts</p>
                    <p style={{ marginLeft: '350px' }} className='font-bold uppercase text-6xl text-white'>The best fighters <br /> are never angry</p>
                </div>
            </div>
            <div className='relative'>
                <img src={img5} />
                <div className='absolute top-28'>
                    <p style={{ marginLeft: '450px' }} className='font-bold uppercase text-2xl text-white'>Martial Arts</p>
                    <p style={{ marginLeft: '450px' }} className='font-bold uppercase text-6xl text-white'>Train Different</p>
                </div>
            </div>
            <div className='relative'>
                <img src={img6} />
                <div className='absolute top-36'>
                    <p style={{ marginLeft: '650px' }} className='font-bold uppercase text-2xl text-white'>Martial Arts</p>
                    <p style={{ marginLeft: '650px' }} className='font-bold uppercase text-6xl text-white'>Where There Is<br />Preparation <br /> There Is No Fear'</p>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;