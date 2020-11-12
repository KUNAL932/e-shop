import React ,{useState} from 'react';
import Base from '../core/Base';
import {Link, Redirect} from 'react-router-dom';
import { authenticate, isAuthenticated, signin } from '../auth/helper';

const Signin = () => {
    const [values,setValues] = useState({
        email: "kunalkashyap932@gmail.com",
        password: "abc@123",
        error: "",
        success: false,
        didRedirect: false,
        loading: false,
        
    
    });
    
    const {email,password,error,success,loading,didRedirect} = values;
    const handleChange = (name) =>
    (event) => {
        
        setValues({...values ,error: false, [name]: event.target.value });
    };

    const onSubmit =(event)=>{
        event.preventDefault();
        setValues({...values,error: false,loading: true});

        signin({email,password})
        .then(data => {
             console.log("Data",data);
            
            
        if(data.token){
            // let sessionToken = data.token;
            authenticate(data,()=>{
            setValues({
                ...values,
                didRedirect: true,})
            console.log("TOKKEN ADDED");
            
                })
        }
        else{
            setValues({...values,loading: false})
        }
        })
        .catch(e => console.log(e))
        
    }

    const performRedirect = () =>{
        if(isAuthenticated()){
            return <Redirect to="/"/>
        }
    };
    const loadingMessage = () => {
        return (
            loading && (
                <div className="alert alert-info">
                    <h2>Loading...</h2>
                </div>
            )
        );
    };
    // const successMessage = () =>{
    //     return (
    //         <div className="row">
    //             <div className="col-md-6 offset-sm-3 text-left">
    //                 <div className="alert alert-success" 
    //                 style={{display: success ? "":  "none"}}
    //                 >
    //                 Login Successfull <Link to="/Home">Login now</Link>
    //                 </div>
                   
    //             </div>
    //         </div>
    //     )
    // }

    // const errorMessage = () =>{
    //     return (
    //         <div className="row">
    //             <div className="col-md-6 offset-sm-3 text-left">
    //                 <div className="alert alert-danger" 
    //                 style={{display: error ? "":  "none"}}
    //                 >
    //                 Signin Failed, Try Again with Correct Email and Password
    //                 </div>
                   
    //             </div>
    //         </div>
    //     )
    // }

    const signInForm = () => {
        return (
            
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form >
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
        <Base title="Signin" description="Welcome to the signin page">
            {loadingMessage()}
            {signInForm()}
            
            {/* <p className="text-center">{JSON.stringify(values)}</p> */}
            {performRedirect()}
        </Base>
     );
}
 
export default Signin;