import { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  // 未完了のTodoリストのデータを格納する配列をuseStateで定義
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  // 完了したTodoリストのデータを格納する配列をuseStateで定義
  const [completeTodos, setCompleteTodos] = useState([]);

  // テキストボックスの値が変化したときに実行される関数
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  // 追加ボタンがクリックされたときに実行される関数
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  // 削除ボタンがクリックされたときに実行される関数
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  // 完了ボタンがクリックされたときに実行される関数
  const onClickComplete = (index) => {
    // 未完了のTodoからリストを消す機能
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
    // 完了のTodoリストにを移動し、表示する機能
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };
  // 戻すボタンがクリックされたときに実行される関数
  const onClickBack = (index) => {
    // 完了のTodoからリストを消す機能
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
    // 未完了のTodoリストに移動し、表示する機能
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  };

  const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={isMaxLimitIncompleteTodos}
      />
      {isMaxLimitIncompleteTodos && (
        <p style={ {color: "red"}}>5個まで設定できます。</p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />
      <CompleteTodos todos={completeTodos} onClick={onClickBack} />
    </>
  );
};
