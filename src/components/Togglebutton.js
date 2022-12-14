import React from "react";

const Togglebutton = ({user, setUser}) => {

    const setCb = () =>{
        const cb = document.querySelector('#cb')

        if (cb.checked) {
            setUser({...user, 'Plan': 'yearly'})
        } else {
            setUser({...user, 'Plan': 'monthly'})
        }
    }

    return ( 
            <label className="flex w-8 h-4 bg-marine-blue rounded-lg self-center cursor-pointer">
                <input className="hidden peer" type='checkbox' id="cb" onClick={setCb}/>
                <p className="before:content-[''] before:block before:rounded-full before:w-4 before:h-4 before:bg-white peer-checked:translate-x-4"></p>
            </label>
    )
}

export default Togglebutton