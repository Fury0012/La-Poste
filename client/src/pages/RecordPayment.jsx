import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PosteState } from '../config/PosteProvider';

const RecordPayment = () => {
  const { user, colisId } = PosteState();
  const [montant, setmontant] = useState(0)
  const [formData, setFormData] = useState({
    mode_reglement: '',
    numero_carte: '',
    montant: montant,
    date_paiement: new Date().toISOString().slice(0, 10), // Default to today's date in 'YYYY-MM-DD' format
  });


  useEffect(() => {
    const getMontant = async () => {
      try {
        console.log('Request data:', { colisId }); // Log the data being sent
        const { data } = await axios.post(
          'http://localhost:8090/api/paiement/calculerMontant',
          { colisId },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        setmontant(data.montant)
        // Do something with the response data if needed
      } catch (error) {
        console.error('Error fetching montant:', error);
      }
    };



    if (colisId && user) {
      getMontant();
    }
  }, [colisId, user]);

  useEffect(() => {
    setFormData(prevFormData => ({
      ...prevFormData,
      montant: montant,
      mode_reglement: "cheque bancaire"
    }));
  }, [montant]);




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === 'montant_paye' ? parseFloat(value) : value });
  };


  const handleSubmit = async (e) => {
    console.log(formData.mode_reglement)
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8090/api/paiement/process',
        {
          colisId: colisId,
          numCarte: formData.numero_carte,
          modeReglement: formData.mode_reglement,
          datePaiement: formData.date_paiement,
          montant: formData.montant,
          validNumCarte: formData.validNumCarte,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      toast.success('Payment Saved Successfully!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      toast.error('An error occurred when saving your payment.', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className='bg-[#0E1959] h-screen flex items-center justify-center p-4'>
      <div className='bg-white rounded-lg shadow-lg p-6 max-w-md w-full'>
        <h2 className='text-2xl font-bold mb-4 text-center'>Record Payment</h2>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='mode_reglement' className='block text-sm font-medium text-gray-700'>
              Mode de Règlement
            </label>
            <select
              id='mode_reglement'
              name='mode_reglement'
              value={formData.mode_reglement}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
              <option value='' disabled>Select payment mode</option>
              <option value='cheque bancaire'>Cheque bancaire</option>
            </select>
          </div>
          <div>
            <label htmlFor='numero_carte' className='block text-sm font-medium text-gray-700'>
              Numéro de Carte
            </label>
            <input
              type='text'
              id='numero_carte'
              name='numero_carte'
              value={formData.numero_carte}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              placeholder='Enter card number'
            />
          </div>
          <div>
            <label htmlFor='montant_paye' className='block text-sm font-medium text-gray-700'>
              Montant Payé
            </label>
            <input
              type='number'
              id='montant_paye'
              name='montant'
              value={montant}
              disabled
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              placeholder='Enter amount paid'
            />
          </div>
          <div>
            <label htmlFor='date_paiement' className='block text-sm font-medium text-gray-700'>
              Date de Paiement
            </label>
            <input
              type='date'
              id='date_paiement'
              name='date_paiement'
              value={formData.date_paiement}
              onChange={handleChange}
              readOnly
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
              Submit
            </button>
            <button
              type='reset'
              className='bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecordPayment;
