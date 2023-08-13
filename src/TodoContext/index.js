import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  //Estado donde vamos a definir los ToDos iniciales
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  //Estado para capturar el texto que se coloca dentro del input para poder filtrarlo
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  //Obtenemos los Todos completados y el total general
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  //PRUEBA CON useEffect
  // console.log('Log 1');

  // -- Se ejecutara de ultimas
  // useEffect(() => {
  //   console.log('Log 2');
  // })

  // -- Se ejecutara una unica vez asi se renderice de nuevo la aplicación
  // useEffect(() => {
  //   console.log('Log 2');
  // }, [])

  // -- Se ejecutara unicamente cada vez que haya un cambio en el parametro que le pasemos en el array
  // useEffect(() => {
  //   console.log('Log 2');
  // }, [totalTodos])

  // console.log('Log 3');

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
    <TodoContext.Provider value={
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
        }
    }>
        {children}
    </TodoContext.Provider>
  );
}


export { TodoContext, TodoProvider };
