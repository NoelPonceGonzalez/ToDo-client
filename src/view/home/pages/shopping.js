import { useState, useEffect } from 'react';

//routes imports
import { handleAddingTaskRoute, handleShowTasks, handleDeleteTasks } from '../../../routes/home/addTask';

//utils imports
import { randomColors } from '../../../utils/posit';

//context imports
import { useUser } from '../../../context/userContext';

const Shopping = () => {
  const { userName } = useUser();
  const [titleTask, setTitleTask] = useState('');
  const [textTask, setTextTask] = useState('');
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [errorTask, setErrorTask] = useState(null);
  const [deleteTask, isDeletetask] = useState(null)
  const [showTaskAddedMessage, setShowTaskAddedMessage] = useState(false);
  const [showTaskDeletedMessage, setShowTaskDeletedMessage] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    handleShowTasks(userName, 'Shopping', setErrorTask, setTasks);
  }, [userName, tasks]);

  useEffect(() => {
    if (errorTask) {
      setShowTaskAddedMessage(true);
  
      const timeoutId = setTimeout(() => {
        setShowTaskAddedMessage(false);
        setErrorTask(false)
      }, 3000);
  
      return () => clearTimeout(timeoutId);
    }
  }, [errorTask]);
  
  useEffect(() => {
    if (deleteTask) {
      setShowTaskDeletedMessage(true);
  
      const timeoutId = setTimeout(() => {
        setShowTaskDeletedMessage(false);
        isDeletetask(false)
      }, 3000);
  
      return () => clearTimeout(timeoutId);
    }
  }, [deleteTask]);
  

  return (
    <div className="bg-yellow-200 h-screen w-screen flex flex-col items-center relative">
      <div className="flex flex-col text-center">
        <p className="text-3xl text-yellow-500 font-bold mt-16">Shopping</p>
        <p className="text-base text-yellow-500 flex flex-col ml-3">Create and manage your shopping list easily.</p>
        <div className="h-0.5 w-screen bg-yellow-700 mt-4 mb-6" />
      </div>
      {showTaskAddedMessage && (
        <div className="absolute top-4 right-4 bg-blue-500 text-white rounded-md p-2 shadow-md">
          Task added
        </div>
      )}
      {showTaskDeletedMessage && (
        <div className="absolute top-4 right-4 bg-red-500 text-white rounded-md p-2 shadow-md">
          Task deleted
        </div>
      )}
      {isAddingTask ? (
        <div className="flex flex-col items-center mt-4">
          <input
            type="text"
            placeholder="Title"
            className="border border-gray-400 rounded-md p-2 mb-2"
            value={titleTask}
            onChange={(e) => setTitleTask(e.target.value)}
          />
          <textarea
            placeholder="Task description"
            className="border border-gray-400 rounded-md p-2 mb-2"
            value={textTask}
            onChange={(e) => setTextTask(e.target.value)}
          />
          <button
            className="bg-green-500 text-white rounded-full w-16 h-16 border-2 border-white text-3xl font-bold shadow-md absolute bottom-0 right-0 m-6"
            onClick={() => handleAddingTaskRoute(userName, 'Shopping', titleTask, textTask, setErrorTask, setIsAddingTask(false))}
          >
            +
          </button>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center overflow-auto">
          {tasks.map((task, index) => (
            <div key={index} className={`relative h-80 min-w-80 max-w-80% mx-4 my-6 rounded-md border-black shadow-md ${randomColors[index % randomColors.length]}`}>
              <p className="text-2xl ml-4 mt-4 font-bold text-black">{task.title}</p>
              <p className="text-base ml-4 mt-2 text-black">{task.text}</p>
              <button
                className="absolute top-1 right-3 text-red-500 font-bold text-2xl"
                onClick={() => handleDeleteTasks(userName, task._id, isDeletetask)}
              >
                x
              </button>
            </div>
          ))}
          <button
            className="bg-blue-500 text-white rounded-full w-16 h-16 border-2 border-white text-3xl font-bold shadow-md absolute bottom-0 right-0 m-6"
            onClick={() => setIsAddingTask(true)}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default Shopping;
