import { useState } from "react";

//utils imports
import { useHandleNavigate } from "../../utils/navigationRoutes";

//rotues imports
import { handleLoginRoute } from "../../routes/auth/authRoutes";

//context imports
import { useAuth } from "../../context/authContext";
import { useUser } from "../../context/userContext";

const Login = () => {
    const handleNavigation = useHandleNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorLogin, setErrorLogin] = useState(false);
    const { setUserName } = useUser();
    const { setIsAuthenticated } = useAuth();
    
    return (
      <div className="bg-yellow-200 min-h-screen flex items-center justify-center">
          <div className="max-w-md w-full p-6 rounded-md">
            <h2 className="text-3xl font-semibold mb-4 text-center text-amber-700">Login</h2>
            <section>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-amber-700">
                  Username:
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="name"
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
                  placeholder="password"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {errorLogin && 
                <div className='text-center mb-1'>
                  <p className='text-red-500 font-bold'>Login Error</p>
                </div>
              }
              <div className="mb-4">
                <button
                  type="submit"
                  className="bg-green-400 text-white rounded p-3 font-bold rounded-md hover:bg-green-500 hover:border-white hover:text-white transition duration-300 ease-in-out w-full"
                  onClick={() => handleLoginRoute(name, password, setErrorLogin, handleNavigation, setUserName, setIsAuthenticated)}>
                  Login
                </button>
              </div>
            </section>
            <div className="text-center">
              <span className="text-blue-400">Don't have an account?</span>
              <button
                onClick={() => handleNavigation('register')}
                className="text-pink-600 ml-1 hover:underline focus:outline-none"
              >
                Register here
              </button>
            </div>
          </div>
        </div>
      );
    };
    
    export default Login;