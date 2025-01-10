import React from 'react';

const ProgressBar = ({ modules }) => {
    const completedModules = modules.filter(module => module.status === "Completed").length;
    const totalModules = modules.length;
    const progressPercentage = (completedModules / totalModules) * 100;

    return (
        <section>
            <h2>Progress Overview</h2>
            <div id="progress-bar">
                <div id="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
            </div>
            <p>Modules Completed: {completedModules}/{totalModules}</p>
        </section>
    );
};

export default ProgressBar;