import React, { Component } from 'react';
import { signup } from '../auth/helper';
import Base from '../core/Base';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            values : {name: "",
            email: "",
            password: "",
            error: "",
            success: false,},
         }
        
    }
    

    handleChange = (name) =>
    (event) => {
        
        this.setState({values: {...this.state.values ,error: false, [name]: event.target.value },});
    };

    onSubmit =(event)=>{
        this.setState({values:{...this.state.values,error: false}});
        const {name} = JSON.stringify(this.state.values.name);
        // const {name} = this.state.values.name;
        const {email} = JSON.stringify(this.state.values.email);
        const {password} = JSON.stringify(this.state.values.password);   
        event.preventDefault();
        
        // this.componentDidMount()
        // this.setState({...this.state.values,error:false});
        // this.setState({...this.state,values: {...this.state.values ,error: false},}); // correct upto here
        
        signup({name,email,password})
        // signup({name,email,password})// problem lies here
        .then((data) => {
            console.log("DATA",data);
            if(data.email === this.state.values.email){
                // this.setState({...this.state.values,name:"",email:"",password:"",error:"",success: true});

                this.setState({values: {...this.state.values ,name:"",email:"",password:"",error:"",success: true},});
            }else{
                // this.setState({...this.state.values,error:true,success: false});

                this.setState({values: {...this.state.values ,error:true,success: false},});

            }
        })
        .catch((err) => console.log(err))

    }
    successMessage = () =>{
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-success" 
                    style={{display: this.state.values.success ? "":  "none"}}
                    >
                    New Account Created Successfully, Please Login
                    </div>
                   
                </div>
            </div>
        )
    }

    errorMessage = () =>{
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-danger" 
                    style={{display: this.state.values.error ? "":  "none"}}
                    >
                    Signup Failed, Try Again
                    </div>
                   
                </div>
            </div>
        )
    }

    signUpForm = () => {
        return (
            
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form >
                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input
                            className="form-control"
                            value={this.state.values.name}
                            onChange={this.handleChange("name") || "" }
                            type="text"
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input
                            className="form-control"
                            value={this.state.values.email}
                            onChange={this.handleChange("email") || ""}
                            type="text"
                            />
                        </div>

                        <div className="form-group">
                            <label className="text-light">password</label>
                            <input
                            className="form-control"
                            value={this.state.values.password || ""}
                            onChange={this.handleChange("password")}
                            type="password"
                            />
                        </div>
                        <button 
                        onClick={this.onSubmit}
                        className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
    render() {             
            
         return ( 
            

            <Base title="Welcome to E-commerce" description="Create Your Account From Here">
            {this.successMessage()}    
            {this.errorMessage()}
            {this.signUpForm()}
            <p className="text-white text-center">
                {JSON.stringify(this.state.values)}
            </p>
            </Base>
         );
    }
}
 
export default Signup;

