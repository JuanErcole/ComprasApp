import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos }) {
  
  return (
    <h2 className="TodoCounter">
      Has comprado {completedTodos} de {totalTodos} productos
    </h2>
  );
}

export { TodoCounter };
