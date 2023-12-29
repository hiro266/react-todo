import { useState } from "react";
import './styles.css';
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);

  const onChangeTodoText = (event) => {
    return setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
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

  const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={isMaxLimitIncompleteTodos}
      />
      {isMaxLimitIncompleteTodos && <p style={{color: "red"}}>5つ以上のTODOは登録できません。</p>}
      <IncompleteTodo
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodo
        completeTodos={completeTodos}
        onClickReturn={onClickReturn}
      />
    </>
  );
}

export default Todo;
