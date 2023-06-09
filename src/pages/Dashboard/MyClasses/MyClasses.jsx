import React from 'react';
import { Helmet } from 'react-helmet-async';
import useSeats from '../../../hooks/useSeats';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FaTrashAlt, FaMoneyBillAlt } from 'react-icons/fa';

const MyClasses = () => {
    const [seat] = useSeats();
    const total = seat.reduce((sum, item) => item.price + sum, 0)
    return (
        <div className='w-full'>
            <Helmet>
                <title>Martial Arts | My Selected Class</title>
            </Helmet>
            <SectionTitle heading="My Selected Class"></SectionTitle>
            <div className='uppercase font-semibold h-[60px] flex justify-evenly items-center'>
                <h3 className='text-3xl'>Total Class: {seat.length}</h3>
                <h3 className='text-3xl'>Total Payment: {total}</h3>
                <button className="btn btn-warning btn-sm">PAY</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            seat?.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.availableSeats}</td>
                                <td>{item.price}</td>
                                <td>
                                    <div className='flex gap-2'>
                                        <button className="btn btn-ghost btn-sm bg-primary text-white"><FaMoneyBillAlt></FaMoneyBillAlt></button>
                                        <div>
                                            <button className="btn btn-ghost btn-sm bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
                                        </div>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;