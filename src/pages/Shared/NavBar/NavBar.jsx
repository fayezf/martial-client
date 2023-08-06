import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><NavLink to="/" className="font-bold text-white">Home</NavLink></li>
        <li><NavLink to="/instructors" className="font-bold text-white">Instructors</NavLink></li>
        <li><NavLink to="/classes" className="font-bold text-white">Classes</NavLink></li>
        <li>
            <NavLink to="/dashboard" className="font-bold text-white">Dashboard</NavLink>
        </li>
        <li><NavLink to="/blog" className="font-bold text-white">Blog</NavLink></li>

    </>
    return (
        <div className="navbar bg-teal-800">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <div className='md:flex'>
                    <img style={{ width: '80px' }} src={logo} alt="" />
                    <div>
                        <p className='text-sm text-white'><span className='font-bold text-lg'>Tiger</span><br /><span className='font-bold text-lg'>Claw</span><br />Martial Arts School</p>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <>
                    <img style={{ height: '2rem', borderRadius: '30px' }} title={user?.displayName} src={user.photoURL} alt="" />
                    <button onClick={handleLogOut} className='font-bold ml-1 text-white btn btn-sm bg-teal-400'>Log Out</button>
                </> : <>
                    <Link to="/login" className='font-bold ml-1 text-white btn btn-sm bg-teal-400'>Login</Link>
                </>
                }
            </div>
        </div>
    );
};

export default NavBar;