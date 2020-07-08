import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Projects from "./components/projects/Projects";
import ProjectState from './context/projects/projectState';
import TasksState from "./context/tasks/tasksState";
import AlertState from "./context/alerts/alertState";
import AuthState from "./context/auth/authState";
import tokenAuth from "./config/auth.token.config";
import PrivateRoutes from "./components/routes/PrivateRoutes";

// Check if there's an existing token
const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token);
};

const App = () => {
  return (
    <AuthState>
      <ProjectState>
        <TasksState>
          <AlertState>
            <Router>
              <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/signup' component={Signup} />
                <PrivateRoutes exact path='/projects' component={Projects} />
              </Switch>
            </Router>
          </AlertState>
        </TasksState>
      </ProjectState>
    </AuthState>
  );
};

export default App;
