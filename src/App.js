import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Content, MDLComponent } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
    <Layout>
        <Header className="header-color" id = "noselect"  scroll>
            <Navigation>
                <h3><Link to = "/">Home</Link></h3>
                <h3><Link to="/aboutme">About Me</Link></h3>
                <h3><a href ="https://google.com" target="_blank" rel = "noopener noreferrer">Resume</a></h3>
                <h3><Link to="/projects">Projects</Link></h3>
                <h3><Link to="/contact">Contact</Link></h3>
            </Navigation>
        </Header>
        <Content>
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
