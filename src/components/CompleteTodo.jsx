const style = {
    border: "2px solid aquamarine",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px",
    backgroundColor: "antiquewhite"
}

export const CompleteTodo = (props) => {
    const {completeTodos, onClickReturn} = props
    return (
        <div style={style}>
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
    )
}