import React, { useState } from 'react';

const AdminEditSuite = ({ courses }) => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [auditTrail, setAuditTrail] = useState([]);

    const handleEdit = (course) => {
        setSelectedCourse(course);
    };

    const handleSave = (updatedCourse) => {
        setAuditTrail([...auditTrail, `Updated course ${updatedCourse.id} on ${new Date().toLocaleString()}`]);
        alert(`Course ${updatedCourse.id} updated successfully!`);
        setSelectedCourse(null);
    };

    return (
        <section>
            <h2>Admin Edit Suite</h2>
            <div className="admin-panel">
                <div className="course-list">
                    {courses.map(course => (
                        <div key={course.id} className="course-card">
                            <h3>{course.title}</h3>
                            <button onClick={() => handleEdit(course)}>Edit</button>
                        </div>
                    ))}
                </div>
                {selectedCourse && (
                    <div className="edit-form">
                        <h3>Edit Course: {selectedCourse.title}</h3>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleSave(selectedCourse);
                        }}>
                            <label>Title:</label>
                            <input
                                type="text"
                                value={selectedCourse.title}
                                onChange={(e) => setSelectedCourse({ ...selectedCourse, title: e.target.value })}
                            />
                            <label>Instructor:</label>
                            <input
                                type="text"
                                value={selectedCourse.instructor}
                                onChange={(e) => setSelectedCourse({ ...selectedCourse, instructor: e.target.value })}
                            />
                            <button type="submit">Save</button>
                        </form>
                    </div>
                )}
                <div className="audit-trail">
                    <h3>Audit Trail</h3>
                    <ul>
                        {auditTrail.map((entry, index) => (
                            <li key={index}>{entry}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AdminEditSuite;