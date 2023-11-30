import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useEffect } from "react";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const CheckoutForm = ({newUpdatedInfo}) => {
  const {user} = UseAuth()
  const [clientSecret , SetclientSecret] = useState('')
  const [transactionId, settransactionId] = useState("");
    // console.log(newUpdatedInfo)

    // eslint-disable-next-line react/prop-types
    const Price = parseInt(newUpdatedInfo?.price)

    
    
    const [error , Seterror] = useState('')
    const stripe = useStripe();
  const elements = useElements();
  const AxiosSecure = UseAxiosSecure()
  useEffect(()=>{
        AxiosSecure.post('/create-payment-intent' , {Price} )
        .then(res => {
            // console.log(res.data.clientSecret)
            SetclientSecret(res.data.clientSecret)
        })
        .catch(error => {
            console.log(error)
        })
  },[AxiosSecure, Price])
    const handleSubmit = async (event) => {
        event.preventDefault()



        if (!stripe || !elements) {
           
            return;
          }

          const card = elements.getElement(CardElement)

          if (card == null) {
            return;
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if (error) {
            console.log('[error]', error);
            Seterror(error.message)
          } else {
            console.log('[PaymentMethod]', paymentMethod);
            Seterror('')
          }

          
          const {paymentIntent , error : ConfirmError} = await stripe.confirmCardPayment(clientSecret , {
            payment_method : {
              card : card,
              billing_details : {

                name : user?.displayName || 'anonymous',
                email : user?.email || 'anonymous'

              }
            }

            
          })

          if(ConfirmError){
            console.log(ConfirmError)
          }
          else{
            console.log('payment intent ' , paymentIntent)
            if(paymentIntent.status === "succeeded"){
              console.log('transaction Id ' , paymentIntent.id)
              settransactionId(paymentIntent.id)
            
             const info = {
               paymentEmail: user?.email,
               transactionId: paymentIntent.id,
              isPremium: true,
              date: new Date().toLocaleDateString()
             }
             
         const res =  await AxiosSecure.put(`/users/paymentupdate/${user.email}` , info)


              console.log('payment' , res.data)
             
             if(res.data?.modifiedCount > 0){

                               
              Swal.fire({
                icon: "success",
                title: "Payment Successful",
                showConfirmButton: false,
                timer: 1000
              });
           }
             
            
            
            
            
            }
          }
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <CardElement

        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
       <button className="px-4 py-1 mt-3 bg-lime-600 text-white" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-500 text-xl">{error}</p>
      {transactionId && <p className="text-green-500 text-xl">
        <span className="font-bold text-black"> Your payment is successful you transactionId is :</span>{transactionId}
        </p>}
            </form>
        </div>
    );
};

export default CheckoutForm;