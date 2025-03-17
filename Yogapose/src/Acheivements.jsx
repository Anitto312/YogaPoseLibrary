import { useState, useEffect } from "react";
import "./css/Achievement.css";

const Achievement = () => {
    const [completedTasks, setCompletedTasks] = useState(0);
    const milestones = [5, 10, 15, 20, 25, 30];

    useEffect(() => {
        const storedProgress = localStorage.getItem("completedTasks") || 0;
        setCompletedTasks(parseInt(storedProgress));
    }, []);

    return (
        <div className="achievement-container">
            <h2>Yoga Achievements</h2>
            <p>Completed Tasks: <strong>{completedTasks}/30</strong></p>

            <div className="milestone-list">
                {milestones.map(milestone => (
                    <div key={milestone} className={`milestone ${completedTasks >= milestone ? "achieved" : ""}`}>
                        <p>🎉 Completed {milestone} Days of Yoga!</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievement;
