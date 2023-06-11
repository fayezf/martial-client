import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Slide } from "react-awesome-reveal";
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useSeats from '../../../hooks/useSeats';

const PopularCard = ({ arts }) => {
    const { _id, name, instructor, image, availableSeats, price } = arts;
    const {user} = useContext(AuthContext);
    const [, refetch] = useSeats();
    const navigate = useNavigate();
    const location = useLocation()

    const handleSelect = arts => {
        console.log(arts);
        if(user && user.email){
            const bookingSeats = {bookingsId: _id, name, instructor, image, availableSeats, price, email: user.email}
            fetch('http://localhost:5000/seats', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bookingSeats)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to booking the seats',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }

    return (
        <Slide>
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
                    <p>Price: <span className='text-yellow-600'>${price}</span></p>
                    <div className="card-actions">
                        <button onClick={() => handleSelect(arts)} className="btn btn-wide btn-accent font-bold text-white">Select</button>
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default PopularCard;