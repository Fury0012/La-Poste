import axios from 'axios';
import React, { useState } from 'react';
import { PosteState } from '../config/PosteProvider';
import { toast } from 'react-toastify';


const CreateColis = () => {
    const [contenu, setContenu] = useState('');
    const [poids, setPoids] = useState('');
    const [taille, setTaille] = useState('');
    const [adresseDestination, setAdresseDestination] = useState('');
    const { user } = PosteState()

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Prepare form data
        const formData = {
            contenu,
            poids,
            taille,
            adresseDestination
        };

        try {
            const { data } = await axios.post('http://localhost:8090/api/Colis/create', formData, {
                headers: {
                    'Authorization': `Bearer ${user?.token}`
                }
            });
            console.log(data);
            // Handle successful response
            toast.success('Colis created successfully!');
        } catch (err) {
            console.error(err);
            // Handle error response
            toast.error('An error occurred while creating the colis.');
        }

    };

    return (
        <div className="min-h-screen bg-[#0E1959] flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <form onSubmit={handleSubmit} className="bg-[#E1E1E1] p-8 rounded-lg shadow-md">
                    <div className="text-3xl font-bold text-center mb-8 text-[#FEC424]">Créer un colis</div>
                    <div className="mb-6">
                        <label htmlFor="contenu-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#FEC424]">Contenu</label>
                        <input
                            type="text"
                            id="contenu-input"
                            value={contenu}
                            onChange={(e) => setContenu(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="What's in the colis?"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="poids-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#FEC424]">Poids</label>
                        <input
                            type="text"
                            id="poids-input"
                            value={poids}
                            onChange={(e) => setPoids(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter weight (kg)"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="taille-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#FEC424]">Taille</label>
                        <input
                            type="text"
                            id="taille-input"
                            value={taille}
                            onChange={(e) => setTaille(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter size (cm)"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="adresseDestination-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#FEC424]">Adresse Destination</label>
                        <input
                            type="text"
                            id="adresseDestination-input"
                            value={adresseDestination}
                            onChange={(e) => setAdresseDestination(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter destination address"
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-8 py-3 mb-2 dark:focus:ring-yellow-900">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateColis;
