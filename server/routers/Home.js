const {Router} = require('express');
const router = Router();
const Student = require('../model/StudentSchema'); 

router.get('/',(req,res)=>{ 
    res.send("Hello World")
})

router.post('/submit', async (req, res) => {
    try {
        const { name, gender, dept, email, college, cgpa } = req.body;
        console.log(name);
        
        const newStudent = new Student({
            name,
            gender,
            dept,
            email,
            college,
            cgpa
        });

        await newStudent.save();

        res.status(201).json({ message: 'Student data saved successfully' });
    } catch (error) {
        console.error('Error saving student data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/students', async (req, res) => {
    try {
      const students = await Student.find();
      res.json(students);
    } catch (error) {
      console.error('Error fetching students:', error);
      res.status(500).send('Internal server error');
    }
  });

  router.delete('/students/:id', async (req, res) => {
    try {
      const deletedStudent = await Student.findOneAndDelete({ _id: req.params.id });
      if (!deletedStudent) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.json({ message: 'Student deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.put('/students/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { name, gender, dept, email, college, cgpa } = req.body;
      await Student.findByIdAndUpdate(id, { name, gender, dept, email, college, cgpa });
      res.json({ message: 'Student updated successfully' });
    } catch (error) {
      console.error('Error updating student:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  

module.exports=router;