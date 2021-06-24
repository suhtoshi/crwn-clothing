import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51J5sUAGit4ESOzpZy3LxqHYbB6GHD5fRQjRU6N3N2yBogvdKjibTK3sr4vPoodVs2cVU2iGviEpmMPeAV1UHZxqQ00brfnD91b'

    const onToken = token => {
        console.log(token);
        alert('Payment Success, Very Nice!')
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            discription={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;