import React from 'react'
import axios from '../axiosConfig'
import { useState,useEffect } from 'react';
import StudentTable from './StudentTable';


const Home = () => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        dept: '',
        email: '',
        college: '',
        cgpa: '',
      });
    
      const [students, setStudents] = useState([]);
    
      useEffect(() => {
        // Function to fetch all student details from the database
        const fetchStudents = async () => {
          try {
            const response = await axios.get('/students'); // Adjust endpoint as needed
            setStudents(response.data); // Update students state with data from the server
          } catch (error) {
            console.error('Error fetching students:', error);
          }
        };
    
        // Call fetchStudents when the component mounts
        fetchStudents();
      }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/submit', formData);
          console.log('Response:', response.data);
    
          // Update the students state by fetching all students again from the database
          const updatedStudentsResponse = await axios.get('/students'); // Fetch updated student data from the server
          setStudents(updatedStudentsResponse.data); // Update students state with the updated data
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };
      const handleDelete = async (index) => {
        try {
          await axios.delete(`/students/${students[index]._id}`);
          const updatedStudentsResponse = await axios.get('/students');
          setStudents(updatedStudentsResponse.data);
        } catch (error) {
          console.error('Error deleting student:', error);
        }
      };

  return (
    <div>
    <div className="home-container">
        <div className="form-container">
      <h2>Student Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Gender
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Department
            <input
              type="text"
              name="dept"
              value={formData.dept}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            College:
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Cgpa:
            <input
              type="text"
              name="cgpa"
              value={formData.cgpa}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
      </div>
      <div>
        <StudentTable students={students} onDelete={handleDelete}/>
      
    </div>
    </div>
  )
}

export default Home