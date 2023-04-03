import React from 'react';
import { TodoList } from '../TodoList'
import { EmptySearchResult } from '../EmptySearchResult'
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { useTodos } from '../hooks/useTodos';
import { ChangeAlert } from '../ChangeAlert';


function App() {

  const { states, stateUpdaters  } = useTodos();

  const {

    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    completeTodo,
    openModal,

  } = states;

  const {

    setSearchValue,
    addTodo,
    deleteTodo,
    setOpenModal,
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
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      />



      {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      <ChangeAlert
        sincronize={sincronizedTodos}
      />

    </React.Fragment>
  );
}

export default App;
