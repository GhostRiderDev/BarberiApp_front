import React, { useState, useEffect } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const CardBarber: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerPage, setCardsPerPage] = useState(1);


    const barbers = [
        {
            id: 1,
            name: "Te las cortas",
            location: "Calle 123, Ciudad, País",
            bannerUrl: "/bg-home.jpg",
        },
        {
            id: 2,
            name: "Corte Elegante",
            location: "Avenida 456, Ciudad, País",
            bannerUrl: "/bg-home.jpg"
        },
        {
            id: 3,
            name: "Barbería Premium",
            location: "Boulevard 789, Ciudad, País",
            bannerUrl: "/bg-home.jpg"
        },
        {
            id: 4,
            name: "Estilo Moderno",
            location: "Calle 987, Ciudad, País",
            bannerUrl: "/bg-home.jpg"
        },
        {
            id: 5,
            name: "Barbería de Lujo",
            location: "Avenida 321, Ciudad, País",
            bannerUrl: "/bg-home.jpg"
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1024) {
                setCardsPerPage(4); 
            } else if (width >= 768) {
                setCardsPerPage(2); 
            } else {
                setCardsPerPage(1); 
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Ajuste inicial

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNext = () => {
        if (currentIndex < barbers.length - cardsPerPage) {
            setCurrentIndex(currentIndex + cardsPerPage);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - cardsPerPage);
        }
    };

    return (
        <div className="flex flex-row w-full h-full items-center justify-center gap-4">

            <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`text-5xl ${currentIndex === 0 ? 'text-gray-400' : 'text-white'}`}
            >
                <MdOutlineNavigateBefore />
            </button>

            <div className="flex gap-4 overflow-hidden">
                {barbers.slice(currentIndex, currentIndex + cardsPerPage).map((barber) => (
                    <div key={barber.id} className="w-[300px] h-[80%] rounded-xl shadow-lg transform transition-transform duration-300 ease-in-out ">
                        <img 
                            src={barber.bannerUrl} 
                            alt={`Imagen de ${barber.name}`} 
                            className="w-full h-[50%] object-cover rounded-t-lg" 
                        />
                        <div className="flex h-[50%] flex-col gap-2 px-4 py-2 bg-[#d6d6d630] rounded-b-xl ">
                            <h2 className="text-xl text-white font-semibold">{barber.name}</h2>
                            <div className="flex items-center text-gray-600">
                                <IoLocationOutline className="mr-2 text-red-600 text-xl" />
                                <span className='text-white'>{barber.location}</span>
                            </div>
                            <div className='flex flex-row gap-2 text-yellow-400'>
                                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                            </div>
                            <div className="flex flex-row flex-wrap gap-4">
                                <div className="text-sm bg-white px-3 py-1 rounded-xl text-gray-800">Cabello</div>
                                <div className="text-sm bg-white px-3 py-1 rounded-xl text-gray-800">Cejas</div>
                                <div className="text-sm bg-white px-3 py-1 rounded-xl text-gray-800">Barba</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={handleNext}
                disabled={currentIndex >= barbers.length - cardsPerPage}
                className={`text-5xl ${currentIndex >= barbers.length - cardsPerPage ? 'text-gray-400' : 'text-white'}`}
            >
                <MdOutlineNavigateNext />
            </button>
        </div>
    );
};


export default CardBarber;
