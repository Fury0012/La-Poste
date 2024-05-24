import React, { useState, useEffect } from 'react';
import { PosteState } from '../config/PosteProvider';
import axios from 'axios';
import { toast } from 'react-toastify';

const EditProfile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');

    const { user } = PosteState();

    // useEffect to set initial state values with user data
    useEffect(() => {
        if (user) {
            setFirstName(user?.user.firstName || '');
            setLastName(user?.user.lastName || '');
            setEmail(user?.user.email || '');
            setTelephone(user?.user.telephone || '');
        }
    }, [user]);

    const handleSubmit = async (event, id) => {
        event.preventDefault();
        // Prepare form data
        const formData = {
            firstName,
            lastName,
            email: user?.email,
            telephone
        };

        try {
            // Send PUT request to the specified endpoint with authorization token
            const response = await axios.put(`http://localhost:8090/api/v1/user/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${user?.token}`
                }
            });
            // Handle successful response
            console.log(response.data);
            toast.success('Profile updated successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        } catch (error) {
            // Handle error response
            toast.error('An error occurred while updating your profile.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            console.log(error)
        }
    };

    return (
        <div className="min-h-screen bg-[#0E1959] flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <form onSubmit={(event) => handleSubmit(event, user?.user?.id)} className="bg-[#E1E1E1] p-8 rounded-lg shadow-md">
                    <div className="text-3xl font-bold text-center mb-8 text-[#FEC424]">Edit Profile</div>
                    <div className="mb-6">
                        <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#FEC424]">First Name</label>
                        <input
                            type="text"
                            id="first-name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your first name"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#FEC424]">Last Name</label>
                        <input
                            type="text"
                            id="last-name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your last name"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#FEC424]">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your email"
                            readOnly
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="telephone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#FEC424]">Telephone</label>
                        <input
                            type="tel"
                            id="telephone"
                            value={telephone}
                            onChange={(e) => setTelephone(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your telephone"
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-8 py-3 mb-2 dark:focus:ring-yellow-900">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
