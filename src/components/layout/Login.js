import React,{ Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import setAlert from '../../actions/alert';
import { login } from '../../actions/auth';


export const Login = ({auth:{isAuthenticated,role,loading},login}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
    const { email, password } = formData;

    const onChange = e =>
            setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        login({email, password});
    }; 
    if(isAuthenticated && role === 'ADMIN') {
        return <Redirect to="/admin" />;
    } 
    else if(isAuthenticated && role === 'STUDENT') {
        return <Redirect to="/student" />;
    }    

    return (
        <Fragment>
            <div className="loginBody">
                <div className="login-wrapper">
                    <form className="form" onSubmit={onSubmit}>
                        <img src="/images/avatar.png" alt=""/>
                        <h2>Login</h2>
                        <div className="input-group">
                            <input type="text" name="email" className="loginUser" id="loginUser" value={email} onChange={onChange} required/>
                            <label htmlFor="loginUser">Email</label>
                        </div>
                        <div className="input-group">
                            <input type="password" name="password" className="loginPassword" id="loginPassword" value={password} onChange={onChange} required/>
                            <label htmlFor="loginPassword">Password</label>
                        </div>
                        <input type="submit" className="submit-btn" />
                    </form>    
                </div>
            </div>
        </Fragment>
    )
}
Login.propTypes = {
    auth: PropTypes.object,
    login:PropTypes.func.isRequired 
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
export default connect(mapStateToProps,{setAlert,login})(Login);