import React, { Component } from 'react';
import { signup } from '../auth/helper';
import Base from '../core/Base';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            values : { }
         }
         this.handleChange = this.handleChange.bind(this);
         this.componentDidMount = this.componentDidMount.bind(this);
    }
    

    componentDidMount() {
        this.setState({
          values: {name: "",
                  email: "",
                  password: "",
                  error: "",
                  success: false,},
        });
      }

    handleChange = (name) =>
    (event) => {
        this.setState({...this.state, values: {...this.state.values ,error: false, [name]: event.target.value },});
    };

    onSubmit(event){
        const {name} = this.state.values.name;
        const {email} = this.state.values.email;
        const {password} = this.state.values.password;

        event.preventDefault();
        this.setState({...this.state,values:{...this.state.values,error: false}});
        signup({name,email,password})
        .then((data) => {
            console.log("DATA",data)
        })
        .catch((err) => console.log(err))

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
                            onChange={this.handleChange("name")}
                            type="text"
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input
                            className="form-control"
                            value={this.state.values.email}
                            onChange={this.handleChange("email")}
                            type="text"
                            />
                        </div>

                        <div className="form-group">
                            <label className="text-light">password</label>
                            <input
                            className="form-control"
                            value={this.state.values.password}
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
            {this.signUpForm()}
            <p className="text-white text-center">
                {JSON.stringify(this.state.values)}
            </p>
            </Base>
         );
    }
}
 
export default Signup;

