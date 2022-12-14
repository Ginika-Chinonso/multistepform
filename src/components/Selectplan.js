import React from "react";
import { Link } from 'react-router-dom';
import arcade from '../assets/images/icon-arcade.svg';
import advanced from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';
import { Plans } from "../assets/data/data";
import Togglebutton from "./Togglebutton";

const Selectplan = ({user, setUser}) => {
    return (
        <div className="mx-auto p-3 border rounded-lg md:border-none md:bg-transparent">
            <section className="p-7">
                <h1 className="text-3xl font-bold">Select your plan</h1>
                <small className="text-sm text-neutral-400">You have the option of monthly or yearly billing</small>
            </section>
            <section className="flex flex-col md:flex-row justify-evenly m-5 gap-3 md:w-full">
                <div className="flex md:flex-col border p-3 rounded-lg active hover:bg-neutral-100 md:w-1/3" onClick={(e) => {
                    setUser({...user, 'GamePlan': 'Arcade'})
                }}>
                    <img className="p-3" src={arcade} alt='arcade' />
                    <div>
                        <p className="font-bold">Arcade</p>
                        <p className="text-sm text-neutral-400">${(user.Plan === 'monthly') ? Plans.monthly.Arcade : Plans.yearly.Arcade}/{(user.Plan === 'monthly') ? 'mo' : 'yr'}</p>
                    </div>
                </div>
                <div className="flex md:flex-col border p-3 rounded-lg active hover:bg-neutral-100 md:w-1/3" onClick={(e) => {
                    setUser({...user, 'GamePlan': 'Advanced'})
                }}>
                    <img className="p-3" src={advanced} alt='arcade' />
                    <div>
                        <p className="font-bold">Advanced</p>
                        <p className="text-sm text-neutral-400">${(user.Plan === 'monthly') ? Plans.monthly.Advanced : Plans.yearly.Advanced}/{(user.Plan === 'monthly') ? 'mo' : 'yr'}</p>
                    </div>
                </div>
                <div className="flex md:flex-col border p-3 rounded-lg active hover:bg-neutral-100 md:w-1/3" onClick={(e) => {
                    setUser({...user, 'GamePlan': 'Pro'})
                }}>
                    <img className="p-3" src={pro} alt='arcade' />
                    <div>
                        <p className="font-bold">Pro</p>
                        <p className="text-sm text-neutral-400">${(user.Plan === 'monthly') ? Plans.monthly.Pro : Plans.yearly.Pro}/{(user.Plan === 'monthly') ? 'mo' : 'yr'}</p>
                    </div>
                </div>
            </section>
            <section className=" flex bg-neutral-100 p-3 rounded-lg m-3 place-content-center gap-3">
                <p className="font-bold text-marine-blue">Monthly</p> 
                <Togglebutton user={user} setUser={setUser}/>
                <p className="font-bold text-marine-blue"> Yearly </p>
            </section>
            <section className="flex justify-between p-7">
                <Link to='/' className='text-neutral-400 hover:text-marine-blue'>Go Back</Link>
                <Link to='/register/addons' className='border px-4 py-2 bg-marine-blue text-white rounded-lg'>Next Step</Link>
            </section>
        </div>
    )
}

export default Selectplan