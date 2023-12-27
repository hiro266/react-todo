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
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />

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
