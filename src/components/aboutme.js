import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
/* https://ibb.co/SsJ6VRg for the image */
class About extends Component{
    render() {
        return(
          <div className="contact-body" id = "noselect">
            <Grid className="contact-grid">
              <Cell col={6}>
                <h2>Kenneth Lee Kang </h2>
                <img
                  src="https://i.ibb.co/gj6rtz8/Ken4.jpg"
                  alt="pic of myself"
                  className = "contact-img"
                   />
                 <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>

                  Hello, I use He/Him/His pronouns, and you can also call me as Ken. 
                  I am a sophomore at the Honors College of Oregon State University, majoring Computer Science with a focus on Data Science and Business Analytics. 
                </p>

                <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                Currently, I am a project lead of Loom, a custom Arudino Library that was created in the OSU OPEnS Lab. You can find it in my Projects Tab.
                At the same time, I am doing research with Professor Cindy Grimm and Professor Bill Smart for Computer AI Vision that you can also find in my Projects Tab. 
                Last, I am part of Student Fee Commitee At Large Member for budgeting Student incidential fees for Fiscal Year 2021-2022.  
                </p>

                <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                As for hobby, I like to sing, code, and play video games in my free times. 
                I would love to learn more new programming langauges, computational concepts, and other interesting aspect of Computer Science.  
                </p>

                <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' , paddingBottom: '7em'}}>
                Please Reach me out over Email or Phone. Also Feel free to connect over LinkedIn! 
                </p>

              
              </Cell>
              <Cell col={6}>
                <h2>Contact Me</h2>
                <hr/>
    
                <div className="contact-list">
                  <List>
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px'}}>
                        <i className="fa fa-phone-square" aria-hidden="true"/>
                        +1 (541) 602-9153
                      </ListItemContent>
                    </ListItem>
    
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px'}}>
                        <a href = "mailto:gykang00@gmail.com" target = "_blank" rel = "noopener noreferrer">
                          <i className="fa fa-envelope" aria-hidden="true"/>
                          gykang00@gmail.com
                        </a>
                      </ListItemContent>
                    </ListItem>

                    <ListItem>
                      <ListItemContent style={{fontSize: '30px'}}>
                        <a href = "https://www.linkedin.com/in/kennethleekang/" target = "_blank" rel = "noopener noreferrer">
                          <i className = "fa fa-linkedin" aria-hidden= "true"/>LinkedIn</a>
                      </ListItemContent>
                    </ListItem>   
    
                  </List>
                </div>
              </Cell>
            </Grid>
          </div>
        )
      }
    }

export default About;