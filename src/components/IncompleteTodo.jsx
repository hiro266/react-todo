export const IncompleteTodo = (props) => {
    const {incompleteTodos, onClickComplete, onClickDelete} = props
    return(
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
    )
}