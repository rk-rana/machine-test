import React, { Component } from "react";  
import { Redirect } from "react-router-dom";  
    
class enrollStudent extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {     
            Student_name: '',
            Father_name: '',
            DOB : '',
            gender: 'select',
            address: '',
            city: '',
            state: '',
            pin: '',
            phone: '',
            email: '',
            standard: 'Select',
            marks:'', 
            date_enrolled: ''

        };    
    
        this.initialState = this.state;    
    }    
       
    
componentDidMount(){

    const currentStudent = localStorage.getItem('currentStudent')
    console.log(JSON.parse(currentStudent),"abcdcdcd")
    this.setState({...this.state, ...JSON.parse(currentStudent)})

}

render() { 
    if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
    }   

    
    
    return (
        <><div className="student">
        <h1 >Student Detail</h1>

        <h3>Student Name</h3>
        {this.state.Student_name}

        <h3>Father Name</h3>
        {this.state.Father_name}
        
        <h3>DOB</h3>
        {this.state.DOB}


        <h3>Gender</h3>
        {this.state.gender}

        <h3>Address</h3>
        {this.state.address}

        <h3>City</h3>
        {this.state.city}

        <h3>State</h3>
        {this.state.state}

        <h3>PIN</h3>
        {this.state.pin}

        <h3>Email ID</h3>
        {this.state.email}

        <h3>Class</h3>
        {this.state.standard}

        <h3>Marks</h3>
        {this.state.marks}

        <h3>Date Enroled</h3>
        {this.state.date_enrolled}

</div>
        </>
    )}


}

    export default enrollStudent;