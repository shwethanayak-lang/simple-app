/* eslint-disable no-undef */
import React from 'react';

const userlist = () => {
  return <div>

       <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">

       
            <div className="header">
              <div className="header-body">
                <div className="row align-items-center">
                  <div className="col">
                    <h1 className="header-title">
                      User Details
                    </h1>

                  </div>
                  <div className="col-auto">

                    <a href="#user" className="btn btn-primary" id="adduser" data-toggle="modal" data-target="#myModal">
                      Add User
                    </a>

                 
  <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
    
 
      <div className="modal-content">
          <div className="modal-head">
     
      <button type="button" className="close" data-dismiss="modal">&times;</button>
      <h1 >Enter the User Datails</h1>
    </div>
        <form  >
            <div className="form-group">
              <label className="form-label">
                Sl.No
              </label>
    
              <input type="number" className="form-control" id="sn" placeholder="01,02,03"/>
    
            </div>
    
            <div className="form-group">
    
    
              
                  <label className="form-label">
                           Name
                  </label>
                  
              <input type="text" className="form-control" id="name" placeholder="###"/>
    
                </div>
            
             
            <div className="form-group">
    
    
         
                <label className="form-label" >
                 Email Id
                </label>
                
            <input type="email" className="form-control" id="email" placeholder="name@address.com" />
  
              </div>
              <div className="form-group">
    
        
                <label className="form-label">
                 Date Of Birth
                </label>
                
            <input type="date" className="form-control" id="DOB" placeholder="dd/mm/yy"/>
  
              </div>
     <button type="submit" className="btn btn-primary" id="adduser"  data-toggle="modal" data-target="#myModal">
                Add User
            
              </button>
              </form>
      </div>
      
    </div>
  </div>
  
</div>
                  </div>
                </div>
              </div>
            </div>

       
            <div className="card" >
              <div className="card-header">

                <form>
                    <div className="input-group input-group-flush input-group-merge input-group-reverse">
              <input className="form-control list-search" type="search" placeholder="Search"  id="myinput" title="Type a name" onkeyup="searchMatch()"/> 
                     
                      <span className="input-group-text">
                        <i className="fe fe-search"></i>
                      </span>
                    </div>
                  </form>
  
                </div>
                <div className="table-responsive">
                  <table className="table table-sm table-nowrap card-table" id="names" >
                    <thead>
                      <tr>
                       <td></td>
                        <th>
                          <a href="#user" className="text-muted list-sort" >
                           Sl.No 
                          </a>
                        </th>
                        <th>
                          <a href="#user" className="text-muted list-sort">
                          Name
                          </a>
                        </th>
                        <th>
                          <a href="#user" className="text-muted list-sort" contentEditable="true" >
                        Email Id
                          </a>
                        </th>
                        <th>
                          <a href="#user" className="text-muted list-sort" >
                           Date Of Birth
                          </a>
                        </th>
                        <th>
                           Update Details
                          </th>
                        
                       
                      </tr>
                    </thead>
                    <tbody>
                      
                         </tbody>
                         </table>      
                           
                     
                </div>
             
              
              
              </div>
  
            </div>
          </div>
        </div>

};

export default userlist;
