import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTodos } from '../../ui/hooks/useTodos';
import { TodoList } from '../../ui/TodoList'
import { EmptySearchResult } from '../../ui/EmptySearchResult'
import { TodoItem } from '../../ui/TodoItem';
import { TodosError } from '../../ui/TodosError';
import { TodosLoading } from '../../ui/TodosLoading';
import { EmptyTodos } from '../../ui/EmptyTodos';
import { TodoForm } from '../../ui/TodoForm';
import { CreateTodoButton } from '../../ui/CreateTodoButton';
import { Modal } from '../../ui/Modal';
import { TodoHeader } from '../../ui/TodoHeader';
import { TodoCounter } from '../../ui/TodoCounter';
import { TodoSearch } from '../../ui/TodoSearch';

import { ChangeAlert } from '../../ui/ChangeAlert';


export const HomePage = () => {

  const navigate = useNavigate();

  const { states, stateUpdaters  } = useTodos();

  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    completeTodo,
    // openModal,

  } = states;

  const {

    setSearchValue,
    // addTodo,
    deleteTodo,
    // setOpenModal,
    sincronizedTodos
    
  } = stateUpdaters;

  return (
    <React.Fragment>

      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        // loading={loading}
        />

        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        // loading={loading}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResult={() => <EmptySearchResult searchValue={searchValue} />}
        render={todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      />

      {/* {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )} */}

      <CreateTodoButton
        onClick={ () => navigate('/new') }
        // setOpenModal={setOpenModal}
      />

      <ChangeAlert
        sincronize={sincronizedTodos}
      />

    </React.Fragment>
  );
}

