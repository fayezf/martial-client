import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';

const PaymentHistory = () => {
    const { user } = useAuth();
    const [histories, setHistories] = useState([]);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/payments/${user?.email}`)
            .then(res => {
                setHistories(res.data)
            })
    }, [])

    return (
        <div className='md:w-full px-10 align-top'>
            <Helmet>
                <title>Martial Arts | Payment History</title>
            </Helmet>
            <h3 className='text-3xl font-roboto uppercase text-center py-4'>Payment History</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            histories.map((payment, index) => <tr key={payment._id}>
                                <td>{index + 1}</td>
                                <td>{payment.email}</td>
                                <td>{payment.quantity}</td>
                                <td>{payment.price}</td>
                                <td>{payment.date}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;