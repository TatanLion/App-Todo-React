import { useContext } from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {

  const {openModal, setOpenModal} = useContext(TodoContext)

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
