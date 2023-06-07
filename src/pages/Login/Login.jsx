import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/banner/login.jpg';

const Login = () => {
    // const { signIn } = useContext(AuthContext);
    // const navigate = useNavigate();
    // const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        // signIn(email, password)
        //     .then(result => {
        //         const user = result.user;
        //         console.log(user);
        //         Swal.fire({
        //             title: 'User login successful',
        //             showClass: {
        //                 popup: 'animate__animated animate__fadeInDown'
        //             },
        //             hideClass: {
        //                 popup: 'animate__animated animate__fadeOutUp'
        //             }
        //         });
        //         navigate(from, { replace: true });
        //     });
    }

    return (
        <>
            {/* <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet> */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col gap-8 md:flex-row-reverse">
                    <div className='w-1/2'>
                        <img style={{height: '380px'}} className='rounded-lg' src={login} alt="" />
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <h3 className='text-2xl text-center mt-4'>Please Login!!</h3>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered w-full" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary w-full" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center'><small>New Here? <Link to="/signup">Create an account</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;