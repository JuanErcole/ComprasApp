import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function useTodos() {

  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizedTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V2', []);

  const [searchValue, setSearchValue] = React.useState('');
  // const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {

      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);

    });
  }

  const addTodo = (text) => {
    const id = new Date().getTime();
    console.log(id);
    const newTodos = [...todos];
    newTodos.push({
      id,
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  const completeTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const editTodo = (id, newText) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].text = newText;
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const states = {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    completeTodo,
    // openModal,
  }

  const stateUpdaters = {
    setSearchValue,
    editTodo,
    addTodo,
    deleteTodo,
    // setOpenModal,
    sincronizedTodos
  }

  return {    
    states,
    stateUpdaters
  }
}

export { useTodos };
