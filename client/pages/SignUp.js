import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useContract, useContractWrite } from '@thirdweb-dev/react';

export default function Example() {
    const { contract } = useContract('0x30c2d6966A5FB06534c3Ad4F65Dc14b596516C65');
    const { mutateAsync: registerSelf, isLoading } = useContractWrite(contract, 'registerSelf');

    // State variables to store form input values
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [image, setImage] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [houseAddress, setHouseAddress] = useState('');
    const [sex, setSex] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [validIdNumber, setValidIdNumber] = useState('');
    const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false); // State to track registration success

    // Add state to track membership status
    const [isMember, setIsMember] = useState(false);

    // Function to check membership status based on wallet address
    const checkMembershipStatus = async () => {
        try {
            // Call your contract's function to check membership status
            const membershipStatus = await contract.checkMembershipStatus();
            setIsMember(membershipStatus); // Update isMember state based on the response
        } catch (error) {
            console.error('Error checking membership status:', error);
        }
    };

    // Use useEffect to check membership status when the component mounts
    useEffect(() => {
        checkMembershipStatus();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await registerSelf({
                args: [
                    name,
                    phoneNumber,
                    image,
                    maritalStatus,
                    emailAddress,
                    houseAddress,
                    sex,
                    dateOfBirth,
                    validIdNumber,
                ],
            });
            console.info('Contract call success', data);
            // If registration is successful, update the state
            setIsRegistrationSuccessful(true);
        } catch (err) {
            console.error('Contract call failure', err);
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
                        Register
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-white">
                                Phone Number
                            </label>
                            <div className="mt-2">
                                <input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="text"
                                    autoComplete="phoneNumber"
                                    required
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {/* Image */}
                        <div>
                            <label htmlFor="image" className="block text-sm font-medium leading-6 text-white">
                                Image
                            </label>
                            <div className="mt-2">
                                <input
                                    id="image"
                                    name="image"
                                    type="url"
                                    autoComplete="url"
                                    required
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {/* Marital Status */}
                        <div>
                            <label htmlFor="maritalStatus" className="block text-sm font-medium leading-6 text-white">
                                Marital Status
                            </label>
                            <div className="mt-2">
                                <input
                                    id="maritalStatus"
                                    name="maritalStatus"
                                    type="text"
                                    autoComplete="maritalStatus"
                                    required
                                    value={maritalStatus}
                                    onChange={(e) => setMaritalStatus(e.target.value)}
                                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {/* Email Address */}
                        <div>
                            <label htmlFor="emailAddress" className="block text-sm font-medium leading-6 text-white">
                                Email Address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="emailAddress"
                                    name="emailAddress"
                                    type="text"
                                    autoComplete="emailAddress"
                                    required
                                    value={emailAddress}
                                    onChange={(e) => setEmailAddress(e.target.value)}
                                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {/* House Address */}
                        <div>
                            <label htmlFor="houseAddress" className="block text-sm font-medium leading-6 text-white">
                                House Address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="houseAddress"
                                    name="houseAddress"
                                    type="text"
                                    autoComplete="houseAddress"
                                    required
                                    value={houseAddress}
                                    onChange={(e) => setHouseAddress(e.target.value)}
                                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {/* Sex */}
                        <div>
                            <label htmlFor="sex" className="block text-sm font-medium leading-6 text-white">
                                Sex
                            </label>
                            <div className="mt-2">
                                <input
                                    id="sex"
                                    name="sex"
                                    type="text"
                                    autoComplete="sex"
                                    required
                                    value={sex}
                                    onChange={(e) => setSex(e.target.value)}
                                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {/* Date of Birth */}
                        <div>
                            <label htmlFor="dateOfBirth" className="block text-sm font-medium leading-6 text-white">
                                Date of Birth
                            </label>
                            <div className="mt-2">
                                <input
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    type="date"
                                    autoComplete="dateOfBirth"
                                    required
                                    value={dateOfBirth}
                                    onChange={(e) => setDateOfBirth(e.target.value)}
                                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {/* Valid ID Number */}
                        <div>
                            <label htmlFor="validIdNumber" className="block text-sm font-medium leading-6 text-white">
                                Valid Government Issued ID number
                            </label>
                            <div className="mt-2">
                                <input
                                    id="validIdNumber"
                                    name="validIdNumber"
                                    type="number"
                                    autoComplete="number"
                                    required
                                    value={validIdNumber}
                                    onChange={(e) => setValidIdNumber(e.target.value)}
                                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                {isLoading ? 'Please wait...' : 'Register'}
                            </button>
                        </div>
                    </form>

                    {/* Conditionally render the link based on registration success */}
                    {isRegistrationSuccessful ? (
                        <p className="mt-2 text-center">
                            Registration successful!{' '}
                            <a
                                href="/dashboard" // Replace with the actual dashboard link
                                className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
                            >
                                Proceed to Dashboard
                            </a>
                        </p>
                    ) : (
                        <p className="mt-2 text-center text-red-500">
                            {isLoading ? 'Please wait...' : 'Registration failed. Kindly try again.'}
                        </p>
                    )}

                    {/* Conditionally render the link based on membership status */}
                    {isMember ? (
                        <p className="mt-10 text-center text-sm text-gray-400">
                            Already a member?{' '}
                            <a
                                href="/dashboard" // Replace with the actual dashboard link
                                className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
                            >
                                Sign In
                            </a>
                        </p>
                    ) : (
                        <p className="mt-10 text-center text-sm text-gray-400">
                            Not a member yet?{' '}
                            <a
                                href="/registration" // Link to your registration page
                                className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
                            >
                                Register
                            </a>
                        </p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}