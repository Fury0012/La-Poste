import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PosteState } from '../config/PosteProvider';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telephone, setTelephone] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate()


  const { setUser } = PosteState()


  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await axios.post('http://localhost:8090/api/v1/auth/register', {
        firstName,
        lastName,
        email,
        password,
        telephone
      });
      // Handle the successful signup response here
      setUser(response.data)
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      navigate('/client-area')
    } catch (error) {
      setError('Signup failed. Please check your inputs and try again.');
      // Handle the failed signup response here
      console.error(error);
    }
  };

  return (
    <div>
      <div className="bg-[#0E1959] ">
        <div className="flex justify-center h-screen">
          <div className="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: 'url(https://www.businessnews.com.tn/images/album/IMGBN84500bousta.jpg)' }}>
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-4xl font-bold text-white">La Poste Tunisienne</h2>
                <p className="max-w-xl mt-3 text-gray-300">Bienvenue sur La Poste Tunisienne. Connectez-vous pour gérer vos services postaux en ligne. Inscrivez-vous pour découvrir nos solutions sur mesure. Rejoignez-nous dès maintenant ! Si vous n'avez pas de compte, inscrivez-vous pour commencer à profiter de nos services.
</p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-[#FEC424] ">La Poste Tunisienne</h2>
                <p className="mt-3 text-[#FEC424] dark:text-gray-300">Create an account</p>
              </div>

              <div className="mt-8">
                <form onSubmit={handleSubmit} >
                  <div>
                    <label htmlFor="firstName" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Your First Name"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>

                  <div className="mt-6">
                    <label htmlFor="lastName" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Your Last Name"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>

                  <div className="mt-6">
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@example.com"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mt-6">
                    <label htmlFor="password" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Your Password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="mt-6">
                    <label htmlFor="telephone" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Telephone</label>
                    <input
                      type="text"
                      name="telephone"
                      id="telephone"
                      placeholder="Your Telephone Number"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      value={telephone}
                      onChange={(e) => setTelephone(e.target.value)}
                    />
                  </div>


                  <div className="mt-6">
                    <button
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#FEC424] rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                      Sign up
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-sm text-center text-gray-400">Already have an account? <a href="/login" className="text-[#FEC424] focus:outline-none focus:underline hover:underline">Sign in</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
