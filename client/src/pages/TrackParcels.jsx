import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PosteState } from '../config/PosteProvider'

const TrackParcels = () => {
  const { user } = PosteState()
  const [parcels, setParcels] = useState([])

  useEffect(() => {
    const getColis = async () => {
      if (user && user.user && user.user.id && user.token) {
        try {
          const { data } = await axios.get(`http://localhost:8090/api/Colis/user/${user.user.id}`, {
            headers: {
              'Authorization': `Bearer ${user.token}`
            }
          })
          setParcels(data)
        } catch (err) {
          // Handle error
        }
      }
    }

    if (user) {
      getColis();
    }

  }, [user])

  return (
    <div className='bg-[#0E1959] h-screen p-6'>
      <div className='m-20'>
        <h1 className="text-white text-2xl font-bold mb-4">Your Parcels</h1>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border ">
            <thead>
              <tr>
                <th className="text-white border border-white px-4 py-2">ID</th>
                <th className="text-white border border-white px-4 py-2">Destination Address</th>
                <th className="text-white border border-white px-4 py-2">Content</th>
                <th className="text-white border border-white px-4 py-2">Weight</th>
                <th className="text-white border border-white px-4 py-2">Status</th>
                <th className="text-white border border-white px-4 py-2">Size</th>
              </tr>
            </thead>
            <tbody>
              {parcels.map(parcel => (
                <tr key={parcel.id}>
                  <td className="text-white border border-white px-4 py-2">{parcel.id}</td>
                  <td className="text-white border border-white px-4 py-2">{parcel.adresseDestination}</td>
                  <td className="text-white border border-white px-4 py-2">{parcel.contenu}</td>
                  <td className="text-white border border-white px-4 py-2">{parcel.poids}</td>
                  <td className="text-white border border-white px-4 py-2">{parcel.status}</td>
                  <td className="text-white border border-white px-4 py-2">{parcel.taille}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default TrackParcels
