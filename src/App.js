import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div>
    <Layout>
        <Header className="header-color" id = "noselect"  scroll>
            <Navigation>
                <Link to = "/personal_website">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <a href ="https://drive.google.com/file/d/1PaRs4T1l_ntstGP0VMGLSk5837I3kGN4/view?usp=sharing" target="_blank" rel = "noopener noreferrer">Resume</a>
                <Link to="/projects">Projects/Courses</Link>
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