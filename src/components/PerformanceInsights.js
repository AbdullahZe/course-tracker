import React from 'react';

const PerformanceInsights = () => {
    const performanceData = [
        {
            id: 1,
            metric: "Average Quiz Score",
            value: "85%"
        },
        {
            id: 2,
            metric: "Modules Completed",
            value: "6/10"
        },
        {
            id: 3,
            metric: "Time Spent",
            value: "32h 45m"
        },
        {
            id: 4,
            metric: "Strengths",
            value: "Strong in JavaScript, CSS Layouts"
        },
        {
            id: 5,
            metric: "Areas for Improvement",
            value: "Advanced API Concepts, Testing"
        }
    ];

    return (
        <div>
            <h1>Performance Insights</h1>
            <table>
                <thead>
                    <tr>
                        <th>Metric</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {performanceData.map(data => (
                        <tr key={data.id}>
                            <td>{data.metric}</td>
                            <td>{data.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PerformanceInsights;