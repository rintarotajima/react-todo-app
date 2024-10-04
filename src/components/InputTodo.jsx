const style = {
    backgroundColor: "#78e435",
    width: "500px",
    height: "50px",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px"
}

export const InputTodo = (props) => {
    const { todoText, onChange, onClick, disabled } = props;
  return (
      <div style={style}>
        <input
          type="text"
          placeholder="Todoを入力"
          value={todoText}
          onChange={onChange}
          disabled={disabled}
        />
        <button onClick={onClick} disabled={disabled}>追加</button>
      </div>
  );
};
