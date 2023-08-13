import { TodoCounter } from "../TodoCounter/index";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { EmptyTodos } from "../EmptyTodos";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { Modal } from "../Modal";
import { TodoForm } from '../TodoForm'
import React from "react";

import { TodoContext } from "../TodoContext";

function AppUI() {
  // loading,
  // error,
  // completedTodos,
  // totalTodos,
  // searchValue,
  // setSearchValue,
  // searchedTodos,
  // completeTodo,
  // deleteTodo

  const { 
    loading, 
    error, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter
      // completed={completedTodos}
      // total={totalTodos}
      />

      <TodoSearch
      // searchValue={searchValue}
      // setSearchValue={setSearchValue}
      />

      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };
