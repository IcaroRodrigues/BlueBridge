import { useState, useEffect } from 'react'

import { Header } from '../../Components/Header'
import { Form } from '../../Components/Form'
import { TodoList } from '../../Components/TodoList'
import { onValue, ref } from 'firebase/database'
import { db } from '../../Api'

export const Dashboard = ({ user }) => {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  const user_id = localStorage.getItem('BlueBridge_user_token')

  useEffect(() => {
    getLocalTodos()
  }, [])



  useEffect(() => {
    filterHandler()
  }, [todos, status])

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break

      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break

      default:
        setFilteredTodos(todos)
        break
    }
  }

  const getLocalTodos = () => {
    onValue(ref(db, `${user_id}`), snapshot => {
      setTodos([])

      const data = snapshot.val()

      if( data !== null ) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo])
        })
      }
    })
  }

  return (
    <div className="App">
      <Header user={user} />
      <header>
        <h1>Icaro's Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        user_id={user_id}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  )
}
