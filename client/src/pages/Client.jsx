import React from 'react';
import { PosteState } from '../config/PosteProvider';

const Client = () => {
    const { user } = PosteState();

    return (
        <div className='min-h-screen bg-[#0E1959] text-[#0E1959] flex justify-center items-center'>
            <div className='bg-white shadow-md rounded-lg p-16 w-full md:w-3/4 lg:w-1/2'>
                <h1 className='text-2   xl font-bold mb-4'> {user?.user?.role}:</h1>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <p className='font-bold'>First Name:</p>
                        <p>{user?.user.firstName}</p>
                    </div>
                    <div>
                        <p className='font-bold'>Last Name:</p>
                        <p>{user?.user.lastName}</p>
                    </div>
                    <div>
                        <p className='font-bold'>Email:</p>
                        <p>{user?.user.email}</p>
                    </div>
                    <div>
                        <p className='font-bold'>Telephone:</p>
                        <p>{user?.user.telephone}</p>
                    </div>
                    {/* Add more fields as needed */}
                </div>
            </div>
        </div>
    );
}

export default Client;
