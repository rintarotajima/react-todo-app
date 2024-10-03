
export const Todo = () => {
    return (
        <>
            <div className="input-area">
                <input type="text" placeholder="Todoを入力"/>
                <button>追加</button>
            </div>
            <div className="incomplete-area">
                <p className="title">未完了のTodo</p>
                <ul>
                    <li>
                        <div className="list-row">
                            <p>タスク1</p>
                            <button>完了</button>
                            <button>削除</button>
                        </div>
                    </li>
                    <li>
                        <div className="list-row">
                            <p>タスク2</p>
                            <button>完了</button>
                            <button>削除</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="complete-area">
                <p className="title">完了のTodo</p>
                <ul>
                    <li>
                        <div className="list-row">
                            <p>タスク1でした</p>
                            <button>戻す</button>
                        </div>
                    </li>
                    <li>
                        <div className="list-row">
                            <p>タスク2でした</p>
                            <button>戻す</button>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}