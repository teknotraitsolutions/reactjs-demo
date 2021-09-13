import React,{Fragment} from 'react';
import{BrowserRouter as Router, Route, Switch}from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Admin from './components/admin/Admin';
import User from './components/user/User';
import Exam from './components/exam/Exam';
import Question from './components/question/Question';
import Branch from './components/branch/Branch';
import Login from './components/layout/Login';
import Alert from './components/layout/Alert';
import NotFound from './components/layout/NotFound';
import {AdminPrivateRoute,UserPrivateRoute} from './components/routing/PrivateRoute';
//redux
import {Provider} from 'react-redux';
import store from './store';
import './App.css';
import setAuthToken from './utils/setAuthToken';

function App() {
 

  if(localStorage.token){
    setAuthToken(localStorage.token);
  }

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
        <Navbar />
        <Alert />
        <Route exact path="/" component={Login} />
        <section className="container">
          <Switch>
            <AdminPrivateRoute exact path="/admin" component={Admin} />
            <AdminPrivateRoute exact path="/exam" component={Exam} />
            <AdminPrivateRoute exact path="/question" component={Question} />
            <UserPrivateRoute exact path="/branch" component={Branch} />
            <UserPrivateRoute exact path="/student" component={User} />
          </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
