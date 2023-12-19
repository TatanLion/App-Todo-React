import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  //Estado donde vamos a definir los ToDos iniciales
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  //Estado para capturar el texto que se coloca dentro del input para poder filtrarlo
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  //Obtenemos los Todos completados y el total general
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  //Obtendremos los Todos que coinicidan con el caracter que hayamos colocado en el input y lo vamos a llamar en el component TodoList
  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  //Función para addTodo
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false
    })
    saveTodos(newTodos);
  }

  //Función para seleccionar un todo como completado
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed === true
      ? (newTodos[todoIndex].completed = false)
      : (newTodos[todoIndex].completed = true);
    saveTodos(newTodos);
  };

  //Funcion para eliminar un Todo
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    {
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo,
      sincronizeTodos
    }
  );
}


export { useTodos };
