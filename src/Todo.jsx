import { useState } from "react";
import './styles.css';

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [inCompleteTodos, setInCompleteTodos] = useState([])

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value)
  }

  const onClickAdd = () => {
    const newTodos = [...inCompleteTodos, todoText]
    setInCompleteTodos(newTodos);
    setTodoText("")
  }

  return (
    <>
      <div class="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div class="incomplete-area">
        <p class="title">未完了のTODO</p>
        <ul id="incomplete-list">
          {inCompleteTodos.map((todo) =>
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          )}
        </ul>
      </div>

      <div class="complete-ares">
        <p class="title">完了のTODO</p>
        <ul id="complete-list">
          <li>
            <div className="list-row">
              <p className="todo-item">TODOでした</p>
              <button>戻す</button>
            </div>
          </li>
          <li>
            <div className="list-row">
              <p className="todo-item">TODOでした</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Todo;
