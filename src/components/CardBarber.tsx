import React, { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const CardBarber: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const barbers = [
        {
            id: 1,
            name: "Te las cortas",
            location: "Calle 123, Ciudad, País",
            bannerUrl: "https://i.pravatar.cc/150?u=barberia1",
        },
        {
            id: 2,
            name: "Corte Elegante",
            location: "Avenida 456, Ciudad, País",
            bannerUrl: "https://i.pravatar.cc/150?u=barberia2"
        },
        {
            id: 3,
            name: "Barbería Premium",
            location: "Boulevard 789, Ciudad, País",
            bannerUrl: "https://i.pravatar.cc/150?u=barberia3"
        }
    ];

    const handleNext = () => {
        if (currentIndex < barbers.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="flex flex-row justify-center items-center">
            <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`text-5xl ${currentIndex === 0 ? 'text-gray-400' : 'text-white'}`}
            >
                <MdOutlineNavigateBefore />
            </button>

            <div className="w-[300px] rounded-xl shadow-lg transform transition-transform duration-300 ease-in-out">
                <img 
                    src={barbers[currentIndex].bannerUrl} 
                    alt={`Imagen de ${barbers[currentIndex].name}`} 
                    className="w-full h-48 object-cover rounded-t-lg" 
                />
                <div className="flex flex-col gap-2 p-4 bg-[#D6D6D6] rounded-b-xl">
                    <h2 className="text-xl font-semibold">{barbers[currentIndex].name}</h2>
                    <div className="flex items-center text-gray-600 mt-2">
                        <IoLocationOutline className="mr-2 text-red-600 text-xl" />
                        <span className='text-black'>{barbers[currentIndex].location}</span>
                    </div>
                    <div className='flex flex-row gap-2  text-yellow-400'>
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                    <div className="flex flex-row flex-wrap  gap-4">
                        <div className="text-sm bg-white px-3 py-1 rounded-xl text-gray-800">Cabello</div>
                        <div className="text-sm bg-white px-3 py-1 rounded-xl text-gray-800">Cabello</div>
                        <div className="text-sm bg-white px-3 py-1 rounded-xl text-gray-800">Cabello</div>
                    </div>
                </div>
            </div>

            <button
                onClick={handleNext}
                disabled={currentIndex === barbers.length - 1}
                className={`text-5xl ${currentIndex === barbers.length - 1 ? 'text-gray-400' : 'text-white'}`}
            >
                <MdOutlineNavigateNext />
            </button>
        </div>
    );
};

export default CardBarber;
