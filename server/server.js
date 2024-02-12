const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const app=express();
const dotenv=require('dotenv')
app.use(cors());
app.use(express.json());
const home=require('./routers/Home');
const Student=require('./model/StudentSchema')
// xkJrj8TJKlSEX3rv
app.use(home);
dotenv.config();

mongoose.connect(process.env.REACT_MONGO_URL,{
    useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB Atlas');
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
});

app.listen(5000,(req,res)=>{
console.log("Server is running on port 5000...")
})