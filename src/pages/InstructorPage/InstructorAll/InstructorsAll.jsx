import React from 'react';

const InstructorsAll = ({ teach }) => {
    const { _id, instructor, image, email } = teach;
    return (
        <div className="card w-96 my-2 mb-8 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{instructor}</h2>
                <p>Email: {email}</p>
                <div className="card-actions">
                    <button className="btn btn-wide btn-accent font-bold text-white">See Class</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorsAll;