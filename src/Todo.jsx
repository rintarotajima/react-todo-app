
export const Todo = () => {
    return (
        <>
            <div className="input-area">
                <input type="text" placeholder="Todoを入力"/>
                <button>追加</button>
            </div>
            <div className="incomplete-area">
                <p>未完了のTodo</p>
                <ul>
                    <li>
                        <p>タスク1</p>
                        <button>完了</button>                    
                        <button>削除</button>
                    </li>
                    <li>
                        <p>タスク2</p>
                        <button>完了</button>                    
                        <button>削除</button>
                    </li>
                </ul>
            </div>
            <div className="complete-area">
                <p>完了のTodo</p>
                <ul>
                    <li>
                        <p>タスク1でした</p>
                        <button>戻す</button>
                    </li>
                    <li>
                        <p>タスク2でした</p>
                        <button>戻す</button>
                    </li>
                </ul>
            </div>
        </>
    )
}