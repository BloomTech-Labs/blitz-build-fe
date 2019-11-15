import React from "react";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import NavBar from "./components/NavBar";
import Dashboard from "./components/dashboard/index";
import Tasks from './views/tasks/Tasks'
import Projects from "./components/projects/Projects";
import IndividualProject from "./components/projects/IndividualProject";
import DelayLog from "./components/delayLog/DelayLog"
//SWITCH INDEX TO DASHBOARD AFTER LC CHANGES HIS FILE NAME

function App() {
  const navLinks = [
    {
      text: "Home",
      path: "/",
      icon: "ion-ios-home"
    },
    {
      text: "Projects",
      path: "/projects",
      icon: "ion-ios-build"
    },
    {
      text: "Tasks",
      path: "/tasks",
      icon: "ion-ios-checkbox"
    },
    {
      text: "Documents",
      path: "/documents",
      icon: "ion-ios-document"
    },
    {
      text: "Templates",
      path: "/templates",
      icon: "ion-ios-menu"
    },
    {
      text: "Calendar",
      path: "/calendar",
      icon: "ion-ios-calendar"
    },
    {
      text: "Log Out",
      path: "/log-out",
      icon: "ion-ios-power"
    }
  ];

  return (
    <Router>
      <NavBar
        navLinks={navLinks}
        //  logo={ logo }
      />

      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/tasks" component={Tasks} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/project/:id" component={IndividualProject} />
        <Route exact path="/delaylog" component={DelayLog} />
      </Switch>
    </Router>
  );
}

export default App;
