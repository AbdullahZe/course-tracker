import React from 'react';

const ProgressMonitoring = () => {
    const modules = [
        {
            id: 1,
            title: "Introduction to Web Development",
            status: "Completed"
        },
        {
            id: 2,
            title: "HTML Fundamentals",
            status: "In Progress"
        },
        {
            id: 3,
            title: "CSS Styling",
            status: "Not Started"
        }
    ];

    const completedModules = modules.filter(module => module.status === "Completed").length;
    const totalModules = modules.length;
    const progressPercentage = (completedModules / totalModules) * 100;

    return (
        <div>
            <h1>Progress Monitoring</h1>
            <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
            </div>
            <p>Modules Completed: {completedModules}/{totalModules}</p>
            <ul>
                {modules.map(module => (
                    <li key={module.id}>
                        <strong>{module.title}</strong> - {module.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProgressMonitoring;