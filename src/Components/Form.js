import { db } from "../Api"
import { ref, set } from "firebase/database"
import { uid } from "uid"

export const Form = ({
  inputText,
  setInputText,
  user_id,
  todos,
  setTodos,
  setStatus,
}) => {

  const uid_id = uid()

  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }

  const submitTodoHandler = (e) => {
    e.preventDefault()
    
    if (inputText !== '') {
      set(ref(db, `/${user_id}/${uid_id}`), {
        text: inputText,
        completed: false,
        uid: uid_id
      })
    }

    setInputText('')
  }

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}
