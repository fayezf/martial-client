import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { FaChalkboard, FaChalkboardTeacher, FaCreditCard, FaHome } from 'react-icons/fa';
import useSeats from '../hooks/useSeats';

const Dashboard = () => {
    const [seat] = useSeats();
    return (
        <div className="drawer align-top lg:drawer-open my-4">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-yellow-700">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full text-base-content">
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/dashboard/myclasses"><FaChalkboard></FaChalkboard> My Selected Class
                        <span className='badge badge-secondary'>+{seat?.length || 0}</span>
                    </NavLink>
                    </li>
                    <li><NavLink to="/dashboard/enroll"><FaChalkboardTeacher></FaChalkboardTeacher> My Enrolled Class</NavLink></li>
                    <li><NavLink to="/dashboard/history"><FaCreditCard></FaCreditCard> Payment History</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;