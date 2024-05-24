import React, { useState } from 'react';
import axios from 'axios';
import { PosteState } from '../config/PosteProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUser, user } = PosteState()
const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8090/api/v1/auth/authenticate', {
        email,
        password
      });
      setUser(response.data)
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      navigate('/client-area')
      console.log(user)
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <div className="bg-[#0E1959]">
        <div className="flex justify-center h-screen">
          <div className="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: 'url(https://www.businessnews.com.tn/images/album/IMGBN84500bousta.jpg)' }}>
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-4xl font-bold text-white">La Poste Tunisienne</h2>
                <p className="max-w-xl mt-3 text-gray-300">Bienvenue sur La Poste Tunisienne. Connectez-vous pour gérer vos services postaux en ligne. Inscrivez-vous pour découvrir nos solutions sur mesure. Rejoignez-nous dès maintenant !
</p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-[#FEC424] ">La Poste Tunisienne</h2>
                <p className="mt-3 text-[#FEC424] dark:text-gray-300">Sign in to access your account</p>
              </div>

              <div className="mt-8">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                      <a href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"></a>
                    </div>

                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#FEC424] rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                      Sign in
                    </button>
                  </div>
                </form>

                {error && <p className="mt-6 text-sm text-center text-red-400">{error}</p>}
                <p className="mt-6 text-sm text-center text-gray-400">Don't have an account yet? <a href="#" className="text-[#FEC424] focus:outline-none focus:underline hover:underline">Sign up</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
