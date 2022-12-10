import React, { useState } from "react";
import { Link } from 'react-router-dom';
import arcade from '../assets/images/icon-arcade.svg';
import advanced from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';
import { Plans } from "../assets/data/data";
import Togglebutton from "./Togglebutton";

const Selectplan = () => {

    const [subPlan, setSubPlan] = useState('monthy')
    return (
        <div className="mx-auto p-3 border rounded-lg md:border-none md:bg-transparent">
            <section className="p-7">
                <h1 className="text-3xl font-bold">Select your plan</h1>
                <small className="text-sm text-neutral-400">You have the option of monthly or yearly billing</small>
            </section>
            <section className="flex flex-col md:flex-row justify-evenly m-5 gap-3">
                <div className="flex md:flex-col border p-3 rounded-lg active hover:bg-neutral-100">
                    <img className="p-3" src={arcade} alt='arcade' />
                    <div>
                        <p className="font-bold">Arcade</p>
                        <p className="text-sm text-neutral-400">${(subPlan === 'monthly') ? Plans.monthly.Arcade : Plans.yearly.Arcade}/{(subPlan === 'monthly') ? 'mo' : 'yr'}</p>
                    </div>
                </div>
                <div className="flex md:flex-col border p-3 rounded-lg active hover:bg-neutral-100">
                    <img className="p-3" src={advanced} alt='arcade' />
                    <div>
                        <p className="font-bold">Advanced</p>
                        <p className="text-sm text-neutral-400">${(subPlan === 'monthly') ? Plans.monthly.Advanced : Plans.yearly.Advanced}/{(subPlan === 'monthly') ? 'mo' : 'yr'}</p>
                    </div>
                </div>
                <div className="flex md:flex-col border p-3 rounded-lg active hover:bg-neutral-100">
                    <img className="p-3" src={pro} alt='arcade' />
                    <div>
                        <p className="font-bold">Pro</p>
                        <p className="text-sm text-neutral-400">${(subPlan === 'monthly') ? Plans.monthly.Pro : Plans.yearly.Pro}/{(subPlan === 'monthly') ? 'mo' : 'yr'}</p>
                    </div>
                </div>
            </section>
            <section className="bg-neutral-100 p-3 rounded-lg m-3 text-center">
                <p className="font-bold text-marine-blue">Monthly <span><Togglebutton /></span> Yearly </p>
            </section>
            <section className="flex justify-between p-7">
                <Link to='/register/profile' className='text-neutral-400 hover:text-marine-blue'>Go Back</Link>
                <Link to='/register/addons' className='border px-4 py-2 bg-marine-blue text-white rounded-lg'>Next Step</Link>
            </section>
        </div>
    )
}

export default Selectplan