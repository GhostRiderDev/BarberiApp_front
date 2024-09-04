import CardBarber from "../components/CardBarber";

const Home = () => {
  return (
    <div className="w-full xl:w-full h-[100vh]">
      <div className="bg-home bg-center bg-cover w-full h-[700px]">
        <h1 className="p-4 text-white text-4xl">Recomendaciones</h1>
        <CardBarber />
      </div>
    </div>
  );
};

export default Home;
