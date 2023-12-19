import { useContext } from "react";
import "./CreateTodoButton.css";

function CreateTodoButton( {openModal, setOpenModal} ) {

  const toogleModal = () => {
    setOpenModal(!openModal);
    // console.log(openModal);
  }

  return (
    <button 
      className="CreateTodoButton" 
      onClick={toogleModal} 
    >
      +
    </button>
    );
}
export { CreateTodoButton };
