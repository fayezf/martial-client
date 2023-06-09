import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { FaDollyFlatbed } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><NavLink className="font-bold" to="/">Home</NavLink></li>
        <li><NavLink className="font-bold" to="/instructors">Instructors</NavLink></li>
        <li><NavLink className="font-bold" to="/classes">Classes</NavLink></li>
        <li>
            <Link to="/">
                <button className='btn gap-2'>
                    <FaDollyFlatbed></FaDollyFlatbed>
                    <div className="badge badge-secondary">+0</div>
                </button>
            </Link>
        </li>

        {
            user &&
            <div className="avatar online">
                <div className="w-18 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img title={user.displayName} style={{ height: '3rem' }} src={user.photoURL} />
                </div>
            </div>
        }

        {
            user ? <>
                <button onClick={handleLogOut} className='btn btn-ghost'>Log Out</button>
            </> : <>
                <li><Link to="/login" className='font-bold'>Login</Link></li>
            </>
        }
    </>
    return (
        <div className="navbar bg-base-300">
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
                        <p className='text-sm'><span className='font-bold text-lg'>Tiger</span><br /><span className='font-bold text-lg'>Claw</span><br />Martial Arts School</p>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/blog"><button className='btn'>Blog</button></Link>
            </div>
        </div>
    );
};

export default NavBar;