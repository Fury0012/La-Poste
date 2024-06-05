import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PosteState } from '../config/PosteProvider';

const TrackPayments = () => {
  const { user } = PosteState();

  const [Colis, setColis] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('http://localhost:8090/api/Colis', {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        });
        setColis(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    if (user) {
      getData();
    }
  }, [user]);

  return (
    <div className='min-h-screen w-full bg-[#0E1959] flex justify-center items-center p-4 '>
      <div className="overflow-x-auto mt-20">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead className="bg-[#FEC424] text-[#0E1959] ">
            <tr>
              <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm text-left">Nom</th>
              <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm text-left">Prénom</th>
              <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm text-left">Contenu Colis</th>
              <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm text-left">Adresse Destinaire</th>
              <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm text-left">Mode Réglement</th>
              <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm text-left">Montant</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {Colis.map((colis) => (
              <tr key={colis.id} className="hover:bg-gray-100">
                <td className="py-3 px-4 border-b border-gray-200">{colis.user?.lastName}</td>
                <td className="py-3 px-4 border-b border-gray-200">{colis.user?.firstName}</td>
                <td className="py-3 px-4 border-b border-gray-200">{colis.contenu}</td>
                <td className="py-3 px-4 border-b border-gray-200">{colis.adresseDestination}</td>
                <td className="py-3 px-4 border-b border-gray-200">{colis.reglement?.mode_reglement}</td>
                <td className="py-3 px-4 border-b border-gray-200">{colis.reglement?.montant} TND</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrackPayments;
