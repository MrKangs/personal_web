import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, CardTitle, CardActions, Button, Card, CardText } from 'react-mdl';


class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCatergories(){
        if(this.state.activeTab === 0){
            return(
                <div className = "projects-grid" id = "noselect">
                <Card shadow = {5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'teal', height:'200px', background:
                     'url(https://github.com/OPEnSLab-OSU/Loom/raw/gh-pages/Aux/OPEnSLogo.png) center / cover'}}>Loom</CardTitle>
                    <CardText>Arduino library for Internet of Things Rapid Prototyping in environmental sensing</CardText>
                    <CardActions>
                        <Button colored href = {"https://github.com/OPEnSLab-OSU/Loom"} target= "_blank" rel = "noopener noreferrer"> Code </Button>
                        <Button colored href = {"https://github.com/OPEnSLab-OSU/Loom/wiki"} target= "_blank" rel = "noopener noreferrer"> WiKi </Button>
                    </CardActions>
                </Card>
                <Card shadow = {5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height:'200px', background:
                     'url(https://user-images.githubusercontent.com/48937995/80948188-77125880-8da6-11ea-8ac6-c55f5a15278a.png) center / cover'}}>eGreenhouse</CardTitle>
                    <CardText>eGreenhouse is a lightweight and low-cost greenhouse sensor package integrated with the OPEnS HyperRail. The sensors travel through the greenhouse and transmit a live stream of data to Google Sheets.</CardText>
                    <CardActions>
                        <Button colored href = {"https://github.com/OPEnSLab-OSU/eGreenHouse"} target= "_blank" rel = "noopener noreferrer"> Code </Button>
                        <Button colored href = {"https://github.com/OPEnSLab-OSU/OPEnS-Lab-Home/wiki/eGreenhouse"} target= "_blank" rel = "noopener noreferrer"> WiKi </Button>
                    </CardActions>
                </Card>
                <Card shadow = {5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height:'200px', background:
                     'url(https://user-images.githubusercontent.com/48937995/80948188-77125880-8da6-11ea-8ac6-c55f5a15278a.png) center / cover'}}>Personal Website</CardTitle>
                    <CardText></CardText>
                    <CardActions>
                        <Button colored href = {"https://github.com/MrKangs/personal_web"} target= "_blank" rel = "noopener noreferrer"> Code </Button>
                    </CardActions>
                </Card>
                </div>
                
            );
        } else if(this.state.activeTab === 1){
            return(
                <div><h1>2019</h1></div>
            )
        } else if(this.state.activeTab === 2){
            return(
                <div><h1>2018</h1></div>
            )
        }
        
    }
    
    render(){
        return(
            <div className = "catergory-tabs" id = "noselect">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>2020</Tab>
                    <Tab>2019</Tab>
                    <Tab>2018</Tab>
                </Tabs>

                    <Grid className = "content">
                        <Cell col={12}>
                            <div>{this.toggleCatergories()}</div>
                        </Cell>
                    </Grid>
                    
            </div>

        )
    }
}

export default Projects;