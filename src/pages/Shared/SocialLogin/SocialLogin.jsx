import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('https://assignment-12-server-flame-nu.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }
    return (
        <div className='p-8'>
            <div className="divider"></div>
            <div className='flex justify-center items-center border border-gray-500 rounded py-2 gap-2'>
                <p onClick={handleGoogle} className="btn btn-circle btn-outline text-cyan-700"><FaGoogle></FaGoogle></p>
                <div>
                    <span className='text-green-900 font-bold'>Google</span>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;