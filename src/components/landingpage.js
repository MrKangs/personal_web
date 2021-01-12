import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component{
    render(){
        return(
            <div style={{width: "100%", margin: 'auto' }}>
                <Grid className="landing-grid" id = "noselect">
                    <Cell col={12}>
                        <img 
                        src ="https://avatars3.githubusercontent.com/u/24395305?s=460&u=6f91ce51ceaa6973ab86dd77f9eb48a4701704e3&v=4" 
                        alt = "Profile"
                        className = "profile-landing-img"
                        />

                        <div className = "banner-text">
                            <h1>Kenneth Lee Kang</h1>
                            
                            <h2>Research Assistant</h2>

                            <hr/>
                        
                        <p> Python | C++ | MicroController/Arduino | Java | JavaScript </p>

                        <div className = "social-links">

                            {/* Gmail */}
                            <a href= "mailto:gykang00@gmail.com" target="_blank" rel = "noopener noreferrer">
                                {/* Need to know how to open email link how others work */}
                                <i class="fa fa-envelope" aria-hidden = "true" aria-label ="Send me an Email!"/>
                            </a>
                            
                            {/* LinkedIn */}
                            <a href= "https://www.linkedin.com/in/kennethleekang/" target="_blank" rel = "noopener noreferrer">
                                <i class="fa fa-linkedin" aria-hidden = "true" aria-label = "Connect me on LinkedIn"/>
                            </a>

                            {/* GitHub */}
                            <a href= "https://github.com/MrKangs" target="_blank" rel = "noopener noreferrer">
                                <i class="fa fa-github" aria-hidden = "true" aria-label = "Follow me on GitHub"/>
                            </a>                          

                        </div>

                        </div>
                    </Cell>
                </Grid>
            </div>

            



        )
    }
}

export default Landing;