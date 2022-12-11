import React from "react";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="bg-mobile bg-cover md:bg-desktop m-2 p-20 md:h-screen">
            <nav className="">
                <ul className='flex md:flex-col place-content-evenly gap-8'>
                    <li>
                        <NavLink to='/' className="flex">
                            <p className='border h-7 w-7 rounded-full text-center hover:bg-light-blue'>1</p>
                            <div className="hidden md:block">
                                STEP 1 <span className="block font-bold">YOUR INFO</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/register/plan' className='flex'>
                            <p className='border h-7 w-7 rounded-full text-center hover:bg-light-blue'>2</p>
                            <div className="hidden md:block">
                                STEP 2 <span className="block font-bold">SELECT PLAN</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/register/addons' className='flex'>
                            <p className='border h-7 w-7 rounded-full text-center hover:bg-light-blue'>3</p>
                            <div className="hidden md:block">
                                STEP 3 <span className="block font-bold">ADD-ONS</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/register/summary' className='flex space-between'>
                            <p className='border h-7 w-7 rounded-full text-center hover:bg-light-blue'>4</p>
                            <div className="hidden md:block">
                                STEP 4 <span className="block font-bold">SUMMARY</span>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


export default Sidebar