import { useState } from "react";
import './styles.css';

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);

  const onChangeTodoText = (event) => {
    return setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    const newTodos = [...incompleteTodos, todoText]
    setIncompleteTodos(newTodos);
    setTodoText("")
  }

  const onClickComplete = (index) => {
    // 状態管理されている値は、set関数の更新によって判定される よって、newIncompleteTodosに直接splice関数を実行してもうまく動作しない
    const newIncompleteTodos = [...incompleteTodos]
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]]

    setIncompleteTodos(newIncompleteTodos)
    setcompleteTodos(newCompleteTodos)
  }

  const onClickDelete = (index) => {
    const newIncompleteTodos = [...incompleteTodos]
    newIncompleteTodos.splice(index, 1)
    setIncompleteTodos(newIncompleteTodos)
  }
  
  const onClickReturn = (index) => {
    const newCompleteTodos = [...completeTodos]
    const newIncompleteTodos = [...incompleteTodos, newCompleteTodos[index]]

    newCompleteTodos.splice(index, 1)
    
    setcompleteTodos(newCompleteTodos)
    setIncompleteTodos(newIncompleteTodos)
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
          {incompleteTodos.map((todo, index) =>
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                {/* ループの度にクリックしなくてもonClickCompleteが呼び出されてしまうので関数の処理の中で関数を実行するようにする */}
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          )}
        </ul>
      </div>

      <div class="complete-ares">
        <p class="title">完了のTODO</p>
        <ul id="complete-list">
          {completeTodos.map((todo, index) =>
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button onClick={() => onClickReturn(index)}>戻す</button>
              </div>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default Todo;
