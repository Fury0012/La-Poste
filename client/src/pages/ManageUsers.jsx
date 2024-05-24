import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PosteState } from '../config/PosteProvider';
import EditUserModal from '../components/EditUserModal';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const { user } = PosteState();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await axios.get('http://localhost:8090/api/v1/user', {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        });
        console.log(data);
        setUsers(data);
      } catch (err) {
        console.log(err);
      }
    };

    if (user) {
      getUsers();
    }
  }, [user]); // Adding user to the dependency array

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:8090/api/v1/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });
      // Filter out the deleted user from the state
      setUsers(users.filter((user) => user.id !== userId));
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleSaveEdit = async (editedUser) => {
    try {
      await axios.put(`http://localhost:8090/api/v1/user/${editedUser.id}`, editedUser, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });
      // Update the user in the state
      setUsers(users.map((user) => (user.id === editedUser.id ? editedUser : user)));
      setEditingUser(null); // Close the modal
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancelEdit = () => {
    setEditingUser(null); // Close the modal
  };

  return (
    <div className='bg-[#0E1959] h-screen flex items-start justify-center'>
      <div className='overflow-x-auto w-full my-20'>
        <table className='w-full'>
          <thead>
            <tr className='bg-gray-800 text-white'>
              <th className='py-2'>ID</th>
              <th className='py-2'>First Name</th>
              <th className='py-2'>Last Name</th>
              <th className='py-2'>Email</th>
              <th className='py-2'>Telephone</th>
              <th className='py-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className='text-white'>
                <td className='border px-4 py-2'>{user.id}</td>
                <td className='border px-4 py-2'>{user.firstName}</td>
                <td className='border px-4 py-2'>{user.lastName}</td>
                <td className='border px-4 py-2'>{user.email}</td>
                <td className='border px-4 py-2'>{user.telephone}</td>
                <td className='border px-4 py-2'>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2' onClick={() => handleEdit(user)}>Edit</button>
                  <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editingUser && (
        <EditUserModal
          user={editingUser}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      )}
    </div>
  );
};

export default ManageUsers;

