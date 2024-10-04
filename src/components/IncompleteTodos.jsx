const style = {
  backgroundColor: "#b1debd",
  width: "500px",
  minHeight: "250px",
  padding: "10px",
  margin: "10px",
  border: "2px solid #8c8e7d77",
  borderRadius: "5px",
};
export const IncompleteTodos = (props) => {
  const { todos, onClickDelete, onClickComplete } = props;
  return (
    <div style={style}>
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
};
