import { React } from 'react';
import { Link } from 'react-router-dom';

const Summary = () => {
    return (
        <div className="mx-auto">
            <section className="py-7">
                <h1 className="text-3xl font-bold">Finishing up</h1>
                <small className="text-sm text-neutral-400">Double-check everything looks OK before confirming</small>
            </section>
            <section className=''>
                <div className='bg-neutral-100 p-3 rounded-lg'>
                    <div className='flex place-content-between p-3'>
                        <div className=''>
                            <h1 className='font-bold'>Arcade (Monthly)</h1>
                            <p className='text-sm text-neutral-400'>Change</p>
                        </div>
                        <p>$9/mo</p>
                    </div>
                    <hr />
                    <div className='p-3 flex flex-col'>
                        <div className='text-sm py-1 flex place-content-between'>
                            <p className='text-neutral-400'>Online service</p>
                            <p>$/mo</p>
                        </div>
                        <div className='text-sm py-1 flex place-content-between'>
                            <p className='text-neutral-400'>Larger storage</p>
                            <p>$/mo</p>
                        </div>
                    </div>
                </div>
                <div className='p-5 flex place-content-between'>
                    <p className='text-sm text-neutral-300'>Total (per month)</p>
                    <p className='text-sm text-purplish-blue font-bold'>$/mo</p>
                </div>
            </section>
            <section className="flex justify-between p-7">
                <Link to='/register/addons' className='text-neutral-400 hover:text-marine-blue'>Go Back</Link>
                <Link to='/register/thankyou' className='border px-4 py-2 bg-marine-blue text-white rounded-lg hover:bg-pastel-blue'>Confirm</Link>
            </section>
            
        </div>
    )
}

export default Summary;