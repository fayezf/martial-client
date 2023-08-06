import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Zoom } from "react-awesome-reveal";
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useSeats from '../../../hooks/useSeats';

const ClassesAll = ({ martial }) => {
    const { _id, name, instructor, image, availableSeats, price } = martial;
    const { user } = useContext(AuthContext);
    const [, refetch] = useSeats();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSelect = martial => {
        // console.log(martial);
        if (user && user.email) {
            const bookingSeats = { bookingsId: _id, name, instructor, image, availableSeats, price, email: user.email }
            fetch('https://assignment-12-server-flame-nu.vercel.app/seats', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bookingSeats)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Booking added on the seats',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to booking the seats',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <Zoom>
            <div className="card w-72 my-2 mb-8 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">{instructor}</h2>
                    <p>Available seats: {availableSeats}</p>
                    <p>Price: <span className='text-yellow-600'>${price}</span></p>
                    <div className="card-actions">
                        <button onClick={() => handleSelect(martial)} className="btn btn-wide btn-accent font-bold text-white">Select</button>
                    </div>
                </div>
            </div>
        </Zoom>
    );
};

export default ClassesAll;