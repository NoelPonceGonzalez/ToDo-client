import axios from 'axios';

//API import
import { API_ROUTE } from '../API/config';

//adding header creetentials
axios.defaults.withCredentials = true;

export const handleAddingTaskRoute = async (userName, category, titleTaks, textTask, isErrorTask) => {
    try {
        const response = await axios.post(`${API_ROUTE}/tasks/addTasks`, {
            name: userName,
            category: category,
            title: titleTaks,
            text: textTask,
        });
    
        const succes = response.data

        if(succes) {
            isErrorTask(true);
        } else {
            isErrorTask(false);
        }
    } catch(error) {
        isErrorTask(false);
    }
};

export const handleShowTasks = async (userName, category, setError, setTasks) => {
    try {
        const response = await axios.get(`${API_ROUTE}/tasks/showTasks`, {
            params: {
                name: userName,
            },
        });

        const { success, tasks, error } = response.data;

        if (success) {
            const filteredTasks = tasks.filter(task => task.category === category);
            setTasks(filteredTasks);
        } else {
            setError(error);
        }
    } catch (error) {
        setError('Internal server error');
    }
};

export const handleDeleteTasks = async (userName, index, isDeleteTask) => {
    try {
        const response = await axios.delete(`${API_ROUTE}/tasks/deleteTasks?name=${userName}&taskId=${index}`);

        const { success } = response.data;

        if (success) {
            isDeleteTask(true);
        } else {
            isDeleteTask(false);
        }
    } catch (error) {
        isDeleteTask(false);
    }
}