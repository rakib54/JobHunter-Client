import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe('pk_test_51Ie0W0DZredcbLuuvscGjiZi5dfw8LRyqFDzeMwJXC3Njt6iILrbkAxvfn5RxJ5bDSveOPxYH6jiUNumDjYMF4OJ00Utkn0WAT');

const Payment = ({setPaymentSuccess}) => {
    
    return (
        <div>
            
            <Elements stripe={stripePromise}>
               <PaymentForm setPaymentSuccess={setPaymentSuccess}></PaymentForm>
            </Elements>
        </div>
    );
};

export default Payment;