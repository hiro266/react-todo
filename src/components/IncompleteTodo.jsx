const style = {
    border: "2px solid aquamarine",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
}


export const IncompleteTodo = (props) => {
    const {incompleteTodos, onClickComplete, onClickDelete} = props
    return(
        <div style={style}>
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
    )
}