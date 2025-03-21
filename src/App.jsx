import React, { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
    const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const handleDelete = (taskIndex) => {
        const newTasks = tasks.filter((task, index) => index !== taskIndex);
        setTasks(newTasks);
    };

    return (
        <div className="app">
            <TaskForm setTasks={setTasks} />
            <main className="app_main">
                <TaskColumn
                    title="To Do"
                    icon={todoIcon}
                    tasks={tasks}
                    status="todo"
                    handleDelete={handleDelete}
                />
                <TaskColumn
                    title="Doing"
                    icon={doIcon}
                    tasks={tasks}
                    status="doing"
                    handleDelete={handleDelete}
                />
                <TaskColumn
                    title="Done"
                    icon={doneIcon}
                    tasks={tasks}
                    status="done"
                    handleDelete={handleDelete}
                />
            </main>
        </div>
    );
};

export default App;
