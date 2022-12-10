import React from "react";
import { Link } from 'react-router-dom';

const Profileinfo = () => {
    return (
        <div className="mx-auto p-3 border rounded-lg md:border-none md:bg-transparent">
            <section className="py-7">
                <h1 className="text-3xl font-bold">Personal Info</h1>
                <small className="text-sm text-neutral-400">Please provide your name, email address, and phone number.</small>
            </section>

            <form className="flex flex-col gap-3">
                <label className="">
                    <span className="block">Name</span>
                    <input type='text' className="border p-2 rounded-lg w-full active" placeholder='e.g. Stephen King' />
                </label>
                <label>
                    <span className="block">Email Address</span>
                    <input type='text' className="border p-2 rounded-lg w-full active" placeholder='e.g. stephenking@lorem.com' />
                </label>
                <label>
                    <span className="block">Phone Number</span>
                    <input type='text' className="border p-2 rounded-lg w-full active" placeholder='e.g. +1 234 567 890' />
                </label>
                <section className="flex justify-end p-7">
                    <Link to='/register/plan' className='border px-4 py-2 bg-marine-blue text-white rounded-lg'>Next Step</Link>
                </section>
            </form>
        </div>
    )
}

export default Profileinfo