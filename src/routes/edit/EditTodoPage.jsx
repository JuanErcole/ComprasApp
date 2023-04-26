import React from 'react'
import { useTodos } from '../../ui/hooks/useTodos'
import { TodoForm } from '../../ui/TodoForm';
import { useParams } from 'react-router-dom';



export const EditTodoPage = () => {

  const { stateUpdaters } = useTodos();
  const { editTodo } = stateUpdaters;
  const { id } = useParams();
  const todoId = Number(id);

  return (
    <>
      <TodoForm 
        label='Edita tu todo'
        submitText='Editar'
        submitEvent={ ( newText ) => editTodo(todoId, newText) }
      />
    </>
  )
}
