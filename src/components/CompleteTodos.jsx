const style = {
  backgroundColor: "#63c57b",
  width: "500px",
  minHeight: "250px",
  padding: "10px",
  margin: "10px",
  border: "2px solid",
  borderRadius: "5px",
};

export const CompleteTodos = (props) => {
  const { todos, onClick } = props;
  return (
    <div style={style}>
      <p className="title">完了のTodo</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <p>{todo}</p>
              <button onClick={() => onClick(index)}>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
