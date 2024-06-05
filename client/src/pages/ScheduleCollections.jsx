import React, { useEffect, useState } from 'react';
import { PosteState } from '../config/PosteProvider';
import axios from 'axios';

const ScheduleCollections = () => {
  const { user } = PosteState();
  const [parcels, setParcels] = useState([]);
  const [editingParcelId, setEditingParcelId] = useState(null);

  const getColis = async () => {
    if (user && user.user && user.user.id && user.token) {
      try {
        const { data } = await axios.get(`http://localhost:8090/api/Colis`, {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        });
        setParcels(data);
      } catch (err) {
        // Handle error
      }
    }
  };
  useEffect(() => {
    if (user) {
      getColis();
    }
  }, [user]);

  const handleStatusDoubleClick = (id) => {
    setEditingParcelId(id);
  };

  const handleStatusChange = async (e, parcelId) => {
    const newStatus = e.target.value;
    try {
      const parcelToUpdate = parcels.find((parcel) => parcel.id === parcelId);
      if (!parcelToUpdate) return;
  
      const updatedParcel = {
        id: parcelToUpdate.id,
        contenu: parcelToUpdate.contenu,
        poids: parcelToUpdate.poids,
        taille: parcelToUpdate.taille,
        adresseDestination: parcelToUpdate.adresseDestination,
        status: newStatus,
      };
      console.log(updatedParcel)
  
      await axios.put(`http://localhost:8090/api/Colis/${parcelId}`, updatedParcel, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
  
      getColis()
    } catch (err) {
      // Handle error
    } finally {
      setEditingParcelId(null);
    }
  };
  
  
  
  

  return (
    <div className='min-h-screen bg-[#0E1959]'>
      <div className='overflow-x-auto '>
        <table className='min-w-full table-auto mt-24'>
          <thead>
            <tr className='text-left bg-yellow-400'>
              <th className='px-4 py-2'>Nom utilisateur</th>
              <th className='px-4 py-2'>Prénom utilisateur</th>
              <th className='px-4 py-2'>Contenu colis</th>
              <th className='px-4 py-2'>Adresse destinataire</th>
              <th className='px-4 py-2'>Montant payé</th>
              <th className='px-4 py-2'>Statut</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel) => (
              <tr key={parcel.id} className='border-b border-gray-200 bg-gray-100'>
                <td className='px-4 py-2'>{parcel.user.firstName}</td>
                <td className='px-4 py-2'>{parcel.user.lastName}</td>
                <td className='px-4 py-2'>{parcel.contenu}</td>
                <td className='px-4 py-2'>{parcel.adresseDestination}</td>
                <td className='px-4 py-2'>{parcel?.reglement?.montant}</td>
                <td
                  className='px-4 py-2 cursor-pointer'
                  onDoubleClick={() => handleStatusDoubleClick(parcel.id)}
                >
                  {editingParcelId === parcel.id ? (
                    <select
                      value={parcel.status}
                      onChange={(e) => handleStatusChange(e, parcel.id)}
                      onBlur={() => setEditingParcelId(null)}
                      autoFocus
                    >
                      <option value='en transit'>En Transit</option>
                      <option value='livree'>Livré</option>
                      <option value='en depot'>En Depot</option>
                    </select>
                  ) : (
                    parcel.status
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduleCollections;
