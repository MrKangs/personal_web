import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Content, MDLComponent } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
    <Layout>
        <Header className="header-color"  scroll>
            <Navigation>
                <Link to = "/">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <a href ="https://google.com" target="_blank" rel = "noopener noreferrer">Resume</a>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
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
