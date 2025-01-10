import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CourseOverview from './components/CourseOverview';
import ModuleList from './components/ModuleList';
import QuizzesAssessments from './components/QuizzesAssessments';
import ProgressMonitoring from './components/ProgressMonitoring';
import PerformanceInsights from './components/PerformanceInsights';
import CourseDetails from './components/CourseDetails';
import './App.css';

function App() {
    const [courses, setCourses] = useState([
        {
            id: 1,
            title: "Advanced Web Development",
            instructor: "Dr. Michael Smith",
            creationDate: "2024-01-01",
            duration: "12 weeks",
            status: "Enrolled",
            image: "https://via.placeholder.com/300x200",
            description: "Master advanced JavaScript concepts and modern frameworks."
        },
        {
            id: 2,
            title: "Data Science Fundamentals",
            instructor: "Dr. Jane Doe",
            creationDate: "2024-02-15",
            duration: "10 weeks",
            status: "Not Enrolled",
            image: "https://via.placeholder.com/300x200",
            description: "Learn the basics of data science and Python programming."
        },
        {
            id: 3,
            title: "Machine Learning Basics",
            instructor: "Dr. John Doe",
            creationDate: "2024-03-01",
            duration: "8 weeks",
            status: "Completed",
            image: "https://via.placeholder.com/300x200",
            description: "Understand the fundamentals of machine learning and supervised learning."
        }
    ]);

    return (
        <Router>
            <div className="container">
                {/* Navbar */}
                <nav className="navbar">
                    <ul>
                        <li><Link to="/">Course Overview</Link></li>
                        <li><Link to="/module-list">Module List</Link></li>
                        <li><Link to="/quizzes-assessments">Quizzes and Assessments</Link></li>
                        <li><Link to="/progress-monitoring">Progress Monitoring</Link></li>
                        <li><Link to="/performance-insights">Performance Insights</Link></li>
                    </ul>
                </nav>

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<CourseOverview courses={courses} setCourses={setCourses} />} />
                    <Route path="/module-list" element={<ModuleList />} />
                    <Route path="/quizzes-assessments" element={<QuizzesAssessments />} />
                    <Route path="/progress-monitoring" element={<ProgressMonitoring />} />
                    <Route path="/performance-insights" element={<PerformanceInsights />} />
                    <Route path="/course-details/:courseId" element={<CourseDetails courses={courses} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;