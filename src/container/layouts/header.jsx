import React from "react";
import { Link ,useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../account/account_action";
import { connect } from "react-redux";
function Header(props) {
  const account_state = useSelector(state => state.account)

  
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="col-sm-12">
            <Link to="/" className="logo">
              Indian Cuisine Restaurant
            </Link>
          </div>
        </div>
      </div>
      <div className="header-middle">

            <div className="container">
              <div className="justify-content-center py-3">
                <ul className="nav nav-pills">
                {
                  (!account_state.authenticated_customer && !account_state.authenticated_cook && !account_state.authenticated_admin)
                    ?
                    <li className="nav-item">
                    <Link to="/login" className="nav-link fw-bold" aria-current="page">
                      Login
                    </Link>
                  </li>
                    :
                    <li className="nav-item">
                    <Link onClick={props.logout} className="nav-link fw-bold" aria-current="page">
                      Log out
                    </Link>
                  </li>
                }
                
              
                  <li className="nav-item">
                    <Link to="/" className="nav-link fw-bold">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/menu" className="nav-link fw-bold">
                      Menu
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/cart" className="nav-link fw-bold">
                      Cart
                    </Link>
                  </li>
                 
                </ul>
              </div>
            </div>
         
      </div>
    </header>
  );
}

function mapStateToProps() {
  return {

  };
}
export default connect(mapStateToProps,{logout})(Header);

