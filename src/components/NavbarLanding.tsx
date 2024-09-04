const NavbarLanding = () => {
  return (
    <div className="text-white bg-[#0003] ">
        <div className="flex justify-between max-w-[1000px] mx-auto px-4">
        <div className="flex items-center">
          <img src="./logodemo.png" alt="logo" className="h-16 -ml-3"/>
          <span className="-ml-4 font-bold">BarberClick</span>  
        </div>
        <div className="flex items-center">
            <button className="px-3 py-1 border border-white rounded-full">Iniciar sesion</button>
        </div>    
        </div>
    </div>
  )
}

export default NavbarLanding