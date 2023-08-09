import React from 'react';
import { Flip } from "react-awesome-reveal";

const InstructorCard = ({ teacher }) => {
    const { _id, instructor, image, email } = teacher;
    return (
        <Flip>
            <div className="card w-72 h-full border-2 hover:border-teal-300 my-2 mb-8 bg-base-100 shadow-xl">
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
        </Flip>
    );
};

export default InstructorCard;