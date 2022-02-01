import { ref, remove, update } from "firebase/database"
import { db } from "../Api"

export const Todo = ({ text, todo, todos, setTodos }) => {

  const user_id = localStorage.getItem('BlueBridge_user_token')

  const completeHandler = (uid) => {
    update(ref(db, `/${user_id}/${uid}`), {
      ...todo,
      completed: !todo.completed
    })
  }

  const deleteHandler = (uid) => {
    remove(ref(db, `/${user_id}/${uid}`))
  }

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {text}
      </li>
      <button onClick={() => completeHandler(todo.uid)} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={() => deleteHandler(todo.uid)} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}
