import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { Helmet } from 'react-helmet';
import CheckoutForm from './CheckoutForm';
import { useLoaderData, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const PaymentGateWay = () => {
    const {id} = useParams()
    const data = useLoaderData()
    const [newUpdatedInfo , setNewUpdatedInfo] = useState({})

    useEffect(()=>{
        const filterUpdate = data?.find(items => items._id == id)
        setNewUpdatedInfo(filterUpdate)
    },[data, id])
    console.log(newUpdatedInfo)
    
    console.log(data)
    return (
        <div className='mb-60 mt-28'>
            <Helmet>
                <title>
                    Momentum Daily | Payment
                </title>
            </Helmet>

            <Elements stripe={stripePromise}>
        <CheckoutForm newUpdatedInfo={newUpdatedInfo} >

        </CheckoutForm>
            </Elements>
        </div>
    );
};

export default PaymentGateWay;