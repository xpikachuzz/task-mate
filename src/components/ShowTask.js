const ShowTask = ({ tasklist, setTaskList, task, setTask }) => {

    const handleEdit = (id) => {
        const selectedTask = tasklist.find(todo => todo.id === id)
        setTask(selectedTask)
    }

    const handleDelete = (id) => {
        setTaskList((taskList) => taskList.filter(todo => todo.id !== id))
    }



    return (
        <section className='showTask'>
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{tasklist.length}</span>
                </div>
                <button onClick={() => setTaskList([])} className="clearAll" >Clear All</button>
            </div>
            <ul>
                {tasklist.map(
                    ({ id, name, time }) => (<li key={id}>
                        <p>
                            <span>{name}</span>
                            <span>{time}</span>
                        </p>
                        <i onClick={() => handleEdit(id)} className="bi bi-pencil-square"></i>
                        <i onClick={() => handleDelete(id)} className="bi bi-trash"></i>
                    </li>)
                )}
            </ul>
        </section>
    )
}


export default ShowTask;