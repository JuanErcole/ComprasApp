import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({ onClick }) {
  
  const onClickButton = () => {
    // props.setOpenModal(prevState => !prevState);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={onClick}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
