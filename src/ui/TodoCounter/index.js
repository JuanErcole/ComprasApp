import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading }) {
  
  return (
    <h2 className={`TodoCounter ${!!loading && "TodoCounterLoading"}`}>
      Has comprado {completedTodos} de {totalTodos} productos
    </h2>
  );
}

export { TodoCounter };
