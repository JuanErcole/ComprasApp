import React from 'react';
import { useTodos } from '../hooks/useTodos';
import './TodoForm.css';
import { useNavigate } from 'react-router-dom';

function TodoForm({ submitEvent, label, submitText, defoultTodoText='' }) {

  const [newTodoValue, setNewTodoValue] = React.useState(defoultTodoText);
  
  const navigate = useNavigate();

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    submitEvent(newTodoValue);
    navigate('/')
  };

  return (
    
    <div className='formContainer'>
      <form onSubmit={onSubmit}>
        <label>{label}</label>
        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder="Comprar pepsi"
        />
        <div className="TodoForm-buttonContainer">
          <button
            type="button"
            className="TodoForm-button TodoForm-button--cancel"
            onClick={onCancel}
            >
            Cancelar
          </button>
          <button
            type="submit"
            className="TodoForm-button TodoForm-button--add"
          >
            {submitText}
          </button>
        </div>
      </form>
    </div>
  );
}

export { TodoForm };
