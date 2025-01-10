import React from 'react';

const CourseCard = ({ course, onEnroll, onViewDetails }) => {
    return (
        <div className="course-card">
            <h3>{course.title}</h3>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Creation Date:</strong> {course.creationDate}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Status:</strong> {course.status}</p>
            {course.status === 'Not Enrolled' && (
                <button onClick={() => onEnroll(course.id)}>Enroll</button>
            )}
            {course.status === 'Enrolled' && (
                <button onClick={() => onViewDetails(course.id)}>View Details</button>
            )}
        </div>
    );
};

export default CourseCard;