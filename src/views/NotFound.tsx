const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 ">
      <div className="bg-white  p-8 rounded-full w-[40vw] h-[40vw] shadow-lg md:w-[10vw] md:h-[10vw]">
        <h1 className="text-4xl font-bold text-center">404</h1>
        <p className="text-center">Page not found</p>
      </div>
    </div>
  );
};

export default NotFound;
