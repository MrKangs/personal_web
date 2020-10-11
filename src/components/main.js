import React from 'react';
import { Switch, Route } from 'react-router-dom';


import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Projects from './project';

const Main = () => (
    <Switch>
        <Route exact path ="/" component = {LandingPage} />
        <Route path ="/aboutme" component = {AboutMe} />
        <Route path ="/projects" component = {Projects} />
    </Switch> 
)

export default Main;