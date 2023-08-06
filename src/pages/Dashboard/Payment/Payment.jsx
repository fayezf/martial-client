import React from 'react';
import { Helmet } from 'react-helmet-async';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useSeats from '../../../hooks/useSeats';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [seat] = useSeats();
    const total = seat.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div className='md:w-full'>
            <Helmet>
                <title>Martial Arts | Payment</title>
            </Helmet>
            <h3 className='text-3xl font-roboto uppercase text-center py-4'>Payment</h3>
            <Elements stripe={stripePromise}>
                <CheckoutForm seat={seat} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;