import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { FaChalkboard, FaChalkboardTeacher, FaUsers, FaCreditCard, FaHome } from 'react-icons/fa';
import useSeats from '../hooks/useSeats';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [seat] = useSeats();
    
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-yellow-700">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <div className="divider"></div>
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/allusers"><FaUsers/> Manage Users
                            </NavLink>
                            </li>
                            <li><NavLink to="/dashboard/allclasses"><FaChalkboardTeacher></FaChalkboardTeacher> Manage Classes</NavLink></li>
                            <li><NavLink to="/dashboard/myclass"><FaChalkboard/> My Classes</NavLink></li>
                            <li><NavLink to="/dashboard/addclass"><FaChalkboardTeacher/> Add A Class</NavLink></li>
                        </> : <>
                            <li><NavLink to="/dashboard/selectedclasses"><FaChalkboard></FaChalkboard> My Selected Classes
                                <span className='badge badge-secondary'>+{seat?.length || 0}</span>
                            </NavLink>
                            </li>
                            <li><NavLink to="/dashboard/enroll"><FaChalkboardTeacher></FaChalkboardTeacher> My Enrolled Classes</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaCreditCard></FaCreditCard> Payment History</NavLink></li>
                        </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;