import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, CardTitle, CardActions, Button, Card, CardText } from 'react-mdl';


class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab: 1};
    }

    toggleCatergories(){
        /* 2021 */
        if(this.state.activeTab === 0){
            return(
                <div className = "projects-grid" id = "noselect">
                {/* Loom */}
                
                </div>
                
            );
        }
        /* 2020 */
        else if(this.state.activeTab === 1){
            return(
                <div className = "projects-grid" id = "noselect">
                {/* Loom */}
                <Card shadow = {5}>
                    <CardTitle style={{color: 'red', fontWeight: "bold", height:'200px', background:
                     'url(https://github.com/OPEnSLab-OSU/Loom/raw/gh-pages/Aux/OPEnSLogo.png) center / cover'}}>Loom</CardTitle>
                    <CardText>Open Source Arduino library for Internet of Things Rapid Prototyping in environmental sensing. Contributed adding more features and debugging the code. </CardText>
                    <CardActions>
                        <Button colored href = {"https://github.com/OPEnSLab-OSU/Loom"} target= "_blank" rel = "noopener noreferrer"> Code </Button>
                        <Button colored href = {"https://github.com/OPEnSLab-OSU/Loom/wiki"} target= "_blank" rel = "noopener noreferrer"> WiKi </Button>
                        <Button colored href = {"https://drive.google.com/file/d/1k876WlJRBGWl0NKDAPLnkQTse1KQemAA/view?usp=sharing"} target= "_blank" rel = "noopener noreferrer">Poster </Button>
                    </CardActions>
                </Card>
                {/* eGreenhouse */}
                <Card shadow = {5}>
                    <CardTitle style={{color: '#fff', height:'200px', background:
                     'url(https://user-images.githubusercontent.com/48937995/80948188-77125880-8da6-11ea-8ac6-c55f5a15278a.png) center / cover'}}>eGreenhouse</CardTitle>
                    <CardText>eGreenhouse is an Open Source, lightweight and low-cost greenhouse sensor package integrated with the OPEnS HyperRail. The sensors travel through the greenhouse and transmit a live stream of data to Google Sheets.</CardText>
                    <CardActions>
                        <Button colored href = {"https://github.com/OPEnSLab-OSU/eGreenHouse"} target= "_blank" rel = "noopener noreferrer"> Code </Button>
                        <Button colored href = {"https://github.com/OPEnSLab-OSU/OPEnS-Lab-Home/wiki/eGreenhouse"} target= "_blank" rel = "noopener noreferrer"> WiKi </Button>
                        <Button colored href = {"https://drive.google.com/file/d/1kztTJKbSF6UldNg7tOF320SdY4Tfyaxa/view?usp=sharing"} target= "_blank" rel = "noopener noreferrer"> Paper </Button>
                    </CardActions>
                </Card>
                {/* Website */}
                <Card shadow = {5}>
                    <CardTitle style={{color: '#fff', height:'200px', background:
                     'url(https://github.com/MrKangs/personal_website/blob/development/public/HomePage.PNG?raw=true) center / cover'}}>Personal Website</CardTitle>
                    <CardText>This project is the code that is written for this website that you are in.</CardText>
                    <CardActions>
                        <Button colored href = {"https://github.com/MrKangs/personal_website"} target= "_blank" rel = "noopener noreferrer"> Code </Button>
                        <Button colored href = {"https://github.com/MrKangs/personal_website/blob/master/README.md"} target= "_blank" rel = "noopener noreferrer"> WiKi </Button>
                    </CardActions>
                </Card>
                {/* URSA */}
                <Card shadow = {5}>
                    <CardTitle style={{color: '#fff', height:'200px', background:
                     'url(https://github.com/MrKangs/URSA_2020/blob/master/Picture%20color%20identify/Demo.PNG?raw=true) center / cover'}}>Computer Vision Education Software</CardTitle>
                    <CardText>This project was an education software to let the people know that computer vision is not perfect to detect objects. The code is written in Python with several python libraries with GUI.
                    </CardText>
                    <CardActions>
                        <Button colored href = {"https://github.com/MrKangs/URSA_2020"} target= "_blank" rel = "noopener noreferrer"> Code </Button>
                        <Button colored href = {"https://github.com/MrKangs/URSA_2020/wiki"} target= "_blank" rel = "noopener noreferrer"> WiKi </Button>
                    </CardActions>
                </Card>
                </div>
                
            );
            /* 2019 */
        } else if(this.state.activeTab === 2){
            return(
                <div className = "projects-grid" id = "noselect">
                {/* Score Python */}
                <Card shadow = {5}>
                    <CardTitle style={{color: 'black', height:'200px', background:
                     'url(data:image/png;base64,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) center / cover'}}>ScorePython</CardTitle>
                    <CardText>Calculator for collecting big amount of data of scores for bign exams written in Python for college useage. </CardText>
                    <CardActions>
                        <Button colored href = {"https://github.com/MrKangs/ScorePython"} target= "_blank" rel = "noopener noreferrer"> Code </Button>
                    </CardActions>
                </Card>
                {/* FRC2019: DeepSpace */}
                <Card shadow = {5}>
                    <CardTitle style={{color: 'black', height:'200px'}}>Deep Space</CardTitle>
                    <CardText>First Robotic Competition 2019 Deep Space Team 997 Spartan. I was the one for writing the code for automatic hatch displacement.</CardText>
                    <CardActions>
                        <Button colored href = {"https://github.com/Team997Coders/2019DeepSpace"} target= "_blank" rel = "noopener noreferrer"> Code </Button>
                        <Button colored href = {"https://github.com/Team997Coders/2019DeepSpace/blob/master/README.md"} target= "_blank" rel = "noopener noreferrer"> WiKi </Button>
                    </CardActions>
                </Card>
                </div>
            )
            /* Course Work */
        } else if(this.state.activeTab === 3){
            return(
                <div className = "projects-grid" id = "noselect">
                {/* Web CS 290 */}
                <Card shadow = {5}>
                    <CardTitle style={{color: 'black', height:'200px', background:
                     'url(https://www.pngfind.com/pngs/m/170-1706361_web-development-icon-web-development-logo-png-transparent.png) center / cover'}}>Web Development</CardTitle>
                    <CardText>
                        Course of Web Development in HTML, CSS, and JavaScript. This handles both front-end and back-end.</CardText>
                    <CardActions>
                        <Button colored href = {"https://github.com/MrKangs/CS290"} target= "_blank" rel = "noopener noreferrer"> Code/Notes </Button>
                    </CardActions>
                </Card>
                {/* Arc CS 271 */}
                <Card shadow = {5}>
                    <CardTitle style={{color: '#fff', height:'200px', background:
                     'url(https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/119278771/original/c0233d5b542a9f81703a3e633ca573046b989015/do-x86-and-mips-assembly-language-development.png) center / cover'}}>Assembly Language</CardTitle>
                    <CardText>
                        Assembly in MASM from course CS271 Assembly and Architecture Language.
                    </CardText>
                    <CardActions>
                        <Button colored href = {"https://github.com/MrKangs/CS271"} target= "_blank" rel = "noopener noreferrer"> Code </Button>
                    </CardActions>
                </Card>
                {/* Python CS 261 */}
                <Card shadow = {5}>
                    <CardTitle style={{color: 'black', height:'200px', background:
                     'url(data:image/png;base64,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) center / cover'}}>Data Structure</CardTitle>
                    <CardText>
                        Data Stucture notes that is written in Python. The class code is CS261 at OSU.    
                    </CardText>
                    <CardActions>
                        <Button colored href = {"https://github.com/MrKangs/CS261"} target= "_blank" rel = "noopener noreferrer"> Code/Notes </Button>
                    </CardActions>
                </Card>
                {/* C++ CS 161 ~ 162 */}
                <Card shadow = {5}>
                    <CardTitle style={{color: 'black', height:'200px', background:
                     'url(data:image/png;base64,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) center / cover'}}>Fundamental of C++</CardTitle>
                    <CardText>
                        Basic C++ Syntax coding.
                        This is all from learncpp.com (check out their webiste)
                        All of the C++ code is working progress.
                    </CardText>
                    <CardActions>
                        <Button colored href = {"https://github.com/MrKangs/C_Plus_Plus_Language_Learning"} target= "_blank" rel = "noopener noreferrer"> Code </Button>
                        <Button colored href = {"https://github.com/MrKangs/C_Plus_Plus_Language_Learning/blob/master/README.md"} target= "_blank" rel = "noopener noreferrer"> WiKi </Button>
                        <Button colored href = {"https://www.learncpp.com"} target = "_blank" rel = "noopener noreferrer"> Learn C++ </Button>
                    </CardActions>
                </Card>
                {/* Java CS 161 ~ 162 */}
                <Card shadow = {5}>
                    <CardTitle style={{color: 'black', height:'200px', background:
                     'url(https://www.itprotoday.com/sites/itprotoday.com/files/java-logo.png) center / cover'}}>Fundamental of Java</CardTitle>
                    <CardText>
                        Basic Java Syntax Coding. Inside the code, there is multiple concepts of computer science. At the same time, there is a code that will run similar as Tetris that was created for my final project in that class.
                    </CardText>
                    <CardActions>
                        <Button colored href = {"https://github.com/MrKangs/CS161-162"} target= "_blank" rel = "noopener noreferrer"> Code </Button>
                    </CardActions>
                </Card>
                {/* Python CS 160 */}
                <Card shadow = {5}>
                    <CardTitle style={{color: 'black', height:'200px', background:
                     'url(data:image/png;base64,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) center / cover'}}>Basic Computer Science Concept</CardTitle>
                    <CardText>Basic Fundamental Concept of Computer Science with Basic Python coding.
                        The Notes will be my notes when I was taking this class. At the same time, you can find the textbook that was based off from my notes.
                    </CardText>
                    <CardActions>
                        <Button colored href = {"https://drive.google.com/file/d/1J_S6UafwBZpXbkmO1-QOsAAxGLRGs4nO/view?usp=sharing"} target = "_blank" rel = "noopener noreferrer"> Textbook </Button>
                        <Button colored href = {"https://docs.google.com/document/d/1ELhtRoU8fQPNaQtrCXU67HGgajnpaLDeMUzcRvpvAyI/edit?usp=sharing"} target= "_blank" rel = "noopener noreferrer"> Notes </Button>
                    </CardActions>
                </Card>
                
                </div>
            )
        }
        
    }
    
    render(){
        return(
            <div className = "catergory-tabs" id = "noselect">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>2021</Tab>
                    <Tab>2020</Tab>
                    <Tab>2019</Tab>
                    <Tab>Course Work</Tab>
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