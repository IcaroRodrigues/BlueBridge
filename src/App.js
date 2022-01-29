import { useState } from 'react'

import { Form } from './Components/Form'
import { TodoList } from './Components/TodoList'

import './App.css'

function App() {
  
  const [inputText, setInputText] = useState('')

  return (
    <div className="App">
      <header>
        <h1>Icaro's Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  )
}

export default App
