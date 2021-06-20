import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const PaymentForm = ({ setPaymentSuccess }) => {

    const [PaymentError, setPaymentError] = useState(null)
    const [paymentComplete, setPaymentComplete] = useState(null)

    const elements = useElements();
    const stripe = useStripe();
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message)
            setPaymentComplete(null)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setPaymentComplete(paymentMethod.id)
            setPaymentError(null)

        }
    };
    const handleClick = () => {
        if (paymentComplete) {
            setPaymentSuccess(true)
        }
    }

    return (
        <div className="mt-3">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <CardElement />
                </div>

                <div className="mb-3">
                    <button className="btn btn-success" type="submit" disabled={!stripe}>
                        Complete Payment
                    </button>
                </div>
                {
                    paymentComplete && <button onClick={handleClick} className="btn btn-danger">Now post</button>
                }
            </form>
            {
                PaymentError && <p style={{ color: 'red' }}>{PaymentError}</p>
            }
            {
                paymentComplete && <p style={{ color: 'green' }}>your payment is successful</p>
            }
        </div>
    );
};

export default PaymentForm;