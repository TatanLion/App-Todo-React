import React, { useState } from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

// const defaultTodos = [
//   {text: 'Cortar Cebolla', completed: true},
//   {text: 'Terminar Curso de React', completed: false},
//   {text: 'Leer un libro', completed: false},
//   {text: 'Pasear el perro', completed: false},
//   {text: 'Usar estados derivados', completed: true},
// ]
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

function App() {
  
  //Importamos el componente que maqueta o es UI
  return(
    <TodoProvider>
      <AppUI 
      // loading={loading}
      // error={error}
      // completedTodos={completedTodos}
      // totalTodos={totalTodos}
      // searchValue={searchValue}
      // setSearchValue={setSearchValue}
      // searchedTodos={searchedTodos}
      // completeTodo={completeTodo}
      // deleteTodo={deleteTodo}
    />
    </TodoProvider>
  );

}

export default App;
// export default TodoItem;
