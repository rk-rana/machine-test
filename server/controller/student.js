import express from 'express';
import mongoose from 'mongoose';

import EnrollStudent from '../models/studentdb.js';

const router = express.Router();


// To get ALl Student
export const getStudents = async (req, res) => { 
    try {
        const enrollStudent = await EnrollStudent.find();
                
        res.status(200).json(enrollStudent);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
// To Create a student
export const createStudent = async (req, res) => {
    // console.log("sa")
    // console.log(req.params)
    // const { id } = req.params;
    console.log(req.body) 
    try {
        EnrollStudent.create(req.body).then((user, err) => {
            res.json({
                message : "Student created successfully",
                enrollStudent : user
            })
        })
                
       
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


//To Update Student
export const updateStudent =  async (req, res) => { 
    console.log(req.body,"oviiaslfnvli;dzmf")

  try {
    EnrollStudent.updateOne({_id : req.body._id}, {...req.body}, (err, user) => {
          
              res.json({
                  updatedEnrollStudent : user,
                  message : "Student Updated "
              })
      })
      
      
    
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}


// to delete student
export const deleteStudent =  async(req,res) => {
   
    console.log(req.body)
    EnrollStudent.findOneAndRemove({_id : req.body._id}, (user, err) => {
         res.json({
             message : "Student deleted"
         })
     })
       
   }



// Get one Student to be updated
export const getStudentToBeUpdated = (req, res) => {
    EnrollStudent.findById(req.body.enrollStudentId, (err, user) => {
          res.json({
              user : user
          })
      })
  }



export default router;