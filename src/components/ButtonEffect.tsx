import { IoTicket } from "react-icons/io5";

const ButtonEffect = () => {
  return (
    <button className="button-oppointment">
      <div className="dots_border" />
      <IoTicket className="sparkle text-white text-3xl" />
      <span className="text_button text-xl font-bold">Agendar</span>
    </button>
  );
};

export default ButtonEffect;
