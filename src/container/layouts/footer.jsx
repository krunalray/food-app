import React from "react";
import { Link } from "react-router-dom";  
export default function Footer() {
  return (
    <div className="footer">
        <div className="container">
          <div className="row">
          <div className="col-md-6">
              <div className="address-block text-start">
                <ul className="footer-link-list list-unstyled fw-bold">
                  <li>
                  Main Street West,
                
                  
                  </li>
                  <li>
                  Hamilton L&N 1V2,
                  </li>
                  <li>
                  Ontario,CA
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="app-block text-end">
               
                  
                  <Link  className="app-link" to="/customer/login">Customer | </Link>
              
              
                  <Link className="app-link" to="/admin/login">Admin</Link>
                  
            
              </div>
            </div>
           
          </div>
        </div>
    </div>
  );
}
