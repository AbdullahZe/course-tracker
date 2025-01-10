import React from 'react';

const QuizTable = ({ quizzes }) => {
    return (
        <section>
            <h2>Quizzes and Assessments</h2>
            <table>
                <thead>
                    <tr>
                        <th>Quiz Title</th>
                        <th>Status</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {quizzes.map((quiz) => (
                        <tr key={quiz.id}>
                            <td>{quiz.title}</td>
                            <td>{quiz.status}</td>
                            <td>{quiz.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default QuizTable;