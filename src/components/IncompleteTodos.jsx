export const IncompleteTodos = (props) => {
    const { todos, onClickDelete, onClickComplete } = props;
    return (
        <div className="incomplete-area">
        <p className="title">未完了のTodo</p>
        <ul>
          {todos.map((todo, index) => (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
}