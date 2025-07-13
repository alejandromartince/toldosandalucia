import { IoMdClose } from "react-icons/io";
import './BotonCerrarMenu.css';

const BotonCerrarMenu = ({ onClick }) => {
    return (
        <button className="botonCerrarMenu" onClick={onClick}>
            <IoMdClose  size={25} />
        </button>
    );
};

export default BotonCerrarMenu;
