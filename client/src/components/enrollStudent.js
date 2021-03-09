import React, { Component } from "react";  
import axios from 'axios';
import { Redirect } from "react-router-dom";
import './Student.css'    
    
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
            date_enrolled: '',  
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
//this is for validation
    handleFormValidation() {    
        const { Student_name, Father_name, DOB, gender, address, city, state, pin, phone, email, standard, marks, date_enrolled } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        //Student name     
        if (!Student_name) {    
            formIsValid = false;    
            formErrors["Student_nameErr"] = "Student Name is required.";    
        }    
    

        //Father's name     
        if (!Father_name) {    
            formIsValid = false;    
            formErrors["Father_nameErr"] = "Father Name is required.";    
        }
        //DOB    
        if (!DOB) {    
            formIsValid = false;    
            formErrors["DOBErr"] = "Date of birth is required.";    
        }    
        else {    
            var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;    
            if (!pattern.test(DOB)) {    
                formIsValid = false;    
                formErrors["DOBErr"] = "Invalid date of birth";    
            }    
        }  
        
        //Gender    
        if (gender === '' || gender === "select") {    
            formIsValid = false;    
            formErrors["genderErr"] = "Select gender.";    
        } 

        //Address    
        if (!address) {    
            formIsValid = false;    
            formErrors["addressErr"] = "Address is required.";    
        }

        //City     
        if (!city) {    
            formIsValid = false;    
            formErrors["cityErr"] = "City is required.";    
        }


        //State   
        if (!state) {    
            formIsValid = false;    
            formErrors["stateErr"] = "State is required.";    
        }


        //Pin code   
        if (!pin) {    
            formIsValid = false;    
            formErrors["pinErr"] = "PIN Code is required.";    
        }    
        else {    
            var pat=/^\d{6}$/;    
            if (!pat.test(pin)) {    
                formIsValid = false;    
                formErrors["pinErr"] = "Invalid PIN Code.";    
            }    
        } 

        //Email    
        if (!email) {    
            formIsValid = false;    
            formErrors["emailErr"] = "Email id is required.";    
        }    
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {    
    
            formIsValid = false;    
            formErrors["emailErr"] = "Invalid email id.";    
        }   
    

    
        //Phone number    
        if (!phone) {    
            formIsValid = false;    
            formErrors["phoneErr"] = "Phone number is required.";    
        }    
        else {    
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;    
            if (!mobPattern.test(phone)) {    
                formIsValid = false;    
                formErrors["phoneErr"] = "Invalid phone number.";    
            }    
        }  
        
        
        //Class   
        if (standard === '' || standard === "select") {    
            formIsValid = false;    
            formErrors["standardErr"] = "Select standard.";    
        } 
      

        //Marks    
        if (!marks) {    
            formIsValid = false;    
            formErrors["marksErr"] = "Marks is required.";    
        }



        //Date enrolled     
        if (!date_enrolled ) {    
            formIsValid = false;    
            formErrors["date_enrolledErr"] = " Date is required.";    
        }
    
        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
    
    handleSubmit= (e) => {
        e.preventDefault()
        if (this.handleFormValidation()) {        
            this.setState(this.initialState)    
        }
        alert("you have successfully Enroll")
      axios({
          method : "post",
          url : "http://localhost:5000/enroll/reg",
          data : {
              Student_name: this.state.Student_name,
              Father_name : this.state.Father_name,
              DOB : this.state.DOB,
              gender : this.state.gender,
              address : this.state.address,
              city:this.state.city,
              state : this.state.state,
              pin : this.state.pin,
              phone : this.state.phone,
              email : this.state.email,
              standard: this.state.standard,
              marks: this.state.marks,
              date_enrolled:this.state.date_enrolled

          }
      }).then((response) => {
         console.log(response)
         this.setState({redirect:"/"})
      })
    }  
//this is on click fuction to go home
    home(){
        this.setState({redirect:"/"})
    }
    
    render() {    

        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        } 
    
        const { Student_nameErr, Father_nameErr, DOBErr, genderErr, addressErr, cityErr, stateErr, pinErr, phoneErr, emailErr, standardErr, marksErr, date_enrolledErr } = this.state.formErrors;    
    
        return (
                
            <div className="formDiv">  
            <button className="btn" onClick={()=>{this.home()}}>Home</button>  
                <h3 style={{ textAlign: "center" }} >Student Enrollment Form </ h3>    
                <div>    
                    <form className="enroll" onSubmit={this.handleSubmit}> 


{/* Student Name    */}
                        <div>    
                            <label htmlFor="Student_name">Name</label>    
                            <input type="text" name="Student_name"    
                                value={this.state.Student_name}    
                                onChange={this.handleChange}    
                                placeholder="Your name.."    
                                className={Student_nameErr ? ' showError' : ''} />    
                            {Student_nameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{Student_nameErr}</div>    
                            }    
    
                        </div> 

{/* Student Father Name */}
                        <div>    
                            <label htmlFor="Father_name"> Father's Name</label>    
                            <input type="text" name="Father_name"    
                                value={this.state.Father_name}    
                                onChange={this.handleChange}    
                                placeholder="Father's name.."    
                                className={Father_nameErr ? ' showError' : ''} />    
                            {Father_nameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{Father_nameErr}</div>    
                            }       
                        </div> 


{/* Student DOB */}
                        <div>    
                            <label htmlFor="text">Birth Date</label>    
                            <input type="text" name="DOB"    
                                value={this.state.DOB}    
                                onChange={this.handleChange}    
                                placeholder="DD/MM/YYYY.."    
                                className={DOBErr ? ' showError' : ''} />    
                            {DOBErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{DOBErr}</div>    
                            }    
                        </div> 




{/* Student gender */}
                        <div>    
                            <label htmlFor="gender">Gender</label>    
                            <select name="gender" onChange={this.handleChange}    
                                className={genderErr ? ' showError' : ''}    
                                value={this.state.gender} >    
                                <option value="select">--Select--</option>    
                                <option value="male">Male</option>    
                                <option value="female">Female</option>    
                                <option value="other">Other</option>    
                            </select>    
                            {genderErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>    
                            }    
                        </div>




{/* Student Address */}
                        <div>    
                            <label htmlFor="address">Address</label>    
                            <input type="text" name="address"    
                                value={this.state.address}    
                                onChange={this.handleChange}    
                                placeholder="Address"    
                                className={addressErr ? ' showError' : ''} />    
                            {addressErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{addressErr}</div>    
                            }       
                        </div>




{/* Student City */}
                        <div>    
                            <label htmlFor="city">City</label>    
                            <input type="text" name="city"    
                                value={this.state.city}    
                                onChange={this.handleChange}    
                                placeholder="City"    
                                className={cityErr ? ' showError' : ''} />    
                            {cityErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{cityErr}</div>    
                            }       
                        </div>




{/* Student State */}
                        <div>    
                            <label htmlFor="state">State</label>    
                            <input type="text" name="state"    
                                value={this.state.state}    
                                onChange={this.handleChange}    
                                placeholder="State"    
                                className={stateErr ? ' showError' : ''} />    
                            {stateErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{stateErr}</div>    
                            }       
                        </div>



{/* Student PIN Code */}

                        <div>    
                            <label htmlFor="pin">PIN Code</label>    
                            <input type="text" name="pin"    
                                onChange={this.handleChange}    
                                value={this.state.pin}    
                                placeholder="Your PIN Code.."    
                                className={pinErr ? ' showError' : ''} />    
                            {pinErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{pinErr}</div>    
                            }    
                        </div>



{/* Student phonenumber */}
                        <div>    
                            <label htmlFor="phone">Phone Number</label>    
                            <input type="text" name="phone"    
                                onChange={this.handleChange}    
                                value={this.state.phone}    
                                placeholder="Your phone number.."    
                                className={phoneErr ? ' showError' : ''} />    
                            {phoneErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{phoneErr}</div>    
                            }    
                        </div> 



{/* Student Email */}
                        <div>    
                            <label htmlFor="email">Email Id</label>    
                            <input type="text" name="email"    
                                value={this.state.email}    
                                onChange={this.handleChange}    
                                placeholder="Your email id.."    
                                className={emailErr ? ' showError' : ''} />    
                            {emailErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{emailErr}</div>    
                            }    
    
                        </div> 



                        
{/* Student Class    */}


<div>    
                            <label htmlFor="standard">Class</label>    
                            <select name="standard" onChange={this.handleChange}    
                                className={standardErr ? ' showError' : ''}    
                                value={this.state.standard} >    
                                <option value="select">--Select--</option>    
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>    
                            </select>    
                            {standardErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{standardErr}</div>    
                            }    
                        </div>



{/* Student Marks */}
                        <div>    
                            <label htmlFor="marks">Marks</label>    
                            <input type="text" name="marks"    
                                onChange={this.handleChange}    
                                value={this.state.marks}    
                                placeholder="Your Marks"    
                                className={marksErr ? ' showError' : ''} />    
                            {marksErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{marksErr}</div>    
                            }    
                        </div>

{/* Student Enrolled */}
                        <div>    
                            <label htmlFor="text">Enroll Date</label>    
                            <input type="text" name="date_enrolled"    
                                value={this.state.date_enrolled}    
                                onChange={this.handleChange}    
                                placeholder="DD/MM/YYYY.."    
                                className={date_enrolledErr ? ' showError' : ''} />    
                            {date_enrolledErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{date_enrolledErr}</div>    
                            }    
                        </div> 


                        <input type="submit" value="Submit" /> 
                        {/* <button class="btn btn-success" onClick = {this.submitForm}>Register</button>     */}
                    </form>    
                </div>    
            </div >    
        )    
    }    
}    
    
export default enrollStudent;