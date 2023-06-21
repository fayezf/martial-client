import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';

const MyClass = () => {
    const { user } = useAuth();
    const [myClasses, setMyClasses] = useState([]);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/classes/${user?.email}`)
            .then(res => {
                setMyClasses(res.data)
            })
    }, [])

    return (
        <div className='w-full px-10 align-top'>
            <Helmet>
                <title>Martial Arts | My Class</title>
            </Helmet>
            <h3 className='text-3xl font-bold uppercase text-center py-4'>My Class</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClasses.map((myClass, index) => <tr key={myClass._id}>
                                <td>{index + 1}</td>
                                <td>{myClass.image}</td>
                                <td>{myClass.email}</td>
                                <td>${myClass.price}</td>
                                <td>
                                    <button className="btn btn-primary">Denied</button>
                                </td>
                                <td>
                                    <button className="btn btn-success btn-ghost">Feedback</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClass;