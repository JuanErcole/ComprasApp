import React from 'react';
import './TodoList.css'

function TodoList({
  error,
  loading,
  searchedTodos,
  onError,
  onLoading,
  onEmptyTodos,
  onEmptySearchResult,
  totalTodos,
  render
}) {
  return (
    <section className="TodoList-container">
      { error && onError() }
      { loading && onLoading() }
      {( !loading && !totalTodos ) && onEmptyTodos()}
      {( !!totalTodos && !searchedTodos.length ) && onEmptySearchResult() }

      <ul>
        {searchedTodos.map(render)}
      </ul>
    </section>
  );
}

export { TodoList };
