import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class About extends Component{
    render() {
        return(
          <div className="contact-body">
            <Grid className="contact-grid">
              <Cell col={6}>
                <h2>Kenneth Lee Kang</h2>
                <img
                  src="https://github.com/MrKangs/personal_website/blob/gh-pages/Pictures/Ken4.JPG"
                  alt="pic of myself"
                  style={{height: '250px'}}
                   />
                 <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>


                  
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
                        <i className="fa fa-envelope" aria-hidden="true"/>
                        gykang00@gmail.com
                      </ListItemContent>
                    </ListItem>

                    <ListItem>
                      <ListItemContent style={{fontSize: '30px'}}>
                        <i className="fa fa-envelope" aria-hidden="true"/>
                        kangken@oregonstate.edu
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