import React from "react";
import { AddonPlans } from "../assets/data/data";
import { Link } from 'react-router-dom';

const Addons  = ({user, setUser}) => {
    return (
        <div className="mx-auto p-3 border rounded-lg md:border-none md:bg-transparent">
            <section className="py-7">
                <h1 className="text-3xl font-bold">Pick add-ons</h1>
                <small className="text-sm text-neutral-400">Add-ons help enhance your gaming experience</small>
            </section>
            <section>
                <div className="flex gap-3 border p-3 rounded-lg my-5 active">
                    <input type='checkbox' />
                    <p><span className="block font-bold">Online service</span> <span className="block text-neutral-400">Access to multiplayer games</span></p>
                    <p className="text-purplish-blue">+${(user.Plan === 'monthly') ? AddonPlans.monthly.onlineService : AddonPlans.yearly.onlineService}/{(user.Plan === 'monthly') ? 'mo' : 'yr'}</p>
                </div>
                <div className="flex gap-3 border p-3 rounded-lg my-5 active">
                    <input type='checkbox' />
                    <p><span className="block font-bold">Larger storage</span> <span className="block text-neutral-400">Extra 1TB of cloud save</span></p>
                    <p className="text-purplish-blue">+${(user.Plan === 'monthly') ? AddonPlans.monthly.largerStorage : AddonPlans.yearly.largerStorage}/{(user.Plan === 'monthly') ? 'mo' : 'yr'}</p>
                </div>
                <div className="flex gap-3 border p-3 rounded-lg my-5 active">
                    <input type='checkbox' />
                    <p><span className="block font-bold">Customizable profile</span> <span className="block text-neutral-400">Custom theme on your profile</span></p>
                    <p className="text-purplish-blue">+${(user.Plan === 'monthly') ? AddonPlans.monthly.customizableProfit : AddonPlans.yearly.customizableProfit}/{(user.Plan === 'monthly') ? 'mo' : 'yr'}</p>
                </div>
            </section>
            <section className="flex justify-between p-7">
                <Link to='/register/plan' className='text-neutral-400 hover:text-marine-blue'>Go Back</Link>
                <Link to='/register/summary' className='border px-4 py-2 bg-marine-blue text-white rounded-lg'>Next Step</Link>
            </section>
        </div>
    )
}

export default Addons