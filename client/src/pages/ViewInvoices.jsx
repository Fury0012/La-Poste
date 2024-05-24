import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PosteState } from '../config/PosteProvider';

const ViewInvoices = () => {
  const { user } = PosteState();
  const [reglements, setReglements] = useState([]);

  useEffect(() => {
    const fetchReglements = async () => {
      if (user) {
        try {
          const response = await axios.get('http://localhost:8090/api/Reglement', {
            headers: {
              'Authorization': `Bearer ${user.token}`,
            },
          });
          setReglements(response.data);
        } catch (err) {
          console.error('An error occurred while fetching the reglements', err);
        }
      }
    };

    if (user) {
      fetchReglements();
    }
  }, [user]);

  return (
    <div className='bg-[#0E1959] min-h-screen flex flex-col items-center justify-center p-4'>
      <div className='bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full overflow-x-auto'>
        <h2 className='text-2xl font-bold mb-4 text-center'>View Invoices</h2>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider'>Mode de Règlement</th>
              <th className='px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider'>Montant Payé</th>
              <th className='px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider'>Date de Paiement</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {reglements.map((reglement) => (
              <tr key={reglement.id}>
                <td className='px-4 md:px-6 py-4 whitespace-nowrap'>{reglement.mode_reglement}</td>
                <td className='px-4 md:px-6 py-4 whitespace-nowrap'>{reglement.montant}</td>
                <td className='px-4 md:px-6 py-4 whitespace-nowrap'>{new Date(reglement.date_paiement).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewInvoices;
