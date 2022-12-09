import React from "react";
import thankyou from '../assets/images/icon-thank-you.svg';

const Thankyou = () => {
    return (
        <div className="m-5 p-3 border rounded-lg text-center md:border-none md:bg-transparent">
            <img className="" src={thankyou} alt='Thank you' />
            <h1 className="text-3xl font-bold">Thank you!</h1>
            <p className="text-sm text-neutral-400">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
        </div>
    )
}

export default Thankyou