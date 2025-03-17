import { useState } from "react";
import "./css/Tasks.css";

const tasks = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    description: `Complete the yoga pose for Day ${i + 1}. Focus on breathing and balance.`,
    completed: false
}));

const Tasks = () => {
    const [taskList, setTaskList] = useState(tasks);

    const toggleCompletion = (day) => {
        setTaskList(taskList.map(task =>
            task.day === day ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div className="tasks-container">
            <h2>30-Day Yoga Challenge</h2>
            <div className="task-list">
                {taskList.map(task => (
                    <div key={task.day} className={`task-card ${task.completed ? "completed" : ""}`}>
                        <h3>Day {task.day}</h3>
                        <p>{task.description}</p>
                        <button onClick={() => toggleCompletion(task.day)}>
                            {task.completed ? "Undo" : "Mark as Done"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tasks;
