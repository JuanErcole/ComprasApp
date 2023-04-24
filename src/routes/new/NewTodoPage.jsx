import React from 'react'
import { TodoForm } from '../../ui/TodoForm'
import { useTodos } from '../../ui/hooks/useTodos'



export const NewTodoPage = () => {
  
  const { stateUpdaters } = useTodos(); 

  const { addTodo } = stateUpdaters
   
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}



