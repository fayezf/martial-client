import React from 'react';

const InstructorCard = ({ teacher }) => {
    const { _id, instructor, image, email } = teacher;
    return (
        <div className="card w-96 my-2 mb-8 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{instructor}
                    <div className="badge badge-secondary">Popular</div>
                </h2>
                <p>Email: {email}</p>
            </div>
        </div>
    );
};

export default InstructorCard;