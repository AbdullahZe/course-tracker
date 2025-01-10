import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import the image
import courseImage from '../img/course.jpg'; // Adjust the path if necessary

const CourseOverview = ({ courses, setCourses }) => {
    const [filter, setFilter] = useState('all'); // 'all', 'enrolled', 'not-enrolled', 'completed'

    // Function to handle enrollment
    const handleEnroll = (courseId) => {
        setCourses(courses.map(course =>
            course.id === courseId ? { ...course, status: 'Enrolled' } : course
        ));
        alert(`Enrolled in course ${courseId}`);
    };

    const filteredCourses = courses.filter(course => {
        if (filter === 'enrolled') return course.status === 'Enrolled';
        if (filter === 'not-enrolled') return course.status === 'Not Enrolled';
        if (filter === 'completed') return course.status === 'Completed';
        return true; // Show all courses
    });

    return (
        <div>
            <h1>Course Overview</h1>

            {/* Filter Buttons */}
            <div className="filters">
                <button onClick={() => setFilter('all')}>All Courses</button>
                <button onClick={() => setFilter('enrolled')}>Enrolled</button>
                <button onClick={() => setFilter('not-enrolled')}>Not Enrolled</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
            </div>

            {/* Course List */}
            <div className="course-list">
                {filteredCourses.map(course => (
                    <div key={course.id} className="course-card">
                        <img src={courseImage} alt={course.title} className="course-image" />
                        <h3>{course.title}</h3>
                        <p><strong>Instructor:</strong> {course.instructor}</p>
                        <p><strong>Creation Date:</strong> {course.creationDate}</p>
                        <p><strong>Duration:</strong> {course.duration}</p>
                        <p><strong>Status:</strong> {course.status}</p>

                        {/* Enroll Button (for Not Enrolled courses) */}
                        {course.status === 'Not Enrolled' && (
                            <button onClick={() => handleEnroll(course.id)}>Enroll</button>
                        )}

                        {/* Details Button */}
                        <Link to={`/course-details/${course.id}`}>
                            <button>Details</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseOverview;