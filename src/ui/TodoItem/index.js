import React from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import { EditIcon } from '../TodoIcon/EditIcon';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <div className='todoItemContent'>
        <CompleteIcon
          completed={props.completed}
          onComplete={props.onComplete}
        />
        <p
          className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
        >
          {props.text}
        </p>
      </div>
      <div className='todoItemContent'>
        <EditIcon 
          onEdit={props.onEdit}
        />
        <DeleteIcon
          onDelete={props.onDelete}
        />
      </div>
    </li>
  );
}

export { TodoItem };
