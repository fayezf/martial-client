import React from 'react';

const PopularCard = ({ arts }) => {
    const { _id, name, instructor, image, availableSeats, price } = arts;
    return (
        <div className="card w-96 my-2 mb-8 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}
                    <div className="badge badge-secondary">Popular</div>
                </h2>
                <h2 className="card-title">Instructor: {instructor}</h2>
                <p>Available seats: {availableSeats}</p>
                <p>Price: <span className='text-yellow-600'>{price}</span></p>
                <div className="card-actions">
                    <button className="btn btn-wide btn-accent font-bold text-white">Select</button>
                </div>
            </div>
        </div>
    );
};

export default PopularCard;