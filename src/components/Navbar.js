import React from "react";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="bg-mobile bg-cover md:bg-desktop m-2 p-20 md:h-screen">
            <nav className="">
                <ul className='flex md:flex-col place-content-evenly gap-8'>
                    <li>
                        <NavLink to='/' className="flex gap-3">
                            <p className='border h-7 w-7 rounded-full text-center hover:bg-light-blue self-center'>1</p>
                            <div className="hidden md:block">
                                STEP 1 <span className="block font-bold">YOUR INFO</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/register/plan' className='flex gap-3'>
                            <p className='border h-7 w-7 rounded-full text-center hover:bg-light-blue self-center'>2</p>
                            <div className="hidden md:block">
                                STEP 2 <span className="block font-bold">SELECT PLAN</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/register/addons' className='flex gap-3'>
                            <p className='border h-7 w-7 rounded-full text-center hover:bg-light-blue self-center'>3</p>
                            <div className="hidden md:block">
                                STEP 3 <span className="block font-bold">ADD-ONS</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/register/summary' className='flex gap-3'>
                            <p className='border h-7 w-7 rounded-full text-center hover:bg-light-blue self-center'>4</p>
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