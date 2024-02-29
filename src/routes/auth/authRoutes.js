import axios from 'axios';

//API import
import { API_ROUTE } from '../API/config';

//adding header creetentials
axios.defaults.withCredentials = true;

export const handleRegisterRoute = async (email, name, password, setErrorRegister, handleNavigation) => {
    try {
        const response = await axios.post(`${API_ROUTE}/auth/register`, {
            email: email,
            name: name,
            password: password
        });

        const succes = response.data;

        if(succes) {
            console.log(response.data)

            handleNavigation('')
        } else {
            setErrorRegister(true)
        }

    }catch(error) {
        console.log(error);
        setErrorRegister(true);
    }
};

export const handleLoginRoute = async (name, password, setErrorLogin, handleNavigation, setUserName, setIsAuthenticated) => {
    try {
        const response = await axios.post(`${API_ROUTE}/auth/login`, {
            name: name,
            password: password
        });

        const { succes, token, user } = response.data;

        if (succes && token) {
            setUserName(user.name);
            handleNavigation('index');
            setIsAuthenticated(true);
        } else {
            setErrorLogin(true);
            setIsAuthenticated(false);
        }

    }catch(error){
        setErrorLogin(true);
        setIsAuthenticated(false);
    }
};