import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";

const Login = () => {

  
    const [values, setvalues] = useState({
        email:"mukul@test.com",
        password:"test1234",
        error:"",
        loading:false
    })
    const {email,password,error,loading}=values;
let history = useHistory();

    // const handleEmailChange=evt=>{
    //    setemail(evt.target.value)
    // }
   
    // const handlePasswordChange=(evt)=>{
    //     setpassword(evt.target.value)

    // }
    const handleChange=name=>event=>{
        setvalues({...values,error:false,[name]:event.target.value})
    }
    const loadingMessage=()=>{
        return (loading &&(<div className="alert alert-info">
            <h2>LOADING.....</h2>
        </div>))
    }
    
   const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  const submitHandler=()=>{
      setvalues({...values,loading:true})
      if(email==="user@test.com" && password==="test1234"){
        return history.push('/weather')

      }
      else   {
          setvalues({...setvalues,error:"Invalid Credentials."})
      };

  }
 
  const signInform=()=>{
      return(
          <div className="row center m-4">
        <form className="d-flex  flex-column align-items-center justify-content-center">
            <h1>PLEASE LOGIN: </h1>
        <input className="form-control mb-3" value={email} onChange={handleChange("email")} type='email' placeholder="Enter your email address..."></input>
        <input className="form-control mb-3" value={password} onChange={handleChange("password")} type='password' placeholder="Enter your password"></input>
        <button className="btn btn-primary mb-3" onClick={submitHandler}>Submit</button>

    </form>
    </div>
    
   
      )
  }
  return (
    <div>
       
        {signInform()}
        {loadingMessage()}
        {errorMessage()}
    </div>
  );
};

export default Login;
