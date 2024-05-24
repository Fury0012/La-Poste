import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PosteState } from '../config/PosteProvider';

const ManageRates = () => {
  const [tarifs, setTarifs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newTarif, setNewTarif] = useState({
    poids_max: 0,
    tarif_base: 0,
    tarif_kg: 0,
    destination: "",
    date_debut: "",
    date_fin: ""
  });
  const { user } = PosteState()
  useEffect(() => {
    if (user) {
      fetchTarifs();
    }
  }, []);

  const fetchTarifs = async () => {
    try {
      const response = await axios.get('http://localhost:8090/api/Tarification/getAll', {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
      setTarifs(response.data);
      console.log("aa",tarifs)
    } catch (error) {
      console.error('Error fetching tarifs:', error);
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTarif({ ...newTarif, [name]: value });
  };

  const createTarif = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:8090/api/Tarification/create', newTarif, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
      console.log('Tarif created:', response.data);
      closeModal();
      fetchTarifs(); // Refresh tarif list
    } catch (error) {
      console.error('Error creating tarif:', error);
      console.log(newTarif)
    }
  };

  return (
    <div className='h-screen bg-[#0E1959]  flex justify-center items-center'>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-[#FEC424] ">Manage Tarifs</h1>

        <button
          onClick={openModal}
          className="bg-yellow-500 text-white px-4 py-2 rounded-md mb-4"
        >
          Create Tarif
        </button>

        {/* Tarif List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tarifs.map(tarif => (
            <div key={tarif.id} className="bg-blue-100 p-4 rounded-md shadow">
              <h2 className="text-xl font-bold mb-2">{tarif.destination}</h2>
              <p>Poids Max: {tarif.poids_max}</p>
              <p>Tarif Base: {tarif.tarif_base}</p>
              <p>Tarif par Kg: {tarif.tarif_kg}</p>
              {/* Add more details as needed */}
            </div>
          ))}
        </div>

        {/* Create Tarif Modal */}
        {showModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                {/* Modal Content */}
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <h2 className="text-lg font-semibold mb-4 ">Create New Tarif</h2>
                  <form onSubmit={(e) => createTarif(e)}>
                    <div className="mb-4">
                      <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Destination</label>
                      <input type="text" name="destination" id="destination" required className="mt-1 p-2 border border-gray-300 rounded-md w-full" onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="poids_max" className="block text-sm font-medium text-gray-700">Poids Max</label>
                      <input type="number" name="poids_max" id="poids_max" required className="mt-1 p-2 border border-gray-300 rounded-md w-full" onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="tarif_base" className="block text-sm font-medium text-gray-700">Tarif Base</label>
                      <input type="number" name="tarif_base" id="tarif_base" required className="mt-1 p-2 border border-gray-300 rounded-md w-full" onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="tarif_kg" className="block text-sm font-medium text-gray-700">Tarif par Kg</label>
                      <input type="number" name="tarif_kg" id="tarif_kg" required className="mt-1 p-2 border border-gray-300 rounded-md w-full" onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="date_debut" className="block text-sm font-medium text-gray-700">Date Debut</label>
                      <input type="date" name="date_debut" id="date_debut" required className="mt-1 p-2 border border-gray-300 rounded-md w-full" onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="date_fin" className="block text-sm font-medium text-gray-700">Date Fin</label>
                      <input type="date" name="date_fin" id="date_fin" required className="mt-1 p-2 border border-gray-300 rounded-md w-full" onChange={handleChange} />
                    </div>
                    <div className="flex justify-end">
                      <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded-md">Create</button>
                    </div>
                  </form>
                </div>

                {/* Modal Footer */}
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={closeModal}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageRates;
