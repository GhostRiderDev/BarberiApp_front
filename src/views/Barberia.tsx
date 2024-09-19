import NavbarLanding from "@/components/NavbarLanding";
import { useParams } from "react-router-dom";
import AutoCompleteAdress from "@/components/AutoCompleteAdress";

import Rating from "@/components/Rating";
import MapUbications from "@/components/MapUbications";
import { useFetchBarberia } from "@/hooks/useFetchBarberia";
import { capitalize } from "@/lib/utils";
import { GoClockFill } from "react-icons/go";
import ButtonEffect from "@/components/ButtonEffect";

const BarberiaView = () => {
  const { id } = useParams();
  const barberia = useFetchBarberia(id as string);

  if (!barberia) return <div>Loading...</div>;

  return (
    <div className="p-1 md:p-6">
      <div className="z-0 hidden md:block">
        <NavbarLanding type="opacity" theme="light" />
      </div>
      <div className=" w-full md:w-1/3 mx-auto z-50 relative flex items-center justify-center">
        <AutoCompleteAdress />
      </div>
      <div>
        {barberia !== null && (
          <section className="flex flex-col items-center gap-4 mt-4">
            <header className=" w-full flex justify-between">
              <h1 className="text-4xl font-bold ">{barberia.name}</h1>
              <div className="flex items-center ">
                <ButtonEffect />
              </div>
            </header>

            <div className="flex gap-2 w-full">
              <div className="flex flex-row gap-2 text-yellow-400 text-lg">
                4.5 <Rating rating={4.2} /> (100)
              </div>
              •
              <p className="text-gray-500 font-normal text-lg">
                {capitalize(barberia.ciudad)},{" "}
                {capitalize(barberia.departamento)}
              </p>
            </div>

            <div className="w-full flex flex-col-reverse md:flex-row gap-3 md:gap-6 ">
              <div className="w-full md:w-2/5 flex flex-col">
                <div className="h-[13rem] md:h-[24rem]">
                  <MapUbications />
                </div>
              </div>

              <div className="w-full md:w-3/5 ">
                <div className="w-full flex flex-wrap md:-m-2">
                  <div className="flex w-1/2 flex-wrap">
                    <div className="w-1/2 p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out"
                        src="https://assets.setmore.com/website/v2/images/industry-pages/barber-shops/setmore-client-barber-haircut.png"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out"
                        src="https://www.shutterstock.com/image-photo/attractive-happy-man-smiling-while-600nw-2267242719.jpg"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out"
                        src="https://media.istockphoto.com/id/506514230/photo/beard-grooming.jpg?s=612x612&w=0&k=20&c=QDwo1L8-f3gu7mcHf00Az84fVU8oNpQLgvUw6eGPEkc="
                        loading="eager"
                      />
                    </div>
                  </div>
                  <div className="flex w-1/2 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out"
                        src="https://www.designsystem.es/wp-content/uploads/2023/08/barberias.jpg"
                        loading="eager"
                      />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSzF1KoGsi8PIFkMfJwusX4ugFafFzvkxy0w&s"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out"
                        src="https://aprende.com/wp-content/uploads/2023/01/como-nombrar-una-barberia.jpg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-6 ">
              <div className="w-full md:w-2/5 flex flex-col">
                <div className="flex flex-col  gap-1 my-4">
                  <h2 className="text-3xl font-bold mb-1 text-center md:text-left ">
                    Servicios
                  </h2>
                  <div className="border-b-2 border-gray-300 w-full bg-gray-200 rounded-md p-2 flex items-center gap-3">
                    <div className="w-full">
                      <header>
                        <h2 className="text-lg font-semibold">Cabello</h2>
                      </header>
                      <article className="flex flex-col justify-center">
                        <div className="flex gap-1 items-center">
                          <GoClockFill className="text-purple-400" />
                          <p className="text-gray-500 font-light">1h</p>
                        </div>
                        <p className="text-gray-500 font-semibold">$20.000</p>
                      </article>
                    </div>
                    <button className="bg-purple-700 text-white px-2 py-1 flex items-center justify-center text-lg font-semibold hover:scale-105 rounded-md h-1/2">
                      Reservar
                    </button>
                  </div>

                  <div className="border-b-2 border-gray-300 w-full bg-gray-200 rounded-md p-2 flex items-center gap-3">
                    <div className="w-full">
                      <header>
                        <h2 className="text-lg font-semibold">Barba</h2>
                      </header>
                      <article className="flex flex-col justify-center">
                        <div className="flex gap-1 items-center">
                          <GoClockFill className="text-purple-400" />
                          <p className="text-gray-500 font-light">30m</p>
                        </div>
                        <p className="text-gray-500 font-semibold">$6.000</p>
                      </article>
                    </div>
                    <button className="bg-purple-700 text-white px-2 py-1 flex items-center justify-center text-lg font-semibold hover:scale-105 rounded-md h-1/2">
                      Reservar
                    </button>
                  </div>
                  <div className="border-b-2 border-gray-300 w-full bg-gray-200 rounded-md p-2 flex items-center gap-3">
                    <div className="w-full">
                      <header>
                        <h2 className="text-lg font-semibold">Cejas</h2>
                      </header>
                      <article className="flex flex-col justify-center">
                        <div className="flex gap-1 items-center">
                          <GoClockFill className="text-purple-400" />
                          <p className="text-gray-500 font-light">30m</p>
                        </div>
                        <p className="text-gray-500 font-semibold">$4.000</p>
                      </article>
                    </div>
                    <button className="bg-purple-700 text-white px-2 py-1 flex items-center justify-center text-lg font-semibold hover:scale-105 rounded-md h-1/2">
                      Reservar
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-3/5 ">
                <div className="w-full">
                  <header>
                    <h2 className="text-3xl font-bold text-center md:text-right mt-4 md:mr-4 mb-2">
                      Equipo
                    </h2>
                  </header>
                  <div className="w-full grid md:grid-cols-4 grid-cols-3">
                    <div className="p-1 md:p-2">
                      <img
                        alt="team"
                        className="block h-[20vw] w-[20vw] md:h-[10vw] md:w-[10vw] rounded-full object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out mx-auto"
                        src="https://cdn-partners-api.fresha.com/user-account-avatars/processed/372378/medium/198a3c38-a7cb-416e-bade-d5800c68fa3c-avatar.jpeg?class=square128"
                        loading="lazy"
                      />
                      <header className="col-span-3 flex flex-col justify-center items-center">
                        <h2 className="text-lg font-semibold">Maria</h2>
                        <p className="text-gray-500 font-light">Barbero</p>
                      </header>
                    </div>
                    <div className="p-1 md:p-2">
                      <img
                        alt="team"
                        className="block h-[20vw] w-[20vw] md:h-[10vw] md:w-[10vw] rounded-full object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out mx-auto"
                        src="https://cdn-partners-api.fresha.com/user-account-avatars/processed/372378/medium/198a3c38-a7cb-416e-bade-d5800c68fa3c-avatar.jpeg?class=square128"
                        loading="lazy"
                      />
                      <header className="col-span-3 flex flex-col justify-center items-center">
                        <h2 className="text-lg font-semibold">Maria</h2>
                        <p className="text-gray-500 font-light">Barbero</p>
                      </header>
                    </div>
                    <div className="p-1 md:p-2">
                      <img
                        alt="team"
                        className="block h-[20vw] w-[20vw] md:h-[10vw] md:w-[10vw] rounded-full object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out mx-auto"
                        src="https://cdn-partners-api.fresha.com/user-account-avatars/processed/372378/medium/198a3c38-a7cb-416e-bade-d5800c68fa3c-avatar.jpeg?class=square128"
                        loading="lazy"
                      />
                      <header className="col-span-3 flex flex-col justify-center items-center">
                        <h2 className="text-lg font-semibold">Maria</h2>
                        <p className="text-gray-500 font-light">Barbero</p>
                      </header>
                    </div>

                    <div className="p-1 md:p-2">
                      <img
                        alt="team"
                        className="block h-[20vw] w-[20vw] md:h-[10vw] md:w-[10vw] rounded-full object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out mx-auto"
                        src="https://cdn-partners-api.fresha.com/user-account-avatars/processed/372378/medium/198a3c38-a7cb-416e-bade-d5800c68fa3c-avatar.jpeg?class=square128"
                        loading="lazy"
                      />
                      <header className="col-span-3 flex flex-col justify-center items-center">
                        <h2 className="text-lg font-semibold">Maria</h2>
                        <p className="text-gray-500 font-light">Barbero</p>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default BarberiaView;
