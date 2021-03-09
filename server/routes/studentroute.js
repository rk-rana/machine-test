import express from 'express';

import { getStudents, createStudent, updateStudent, deleteStudent,getStudentToBeUpdated } from '../controller/student.js';

const router = express.Router();

router.get('/getstudents', getStudents);
router.post('/reg', createStudent);
router.post('/studentUpdate', updateStudent);
router.post('/deleteStudent', deleteStudent);
router.post('/getStudentToBeUpdated', getStudentToBeUpdated);


export default router;