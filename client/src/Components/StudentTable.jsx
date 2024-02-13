import React from 'react';

const StudentTable = ({ students, onDelete, onEdit }) => {
  const handleDelete = (index) => {
    onDelete(index);
  };

  const handleEdit = (index) => {
    const selectedStudent = students[index];
    onEdit(selectedStudent);
  };

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
            {/* <th>Update</th>  */}
            <th>Delete</th>{/* Added for the delete button */}
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
              {/* <td>
              <button onClick={() => handleEdit(index)}>Edit</button>
              </td> */}
              <td>
              <button onClick={() => handleDelete(index)}>Delete</button> {/* Pass index to handleDelete */}

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
