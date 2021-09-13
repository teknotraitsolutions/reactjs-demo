import React,{useState} from 'react';
import {Link,NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth';

export const Navbar = ({auth:{isAuthenticated,role,loading},logout}) => {
    const [activebar,setActive] = useState(false);
    const adminAuthLinks = (
            <div className="nav-main">        
                <div className={activebar ? "activebar":"navbar-body"}>
                    <span className="navbar-module">
                        
                    </span>

                    <span className="navbar-module">
                        <NavLink to='/admin' activeClassName="active"><i className="fas fa-tachometer-alt icons"></i><span className={activebar ? "nav-title":"nav-heading"}>&nbsp;&nbsp;Dashboard</span></NavLink>
                    </span>

                    <span className="navbar-module">                
                        <NavLink to='/exam' activeClassName="active"> <i className="fas fa-newspaper icons"></i><span className={activebar ? "nav-title":"nav-heading"}>&nbsp;&nbsp;Exams</span></NavLink>
                    </span>

                    <span className="navbar-module">
                        <NavLink to='/question' activeClassName="active"> <i className="fa fa-question-circle icons"></i><span className={activebar ? "nav-title":"nav-heading"}>&nbsp;&nbsp;Questions</span></NavLink>
                    </span>

                    <span className="navbar-module">
                        <Link to='/'  onClick={logout} > <i className="fas fa-sign-out-alt icons"></i><span className={activebar ? "nav-title":"nav-heading"}>&nbsp;&nbsp;Logout</span></Link>
                    </span>
                </div>
                <div className="header">
                <div className="row">
                    <div className={activebar ? "activhead col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9":"col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 head"}>
                        <span className="page-title">
                            &nbsp;&nbsp;&nbsp;<span className="logo" onClick={()=>setActive(!activebar)}><i className="fas fa-bars"></i></span>
                        </span>
                    </div>
                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <div className ="profile">
                            <img src="/images/avatar.png" alt=""/>
                            <p>Premkant Sahu<span>Admin</span></p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        );
        const studentAuthLinks = (
            <div className="nav-main">
            <div className={activebar ? "activebar":"navbar-body"}>
                <span className="navbar-module">
                    <p className="logo"><img src="/images/logo.png" alt="" /></p>
                </span>

                <span className="navbar-module">
                    <NavLink to='/student' activeClassName="active"><i className="fas fa-tachometer-alt icons"></i>&nbsp;&nbsp;Dashboard</NavLink>
                </span>

                <span className="navbar-module">
                    <NavLink to='/branch' activeClassName="active"><i className="fas fa-book icons"></i>&nbsp;&nbsp;Branch</NavLink>
                </span>
                <span className="navbar-module">
                    <Link to='/'  onClick={logout} > <i className="fas fa-sign-out-alt icons"></i>&nbsp;&nbsp;Logout</Link>
                </span>
            </div>
            <div className="header">
            <div className="row">
                <div className={activebar ? "activhead col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9":"col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 head"}>
                    <span className="page-title">
                        &nbsp;&nbsp;&nbsp;<span className="logo" onClick={()=>setActive(!activebar)}><i className="fas fa-bars"></i></span>
                    </span>
                </div>
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <div className ="profile">
                        <img src="/images/avatar.png" alt=""/>
                        <p>Premkant Sahu<span>Student</span></p>
                    </div> 
                </div>
            </div>
        </div>
         </div>   
        );
        const guestLink = (<span></span>);

        if(isAuthenticated && role==='ADMIN'){
            return adminAuthLinks;
        }
        else if(isAuthenticated && role==='STUDENT'){
            return studentAuthLinks;
        }
        else{
            return guestLink;
        }
    };

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
const mapStateToProps = (state) => ({
    auth: state.auth
  });
  
export default connect(mapStateToProps,{logout})(Navbar);