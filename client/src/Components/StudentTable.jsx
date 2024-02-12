// StudentTable.js
import React from 'react';

const StudentTable = ({ students }) => {
  return (
    <div>
      <h2 className='stuhead'>Student Details Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Email</th>
            <th>College</th>
            <th>CGPA</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.gender}</td>
              <td>{student.dept}</td>
              <td>{student.email}</td>
              <td>{student.college}</td>
              <td>{student.cgpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
