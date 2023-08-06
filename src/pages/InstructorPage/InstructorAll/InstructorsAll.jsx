import React from 'react';
import { Zoom } from "react-awesome-reveal";

const InstructorsAll = ({ teach }) => {
    const { _id, instructor, image, email } = teach;
    return (
        <Zoom>
            <div className="card w-72 my-2 mb-8 bg-base-100 shadow-xl">
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
        </Zoom>
    );
};

export default InstructorsAll;