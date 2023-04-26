import React from 'react'
import { useTodos } from '../../ui/hooks/useTodos'
import { TodoForm } from '../../ui/TodoForm';
import { useParams } from 'react-router-dom';



export const EditTodoPage = () => {

  const { states, stateUpdaters } = useTodos();
  const { editTodo } = stateUpdaters;
  const { loading, getTodo } = states;

  const { id } = useParams();
  const todoId = Number(id);

  if(loading){
    return <div>Loading...</div>
  } else{
    
    const todo = getTodo(todoId);
  
    return (
      <>
        <TodoForm 
          label='Edita tu todo'
          defoultTodoText={todo.text}
          submitText='Editar'
          submitEvent={ ( newText ) => editTodo(todoId, newText) }
        />
      </>
    )
  }
}
