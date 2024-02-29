import React from 'react';

//icons
import { FaCheck } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { GoBriefcase } from "react-icons/go";
import { CiShoppingCart } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { BsHouse } from "react-icons/bs";

//utils imports
import { useHandleNavigate } from "../../utils/navigationRoutes";
import date from '../../utils/date';

//context import
import { useUser } from '../../context/userContext';

const IndexScreen = () => {
  const handleNavigation = useHandleNavigate();
  const { userName } = useUser();

  return (
    <div className="bg-yellow-200 h-screen flex flex-col items-center">
      <div className="flex flex-col">
        <p className="text-3xl text-indigo-400 font-bold mt-16 ml-3">{userName}</p>
        <p className="text-base text-gray-400 flex flex-col ml-3 font-bold">{date()}</p>
        <div className="h-0.5 w-screen bg-yellow-700 mt-4 mb-6" />
      </div>
      <div className="flex flex-col items-center space-y-6 mt-4">
        <button className="w-full h-12 bg-gray-100 rounded-lg focus:outline-none flex items-center justify-between px-4" onClick={() => handleNavigation('staff')} data-target="staff"> 
          <p className="text-base font-semibold text-black">Staff</p>
          <FaCheck size={24} color='green'/>
        </button>
        <button className="w-full h-12 bg-gray-100 rounded-lg focus:outline-none flex items-center justify-between px-4" onClick={() => handleNavigation('today')} data-target="today"> 
          <p className="text-base font-semibold text-black">Today</p>
          <IoSunnyOutline size={24} color='red'/>
        </button>
        <button className="w-full h-12 bg-gray-100 rounded-lg focus:outline-none flex items-center justify-between px-4" onClick={() => handleNavigation('work')} data-target="work"> 
          <p className="text-base font-semibold text-black">Work</p>
          <GoBriefcase size={24} color="brown"/>
        </button>
        <button className="w-full h-12 bg-gray-100 rounded-lg focus:outline-none flex items-center justify-between px-4" onClick={() => handleNavigation('shopping')} data-target="shopping"> 
          <p className="text-base font-semibold text-black">Shopping</p>
          <CiShoppingCart size={24} color="orange"/>
        </button>
        <button className="w-full h-12 bg-gray-100 rounded-lg focus:outline-none flex items-center justify-between px-4" onClick={() => handleNavigation('planed')} data-target="planed"> 
          <p className="text-base font-semibold text-black">Planed</p>
          <IoCalendarOutline size={24} color='purple' />
        </button>
        <button className="w-full h-12 bg-gray-100 rounded-lg focus:outline-none flex items-center justify-between px-4" onClick={() => handleNavigation('home')} data-target="home"> 
          <p className="text-base font-semibold text-black">Home</p>
          <BsHouse size={24} color="gray" />
        </button>
      </div>
    </div>
  );
};

export default IndexScreen;