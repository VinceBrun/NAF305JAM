import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useContract, useContractWrite } from '@thirdweb-dev/react';

export default function Example() {
    const { contract } = useContract('0x30c2d6966A5FB06534c3Ad4F65Dc14b596516C65');
    const { mutateAsync: inputRegistrationId, isLoading } = useContractWrite(
        contract,
        'inputRegistrationId'
    );

    const [registrationId, setRegistrationId] = useState('');
    const [feedback, setFeedback] = useState(''); // State to capture feedback

    const call = async (e) => {
        e.preventDefault();

        try {
            const data = await inputRegistrationId({ args: [registrationId] });
            console.info('contract call success', data);

            // Check the contract result and set feedback accordingly
            if (data === 'Successful') {
                setFeedback('Successful! Kindly Proceed to Register.');
            } else if (data === 'Invalid Registration Number') {
                setFeedback('Invalid Registration Number! Kindly contact the Management of JAM.');
            } else {
                setFeedback('You have already inputted a registration ID.');
            }
        } catch (err) {
            console.error('contract call failure', err);
            setFeedback('You have already inputted a registration ID! Proceed to Register.');
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                        Input Registration ID
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={call}>
                        <div>
                            <label htmlFor="code" className="block text-sm font-medium leading-6 text-white">
                                Enter registration ID from management.
                            </label>
                            <div className="mt-2">
                                <input
                                    id="code"
                                    name="code"
                                    type="text"
                                    autoComplete="off"
                                    required
                                    value={registrationId}
                                    onChange={(e) => setRegistrationId(e.target.value)}
                                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                {isLoading ? 'Please wait...' : 'Proceed to register'}
                            </button>
                        </div>
                    </form>

                    {/* Display feedback to the user */}
                    {feedback && (
                        <p className="mt-4 text-center text-sm text-white">
                            {feedback}
                        </p>
                    )}

                    <p className="mt-10 text-center text-sm text-gray-400">
                        Get Registration ID?{' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
                            Contact JAM Management
                        </a>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}