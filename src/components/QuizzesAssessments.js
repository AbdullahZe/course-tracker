import React from 'react';

const QuizzesAssessments = () => {
    const quizzes = [
        {
            id: 1,
            title: "Introduction to Web Development",
            status: "Passed",
            score: "92/100"
        },
        {
            id: 2,
            title: "JavaScript Fundamentals",
            status: "Failed",
            score: "65/100"
        },
        {
            id: 3,
            title: "CSS Advanced Concepts",
            status: "Passed",
            score: "88/100"
        }
    ];

    return (
        <div>
            <h1>Quizzes and Assessments</h1>
            <table>
                <thead>
                    <tr>
                        <th>Quiz Title</th>
                        <th>Status</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {quizzes.map(quiz => (
                        <tr key={quiz.id}>
                            <td>{quiz.title}</td>
                            <td>{quiz.status}</td>
                            <td>{quiz.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default QuizzesAssessments;