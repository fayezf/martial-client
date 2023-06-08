import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => console.log(error))
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