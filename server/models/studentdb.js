import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    Student_name: String,
    Father_name: String,
    DOB : String,
    gender:String,
    address: String,
    city: String,
    state: String,
    pin: Number,
    phone: Number,
    email: String,
    standard: Number,
    marks:Number,
    date_enrolled: String,
})

const Student = mongoose.model('Student', studentSchema);

export default Student;