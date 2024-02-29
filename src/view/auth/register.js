import React, { useState } from 'react';

//utils imports
import { useHandleNavigate } from '../../utils/navigationRoutes';

//routes imports
import { handleRegisterRoute } from '../../routes/auth/authRoutes';

const Register = () => {
  const handleNavigation = useHandleNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorRegister, setErrorRegister] = useState(false);
  const [ErrorEmailRegister, setErrorEmailRegister] = useState(false);

  return (
    <div className="bg-yellow-200 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 rounded-md">
        <h2 className="text-3xl font-semibold mb-4 text-center text-amber-700">Register</h2>
        <section>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-amber-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder='email'
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-amber-700">
              Username:
            </label>
            <input
              type="text"
              id="username"
              placeholder='name'
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-amber-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder='password'
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorRegister && 
            <div className='text-center mb-1'>
              <p className='text-red-500 font-bold'>Registration Error</p>
            </div>
          }
          {ErrorEmailRegister && 
            <div className='text-center mb-1'>
              <p className='text-red-500 font-bold'>Email Error</p>
            </div>
          }
          <div className="mb-4">
            <button
              type="submit"
              className="bg-pink-400 text-white rounded p-3 font-bold rounded-md hover:bg-pink-700 hover:border-white hover:text-white transition duration-300 ease-in-out w-full"
              onClick={() => {
                if (!email.includes('@')) {
                  setErrorEmailRegister(true);
                  return;
                }
                handleRegisterRoute(email, name, password, setErrorRegister, handleNavigation);
              }}>
              Register
            </button>
          </div>
        </section>
        <div className="text-center">
          <span className="text-blue-400">Already have an account?</span>
          <button
            onClick={() => handleNavigation('')}
            className="text-pink-600 ml-1 hover:underline focus:outline-none"
          >
            Login here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;