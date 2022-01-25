import React from 'react';
import {  Link } from "react-router-dom";

const navigation = () => {
  return <div>
 
<div className="container-fluid">
          <div className="row justify-content-center" >
            <div className="col-12 col-md-5 col-lg-6 col-xl-4 px-lg-6 my-5 align-self-center" id="loginform">
    
        
              <h1 className="display-4 text-center mb-3">
                Sign in
              </h1>
    
            
              <p className="text-muted text-center mb-5">
                Free access to our dashboard.
              </p>
 
     <form>

   
        <div className="form-group">

   
          <label className="form-label">
            Email Address
          </label>

      
          <input type="email" className="form-control" placeholder="name@address.com"/>

        </div>

      
        <div className="form-group">
          <div className="row">
            <div className="col">

            
              <label className="form-label">
                Password
              </label>

            </div>
            <div className="col-auto">

        
              <a href="password-reset-cover.html" className="form-text small text-muted" id="forgot">
                Forgot password?
              </a>

            </div>
          </div> 

      
          <div className="input-group input-group-merge">

       
            <input className="form-control" type="password" placeholder="Enter your password" id="password"/>


          </div>
        </div>


       
        <button className="btn btn-lg w-100 btn-primary mb-3" id="login">
      
        <a href="https://www.flickr.com/photos/tags" >
       Login
          </a>
        </button>
       
       
        <p className="text-center">
          <small className="text-muted text-center">
            Don't have an account yet? <a href="userlist.js">
            <Link to="/userlist"> Sign up</Link>
       
              </a>.
          </small>
        </p>

      </form>

    </div>
  
    <div className=" col-12 col-md-7 col-lg-6 col-xl-8 d-lg-block">

  
      <div className="bg-cover min-vh- mt-n1 me-n3">
      <img src= "https://dashkit.goodthemes.co/assets/img/covers/auth-side-cover.jpg" alt="gallery"/>
      </div> 

    </div>
  </div> 
</div>

  </div>;

};

export default navigation;
