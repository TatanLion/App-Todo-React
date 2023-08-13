import React, { useContext, useState } from 'react'
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm() {

    const {addTodo, setOpenModal} = useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    }

  return (
    <form onSubmit={onSubmit}>
        <label>Escribe un nuevo TODO</label>
        <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder='Escribir un nuevo Todo'
        />
        <div className='TodoForm-buttonContainer'>
            <button
                type='button'
                className='TodoForm-button TodoForm-button--cancel'
                onClick={ onCancel }
            >Cancelar</button>
            <button
                type='submit'
                className='TodoForm-button TodoForm-button--add'
            >Añadir</button>
        </div>
    </form>
  )
}

export { TodoForm }