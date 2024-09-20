interface NavbarBarberProps {
  formRef: React.RefObject<HTMLFormElement>;
}
const NavbarBarber = ({ formRef }: NavbarBarberProps) => {
  const handleAddBarberClick = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  };
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-gray-50">
        <div className="flex justify-between mx-auto my-2 w-full px-4">
          <div className="font-bold text-xl flex justify-center items-center">
            Agregar Babero
          </div>

          <div className="flex justify-end gap-3">
            <button className="text-black px-4 py-2 rounded-lg font-bold border border-gray-300 hover:bg-gray-100">
              Cerrar
            </button>
            <button
              onClick={handleAddBarberClick}
              className="bg-slate-950 text-white px-4 py-2 rounded-lg font-bold hover:bg-slate-900"
            >
              Agregar
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavbarBarber;
