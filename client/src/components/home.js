import React from 'react';
import { Table, Button  } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import './home.css'

class StudentLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      students: []
    }
  }


  // this is a axios request to fetch and get all students
  componentDidMount(){

    // const currentEnrollStudent = localStorage.getItem('currentEnrollStudent')
    axios({
        method : "get",
        url : "http://localhost:5000/enroll/getStudents",
   }).then((response) => {
       console.log(response.data)
     this.setState({...this.state,students:response.data})
     
   })


}


// this is axios request to delete student
deletestudent(id){

    // const currentEnrollStudent = localStorage.getItem('currentEnrollStudent')
    axios({
        method : "post",
        url : "http://localhost:5000/enroll/deleteStudent",
        data:{
            _id : id
        }
   }).then((response) => {
    axios({
        method : "get",
        url : "http://localhost:5000/enroll/getStudents",
   }).then((response) => {
       console.log(response.data)
     this.setState({students:response.data})
   })

   })
}

//this is on click fuction to edit student
  edit (student){
      localStorage.setItem("currentStudent", JSON.stringify(student));
      this.setState({redirect : "/editStudent"})


  }

//this is on click fuction to show student
  show (student){
    localStorage.setItem("currentStudent", JSON.stringify(student));
    this.setState({redirect:"/showStudent"})
  }

//this is on click fuction to Enroll new student
newStudent (){
    this.setState({redirect:"/enroll"})
}

  render() {

 
    if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
    } 
    const { error} = this.state;

    if(error) {
      return (
        <div>Error: {error.message}</div>
      )
    } else {
      return(
        <div>
        

          <h1 id='title'>Student List</h1>
          <Button  className="btn btn-primary btn-lg " onClick={() => this.newStudent()}>Enroll New Student</Button>

          <Table id='students'>
            <thead>
              <tr>
                <th>SNo.</th>
                <th>Student  Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Class</th>
                <th>Marks %</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {this.state.students.map((student,index) => (
                <tr key={student.id}>
                  <td>{index}</td>
                  <td onClick={() => this.show(student)}><h5 style={{ cursor:'pointer'}}>{student.Student_name}</h5></td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>{student.standard}</td>
                  <td>{student.marks}</td>
                  <td>
                    <Button variant="info" onClick={() => this.edit(student)}>Edit</Button>
                    &nbsp;<Button variant="danger" onClick={() => this.deletestudent(student._id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

        </div>
      )
    }
  }
}

export default StudentLists;
