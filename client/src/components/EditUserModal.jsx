import React from 'react';

const EditUserModal = ({ user, onSave, onCancel }) => {
    const [editedUser, setEditedUser] = React.useState({ ...user });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSave = () => {
        onSave(editedUser);
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-md w-96">
                <h2 className="text-xl font-bold mb-6">Edit User</h2>
                <div className="mb-4">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={editedUser.firstName}
                        onChange={handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={editedUser.lastName}
                        onChange={handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={editedUser.email}
                        onChange={handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
                        Telephone
                    </label>
                    <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={editedUser.telephone}
                        onChange={handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
                    />
                </div>
                <div className="flex justify-end">
                    <button onClick={onCancel} className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2">Cancel</button>
                    <button onClick={handleSave} className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">Save</button>
                </div>
            </div>
        </div>
    );
};

export default EditUserModal;
