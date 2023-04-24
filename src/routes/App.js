import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './home/HomePage'
import { NewTodoPage } from './new/NewTodoPage'
import { EditTodoPage } from './edit/EditTodoPage'

export const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/new" element={<NewTodoPage/>} />
          <Route path="/edit/:id" element={<EditTodoPage/>} />
          <Route path="/*" element={ <h1>notFound</h1> } />
        </Routes>
      </HashRouter>
    </>
  )
}
