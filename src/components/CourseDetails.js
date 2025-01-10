import React from 'react';
import { useParams } from 'react-router-dom';
import courseImage from '../img/course.jpg';
const CourseDetails = ({ courses }) => {
    const { courseId } = useParams();

    // Find the course by ID
    const course = courses.find(course => course.id === parseInt(courseId));

    if (!course) {
        return <div>Course not found.</div>;
    }

    return (
        <div className="course-details">
            <h1>{course.title}</h1>
            <img src={courseImage} alt={course.title} className="course-details-image" />
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Creation Date:</strong> {course.creationDate}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Status:</strong> {course.status}</p>
            <p><strong>Description:</strong> {course.description}</p>
        </div>
    );
};

export default CourseDetails;