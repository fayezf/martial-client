import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const AddClass = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, instructor, availableSeats, price } = data;
                    const newClass = { name, instructor, availableSeats, price: parseFloat(price), email: user?.email, image: imgURL }

                    axiosSecure.post('/classes', newClass)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    };

    return (
        <div className='w-full px-10'>
            <Helmet>
                <title>Martial Arts | Add Classes</title>
            </Helmet>
            <h3 className='text-3xl font-bold uppercase text-center py-4'>Add A Class</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="md:flex gap-x-3 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register("name")} placeholder="Class Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register("instructor")} placeholder="Instructor Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex gap-x-3 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register("availableSeats")} placeholder="Available Seats" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" {...register("price")} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <label className="input-group">
                        <input type="email" {...register("email")} placeholder="Email" className="input input-bordered w-full" />
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Class Image</span>
                    </label>
                    <input type="file" {...register("image")} className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <input className="btn btn-block mt-4" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;