import React, { useState } from 'react';
import { signup } from '../auth/helper';
import Base from '../core/Base';
import {Link} from 'react-router-dom';

const Signup = () => {

    const [values,setValues] = useState({
        values : {name: "",
        email: "",
        password: "",
        error: "",
        success: false, }
    });
    
    const {name,email,password,error,success} = values;

    const handleChange = (name) =>
    (event) => {
        
        setValues({...values ,error: false, [name]: event.target.value });
    };

    const onSubmit =(event)=>{
        setValues({...values,error: false});
          
        event.preventDefault();
        
        signup({name,email,password})
        .then((data) => {
            console.log("DATA",data);
            if(data.email === email){

                setValues({...values ,name:"",email:"",password:"",error:"",success: true});
            }else{
                // this.setState({...this.state.values,error:true,success: false});

                setValues({...values ,error:true,success: false});

            }
        })
        .catch((err) => console.log(err))

    }
    const successMessage = () =>{
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-success" 
                    style={{display: success ? "":  "none"}}
                    >
                    New Account Created Successfully, Please Login <Link to="/signin">Login now</Link>
                    </div>
                   
                </div>
            </div>
        )
    }

    const errorMessage = () =>{
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-danger" 
                    style={{display: error ? "":  "none"}}
                    >
                    Signup Failed, Try Again
                    </div>
                   
                </div>
            </div>
        )
    }

    const signUpForm = () => {
        return (
            
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form >
                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input
                            className="form-control"
                            value={name}
                            onChange={handleChange("name") }
                            type="text"
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input
                            className="form-control"
                            value={email}
                            onChange={handleChange("email")}
                            type="text"
                            />
                        </div>

                        <div className="form-group">
                            <label className="text-light">password</label>
                            <input
                            className="form-control"
                            value={password}
                            onChange={handleChange("password")}
                            type="password"
                            />
                        </div>
                        <button 
                        onClick={onSubmit}
                        className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }

    return ( 
        <Base title="Welcome to E-commerce" description="Create Your Account From Here">
            {successMessage()}    
            {errorMessage()}
            {signUpForm()}
            <p className="text-white text-center">
                {JSON.stringify(values)}
            </p>
            </Base>
     );
}
 
export default Signup;