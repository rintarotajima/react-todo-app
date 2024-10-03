import { useState } from "react";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  // 未完了のTodoリストのデータを格納する配列をuseStateで定義
  const [incompleteTodos, setIncompleteTodos] = useState(["Todo1", "Todo2"]);
  // 完了したTodoリストのデータを格納する配列をuseStateで定義
  const [completeTodos, setCompleteTodos] = useState([
    "Todo1でした",
    "Todo2でした",
  ]);

  // テキストボックスの値が変化したときに実行される関数
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  // 追加ボタンがクリックされたときに実行される関数
  const onClickAdd = ()=> {
    const newTodos = [...incompleteTodos, todoText]
    setIncompleteTodos(newTodos);
    setTodoText("");
  }
  return (
    <>
      <div className="input-area">
        <input type="text" placeholder="Todoを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTodo</p>
        <ul>
          {incompleteTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTodo</p>
        <ul>
          {completeTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
