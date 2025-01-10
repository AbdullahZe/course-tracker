import React from 'react';

const ModuleList = () => {
    const modules = [
        {
            id: 1,
            title: "Introduction to Web Development",
            status: "Completed",
            points: 15
        },
        {
            id: 2,
            title: "HTML Fundamentals",
            status: "In Progress",
            points: 20
        },
        {
            id: 3,
            title: "CSS Styling",
            status: "Not Started",
            points: 25
        },
        {
            id: 4,
            title: "JavaScript Basics",
            status: "Completed",
            points: 30
        }
    ];

    return (
        <div>
            <h1>Module List</h1>
            <ul>
                {modules.map(module => (
                    <li key={module.id}>
                        <strong>{module.title}</strong> - {module.status} ({module.points} points)
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ModuleList;