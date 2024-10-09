const AddTask = ({ task, setTask, tasklist, setTaskList }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        if (task.id) {
            const updateTask = tasklist.map((todo) =>
                todo.id !== task.id
                    ? todo
                    : {
                          id: todo.id,
                          name: e.target.task.value,
                          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
                      }
            );
            setTaskList((prev) => updateTask);
        } else {
            const newTask = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            };
            setTaskList([newTask, ...tasklist]);
        }
        setTask({});
    };

    return (
        <section onSubmit={handleSubmit} className="addTask">
            <form>
                <input
                    type="text"
                    name="task"
                    autoComplete="off"
                    placeholder="add task"
                    maxLength={25}
                    value={task.name}
                    onChange={(e) =>
                        setTask({ ...task, name: e.target.value } || "")
                    }
                />
                <button type="submit">{task.id ? "Update" : "Add"}</button>
            </form>
        </section>
    );
};

export default AddTask;
