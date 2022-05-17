// import logo from './logo.svg';
import './App.css';
// import num1 from './images/1.PNG';
// import num2 from './images/2.PNG';
// import num3 from './images/3.PNG';
// import flame from './images/flamegif.gif';
// import inspo from './images/inspo2.PNG';
// import insta from './images/instagramblack.PNG';
// import angle from './images/testangle.PNG';
// import skiss from './images/skiss.png';
// import filled from './images/filled.PNG';
// import penna from './images/penicon.PNG';
// import blyerts from './images/blyertsicon.PNG';
// import thick from './images/thickicon.PNG';

import angle from './portpics/angleBlack.png';
import kthlogo from "./portpics/kthlogo.png"
import penna from './images/penicon.PNG';
import blyerts from './images/blyertsicon.PNG';
import graduation from "./portpics/graduation.PNG"
import code from "./portpics/Codenew.PNG"
import kamera from "./portpics/kamera.PNG"
import lampoff from "./portpics/lampoff.PNG"
import lampon from "./portpics/lampon.PNG"
import pennaröd from "./portpics/pennaröd.PNG"
import tools from "./portpics/tools.PNG"
import unity from "./portpics/unity.PNG"
import tommaso from "./portpics/tommaso.JPG"
import gb from "./portpics/gb.PNG"
import sweden from "./portpics/sweden.PNG"
import italy from "./portpics/italy.PNG"
import nft from "./portpics/nftcoin.PNG"
import scraper from "./portpics/scyscraper.png"
import paper from "./portpics/paper.PNG"
import js from "./portpics/JS.PNG"
import python from "./portpics/python.PNG"
import java from "./portpics/Java.PNG"
import html from "./portpics/HTML.PNG"
import c from "./portpics/C++.PNG"
import cubes from "./portpics/cubes.PNG"
import bow from "./portpics/bow.PNG"
import team from "./portpics/team.PNG"
import time from "./portpics/time.PNG"
import info from "./portpics/info.PNG"
import anglegreen from "./portpics/anglegreen.PNG"
import anglegreencircle from "./portpics/anglegreenB.PNG"
import anglelined from "./portpics/anglelined.PNG"
import angleblue from "./portpics/angleblue.PNG"
import ambition from "./portpics/ambition.PNG"
import phone from "./portpics/Phone.PNG"
import mail from "./portpics/mai.PNG"
import mailB from "./portpics/mailB.PNG"
import linked from "./portpics/linked.PNG"
import linkedwhite from "./portpics/linkedin.PNG"
import onlylinked from "./portpics/onlylinked.PNG"
import onlyphone from "./portpics/onlyphone.PNG"
import onlymail from "./portpics/onlymail.PNG"

import reactDOM from "react-dom";
import React, { useLayoutEffect, useState, useEffect, useRef, } from 'react';
import styled from 'styled-components';
import { Checkbox, Radio, Switch } from 'pretty-checkbox-react';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';

const Main = styled("div")`
  font-family: sans-serif;
  height: 8vh;
  margin-top:-10%;
`;

const LETSGO = styled("div")`
display:flex;
flex-directio: column;
align-items: center;
justify-content: center;
width: 1000px;
margin-top:-20vw;
margin:auto;
color: white;
background-color: black;
border-radius: 50px;
z-index:100;
font-family: 'Montserrat', sans-serif;
font-size: 3rem;
font-style: italic;
transition: transform 200ms ease-in;
&:hover {
  transform: scale(1.2);
}
`
;

const DropDownContainer = styled("div")`
display: flex;
flex-direction: column;
align-items: center;
`;

const DropDownHeader = styled("div")`
z-index:10;
margin-top: 7vw;
transition: transform 200ms ease-in;
&:hover {
  transform: scale(1.2);
}
`;

const DropDownListContainer = styled("div")`
display:flex;
flex-directio: column;
`
;

const DropDownList = styled("ul")`
  margin-top: 10vw;
`;

const ListItem = styled("li")`
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  list-style: none;
  font-family: 'Roboto', sans-serif;
  font-weight: bolder;
  color: black;
`;

// const SlideRight = styled("div")`
//   position: absolute;
//    margin-top:45vw;
//    animation: slideright 1s;
//    animation-delay: 0s;
//    animation-fill-mode: both;
// `;

// const SlideLeft = styled("div")`
//    position: absolute;
//    margin-top:-10vw;
//    margin-bottom:10vw;
//    animation: slideleft 2s;
//    animation-delay: 0s;
//    animation-fill-mode: both;
//    font-family: 'Montserrat', sans-serif;
//    font-size: 1rem;
//    font-style: italic;
// `;


function App() {

  var set_height;

  var widthscreen = window.innerWidth;

  var skillleft = 0;

  const [seconds, setSeconds] = React.useState(5);
  const [light, setLight] = useState(false);



  const [kthOpen, setKthOpen] = useState(false);
  const togglingKTH = () => {setKthOpen(!kthOpen);console.log(chosen1);if(skillsOpen){setSkillsOpen(!skillsOpen)}; if(webOpen){setWebOpen(!webOpen)}};

  const [chosen1, setChosen1] = useState(false);
  const togglingChosen1 = () => {setChosen1(!chosen1);setOptionChosen(!optionChosen);console.log("1")};

  const [chosen2, setChosen2] = useState(false);
  const togglingChosen2 = () => {setChosen2(!chosen2);setOptionChosen(!optionChosen);console.log("2")};

  const [chosen3, setChosen3] = useState(false);
  const togglingChosen3 = () => {setChosen3(!chosen3);setOptionChosen(!optionChosen);console.log("3")};

  const [chosen4, setChosen4] = useState(false);
  const togglingChosen4 = () => {setChosen4(!chosen4);setOptionChosen(!optionChosen);console.log("4")};

  const [chosen5, setChosen5] = useState(false);
  const togglingChosen5 = () => {setChosen5(!chosen5);setOptionChosen(!optionChosen);console.log("5")};

  const [optionOpen, setOptionOpen] = useState(false);
  const togglingOption = () => {setOptionOpen(!optionOpen)};

  const [optionChosen, setOptionChosen] = useState(false);
  const togglingChosenOption = () => {setOptionChosen(!optionChosen)};
  
  const [skillsOpen, setSkillsOpen] = useState(false);
  const togglingSkills = () => {if(!light){setTimeout(() => setLight(true), 500);}; if(light){setLight(false)};setSkillsOpen(!skillsOpen); if(kthOpen){setKthOpen(!kthOpen)}; if(webOpen){setWebOpen(!webOpen)}};

  const [webOpen, setWebOpen] = useState(false);
  const togglingWeb = () => {setWebOpen(!webOpen); if(kthOpen){setKthOpen(!kthOpen)}; if(skillsOpen){setSkillsOpen(!skillsOpen)}};

  const [aboutOpen, setAboutOpen] = useState(false);
  const togglingAbout = () => {setAboutOpen(!aboutOpen);if(workOpen){setWorkOpen(!workOpen)}};

  const [workOpen, setWorkOpen] = useState(false);
  const togglingWork = () => {setWorkOpen(!workOpen); if(aboutOpen){setAboutOpen(!aboutOpen)}};

  const [position, setPosition] = useState('70')

function moveCircle() {
    const speed = 13.3;
    const scrolltop = window.pageYOffset/3
    const scrollAndSpeed = scrolltop / speed
    setPosition(0.02/window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener(
      'scroll',
      function () {
        requestAnimationFrame(moveCircle)
      },
      false
    )
  }, [])

  return (
    <div className="App">
      <div class="header">
      <a href="https://www.linkedin.com/in/tommaso-piehl-66b0b11b2/" target="_blank" style={{margin:"auto"}}>
        <img src={linkedwhite} id="headlink"/>
      </a>
      </div>
      <div class="top">
      <div class="title">
      <h1>TOMMASO PIEHL <br/> PROJECT PORTFOLIO</h1>
      </div>
      </div>
      <div class="row1">
      <div class="right1">
      <div class="right" style={kthOpen ? {
      zIndex: "2000",
      width: "225%",
      alignItems: "left"}:{}}>
      <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <div style={widthscreen > 600 ? {display:"flex", flexDirection:"row", alignItems:"center"}:{display:"block", width:"100%"}}>
      <h2>MEDIA TECHNOLOGY BACHELOR</h2>
      <h1>/KTH</h1>
      <a onClick={togglingKTH} target="_blank" style={kthOpen ? {transition: "left 200ms ease-in",position:"absolute", top:widthscreen > 600 ?{}:"45%", left:widthscreen > 600 ?"80%":"83%", zIndex:"200"}:
      {position:"absolute", top:widthscreen > 600 ?{}:"45%",  left:widthscreen > 600 ? "40%":"41%", zIndex:"200"}}>
      
      { !kthOpen &&
      <img src={anglegreen} id="angle" style={kthOpen ? {transform:"rotate(-90deg)"}:{transform:"rotate(90deg)"}}/>
      }

      { kthOpen &&
      <img src={anglelined} id="angle" style={kthOpen ? {transform:"rotate(-90deg)"}:{transform:"rotate(90deg)"}}/>
      }
      
      </a>
      </div>
      {widthscreen < 600 ?
      (!chosen5 &&
      <h3 style={
      kthOpen ?{
      transition: "left 300ms ease-in", 
      position: 'absolute',  
      paddingTop: widthscreen > 600 ?"11%":"35%", 
      left:widthscreen > 600 ?"6.65%":"5%"}
      :{display:"flex", 
      flexDirection:"column", transition: "left 200ms ease-in", paddingTop:"11%", paddingTop:"11%", left:"-100%"}}>MASTERS DEGREE IN MACHINE LEARNING <br/>  AUTUMN 2022
      </h3>):
      <h3 
      style={
      kthOpen ?{
      transition: "left 300ms ease-in", 
      position: 'absolute',  
      paddingTop: widthscreen > 600 ?"11%":"35%", 
      left:widthscreen > 600 ?"6.65%":"5%"}
      :{display:"flex", 
      flexDirection:"column", transition: "left 200ms ease-in", paddingTop:"11%", paddingTop:"11%", left:"-100%"}}>MASTERS DEGREE IN MACHINE LEARNING <br/>  AUTUMN 2022
      </h3>}
      </div>

      {kthOpen &&
      <div style ={chosen5 ? {display:"flex", flexDirection:"column", alignItems:"center", transition: "left 300ms ease-in", transform:optionChosen ? chosen5 ? "scale(1)":"scale(0)":"scale(1)", position: 'absolute', left:widthscreen > 600 ?"46%":"43%"}:{display:"flex", flexDirection:"column", alignItems:"center", transition: "left 200ms ease-in", position: 'absolute', left:"-140%"}}>
      <a href="https://docs.google.com/document/d/1d9dX2icyc2nTpmFK6osVO0UUqNp4wz9kosvDGIOWg0I/edit?usp=sharing" target="_blank">
        <img src={paper} id="unityproject" />
      </a>
      <h3 style={widthscreen > 600 ?{zIndex:"300", marginTop:"-30%", textAlign:"center"}:{zIndex:"300",marginTop:"22vw", textAlign:"center"}}>
      Full paper</h3>
      </div>}

      {kthOpen &&
      <div style ={chosen4 ? {display:"flex", flexDirection:"column", alignItems:"center", transition: "left 300ms ease-in", transform:optionChosen ? chosen4 ? "scale(1)":"scale(0)":"scale(1)", position: 'absolute', left:widthscreen > 600 ?"50%":"35%"}:{display:"flex", flexDirection:"column", alignItems:"center", transition: "left 200ms ease-in", position: 'absolute', left:"-140%"}}>
      <a>
      <img src={js} id="code"/>
      </a>
      <h3 style={widthscreen > 600 ?{marginTop:"-10%", textAlign:"center"}:{marginTop:"22vw", textAlign:"center"}}>
      JavaScript
      </h3>
      </div>}

      {kthOpen &&
      <div style ={chosen4 ? {display:"flex", flexDirection:"column", alignItems:"center", transition: "left 300ms ease-in", transform:optionChosen ? chosen4 ? "scale(1)":"scale(0)":"scale(1)", position: 'absolute', left:widthscreen > 600 ?"63%":"50%"}:{display:"flex", flexDirection:"column", alignItems:"center", transition: "left 200ms ease-in", position: 'absolute', left:"-140%"}}>
      <a>
      <img src={c} id="code"/>
      </a>
      <h3 style={widthscreen > 600 ?{marginTop:"-10%", textAlign:"center"}:{marginTop:"22vw", textAlign:"center"}}>
      C++
      </h3>
      </div>}
      
      {kthOpen &&
      <div style ={chosen3 ? {width:"20%", display:"flex", flexDirection:"column", alignItems:"center", transition: "transform 300ms ease-in", transform:optionChosen ? chosen3 ? "scale(1)":"scale(0)":"scale(1)", position: 'absolute', left:widthscreen > 600 ?"70%":"63%", paddingBottom:widthscreen > 600 ?"10vw":"15vw"}:{display:"flex", flexDirection:"column", alignItems:"center", transition: "transform 200ms ease-in", position: 'absolute', left:"-140%"}}>
      <p style={widthscreen > 600 ?{textAlign:"center"}:{textAlign:"center"}}>
        These are some of the skills which I have imporved the most during my time at KTH.
      </p>
      </div>}

      {kthOpen &&
      <div style ={chosen3 ? {display:"flex", flexDirection:"column", alignItems:"center", transition: "left 300ms ease-in", transform:optionChosen ? chosen3 ? "scale(1)":"scale(0)":"scale(1)", position: 'absolute', left:widthscreen > 600 ?"50%":"40%"}:{display:"flex", flexDirection:"column", alignItems:"center", transition: "left 200ms ease-in", position: 'absolute', left:"-140%"}}>
      <a>
      <img src={info} id="skills"/>
      </a>
      <h3 style={widthscreen > 600 ?{marginTop:"-15%", textAlign:"center"}:{marginTop:"22vw", textAlign:"center"}}>
      Finding Useful <br/> Information.
      </h3>
      </div>}

      {kthOpen &&
      <div style ={chosen1 ? {width:widthscreen > 600 ?"20%":"30%", display:"flex", flexDirection:"column", alignItems:"center", transition: "transform 300ms ease-in", transform:optionChosen ? chosen1 ? "scale(1)":"scale(0)":"scale(1)", position: 'absolute', left:widthscreen > 600 ?"70%":"65%", paddingBottom:"10vw"}:{display:"flex", flexDirection:"column", alignItems:"center", transition: "transform 200ms ease-in", position: 'absolute', left:"-140%"}}>
      {widthscreen > 600 &&
      <p style={widthscreen > 600 ?{textAlign:"center"}:{ textAlign:"center"}}>
        These are some projects in which we have made simulations of physics i the 3D-engine Unity.
        Click on them to have a look at the blogs we made for our prgoress, Enjoy!
      </p>}
      </div>}

      <div style ={kthOpen ? {display:"flex", flexDirection:"column", transition: "left 700ms ease-in", transform:optionChosen ? chosen1 ? "scale(1)":"scale(0)":"scale(1)", position: 'absolute', left:chosen1? "50%":"50%", zIndex:"5", alignItems:"center"}:{display:"flex", flexDirection:"column", transform:"scale(0)", position: 'absolute', left:"-100%",zIndex:"2"}}>
      <a onMouseEnter={togglingOption} onMouseLeave={togglingOption} onClick={togglingChosen1} target="_blank">
      <img src={unity} id="testslide"/>
      </a>
      <h3 style={widthscreen > 600 ?{marginTop:"-10%", textAlign:"center"}:{marginTop:"22vw", textAlign:"center"}}>
      Unity Projects
      </h3>
      </div>
      </div>
      <img 
        src={graduation} 
        id="test" 
        style={
          kthOpen ? {
            transition: "right 100ms ease-in", 
            position:"absolute", 
            right: widthscreen > 600 ? "2.5%":"-3%",
            paddingTop: widthscreen > 600 ? {}:"5vw"
          }:
          {transition: "right 100ms ease-in",
          position:"absolute", 
          right:"40%",
          paddingTop: widthscreen > 600 ? {}:"5vw"
          }}/>
      <div class="slidesright" style={widthscreen > 600 ? {zIndex:"150", paddingTop:"5vw"}:{zIndex:"150", paddingTop:"12vw"}}>
      <div style ={kthOpen ? { display:"flex", flexDirection:"column", transition: "left 300ms ease-in", transform:optionChosen ? chosen5 ? "scale(1)":"scale(0)":"scale(1)", position: 'absolute', left:"50%", alignItems:"center"}:{display:"flex", flexDirection:"column", transition: "left 200ms ease-in", position: 'absolute', left:"-100%"}}>
      <a onMouseEnter={togglingOption} onMouseLeave={togglingOption} onClick={togglingChosen5} target="_blank">
        <img src={kamera} id="testslide"/></a>
      <h3 style={widthscreen > 600 ?{marginTop:"-10%", textAlign:"center"}:{marginTop:"22vw", textAlign:"center"}}>Bachelor's Thesis</h3>
      </div>
      <div style ={kthOpen ? {display:"flex", flexDirection:"column", alignItems:"center", transition: "left 500ms ease-in", transform:optionChosen ? chosen4 ? "scale(1)":"scale(0)":"scale(1)", position: 'absolute', left:chosen4? "50%":"30%"}:{display:"flex", flexDirection:"column", transition: "left 200ms ease-in", position: 'absolute', left:"-120%"}}>
      <a onMouseEnter={togglingOption} onMouseLeave={togglingOption} onClick={togglingChosen4} target="_blank">
        <img src={code} id="testslide" /></a>
      <h3 style={widthscreen > 600 ?{marginTop:"-10%", maxWidth:"50%", textAlign:"center"}:{maxWidth:"50%", marginTop:"22vw", textAlign:"center"}}>Programming Languages</h3>
      </div>
      <div style ={kthOpen ? {display:"flex", flexDirection:"column", alignItems:"center", transition: "left 700ms ease-in", transform:optionChosen ? chosen3 ? "scale(1)":"scale(0)":"scale(1)", position: 'absolute', left:chosen3 ? "50%":"10%"}:{display:"flex", flexDirection:"column", alignItems:"center", transition: "left 200ms ease-in", position: 'absolute', left:"-140%"}}>
      <a onMouseEnter={togglingOption} onMouseLeave={togglingOption} onClick={togglingChosen3} target="_blank">
        <img src={tools} id="testslide" /></a>
      <h3 style={widthscreen > 600 ?{marginTop:"-10%", textAlign:"center"}:{marginTop:"22vw", textAlign:"center"}}>General Skills</h3>
      </div>

      {kthOpen &&
      <div style ={chosen3 ? {display:"flex", flexDirection:"column", alignItems:"center", transition: "left 300ms ease-in", transform:optionChosen ? chosen3 ? "scale(1)":"scale(0)":"scale(1)", position: 'absolute', left:"30%"}:{display:"flex", flexDirection:"column", alignItems:"center", transition: "left 200ms ease-in", position: 'absolute', left:"-140%"}}>
      <a  target="_blank">
        <img src={team} id="skills" />
      </a>
      <h3 style={widthscreen > 600 ?{marginTop:"-10%", textAlign:"center"}:{marginTop:"22vw", textAlign:"center"}}>
      Team Work</h3>
      </div>}

      {kthOpen &&
      <div style ={chosen3 ? {display:"flex", flexDirection:"column", alignItems:"center", transition: "left 300ms ease-in", transform:optionChosen ? chosen3 ? "scale(1)":"scale(0)":"scale(1)", position: 'absolute', left:"10%"}:{display:"flex", flexDirection:"column", alignItems:"center", transition: "left 200ms ease-in", position: 'absolute', left:"-140%"}}>
      <a target="_blank">
        <img src={time} id="skills" />
      </a>
      <h3 style={widthscreen > 600 ?{marginTop:"-10%", textAlign:"center"}:{marginTop:"22vw", textAlign:"center"}}>
      Time Management</h3>
      </div>}

      {kthOpen &&
      <div style ={chosen4 ? {display:"flex", flexDirection:"column", alignItems:"center", transition: "left 300ms ease-in", transform:optionChosen ? chosen4 ? "scale(1)":"scale(0)":"scale(1)", position: 'absolute', left:"30%"}:{display:"flex", flexDirection:"column", alignItems:"center", transition: "left 200ms ease-in", position: 'absolute', left:"-140%"}}>
      <a target="_blank">
        <img src={html} id="code" />
      </a>
      <h3 style={widthscreen > 600 ?{marginTop:"-10%", textAlign:"center"}:{marginTop:"22vw", textAlign:"center"}}>
      HTML</h3>
      </div>}

      {kthOpen &&
      <div style ={chosen4 ? {display:"flex", flexDirection:"column", alignItems:"center", transition: "left 300ms ease-in", transform:optionChosen ? chosen4 ? "scale(1)":"scale(0)":"scale(1)", position: 'absolute', left:widthscreen > 600 ?"17%":"15%"}:{display:"flex", flexDirection:"column", alignItems:"center", transition: "left 200ms ease-in", position: 'absolute', left:"-140%"}}>
      <a target="_blank">
        <img src={java} id="code" />
      </a>
      <h3 style={widthscreen > 600 ?{marginTop:"-10%", textAlign:"center"}:{marginTop:"22vw", textAlign:"center"}}>
      Java</h3>
      </div>}


      {kthOpen &&
      <div style ={chosen4 ? {display:"flex", flexDirection:"column", alignItems:"center", transition: "left 300ms ease-in", transform:optionChosen ? chosen4 ? "scale(1)":"scale(0)":"scale(1)", position: 'absolute', left:widthscreen > 600 ?"4%":"0%"}:{display:"flex", flexDirection:"column", alignItems:"center", transition: "left 200ms ease-in", position: 'absolute', left:"-140%"}}>
      <a target="_blank">
        <img src={python} id="code" />
      </a>
      <h3 style={widthscreen > 600 ?{marginTop:"-10%", textAlign:"center"}:{marginTop:"22vw", textAlign:"center"}}>
      Python</h3>
      </div>}

      {kthOpen &&
      <div style ={chosen1 ? {display:"flex", flexDirection:"column", alignItems:"center", transition: "left 300ms ease-in", transform:optionChosen ? chosen1 ? "scale(1)":"scale(0)":"scale(1)", position: 'absolute', left:"10%"}:{display:"flex", flexDirection:"column", alignItems:"center", transition: "left 200ms ease-in", position: 'absolute', left:"-140%"}}>
      <a href="https://modsim2022cds.wordpress.com/" target="_blank">
        <img src={cubes} id="unityproject" />
      </a>
      <h3 style={widthscreen > 600 ?{zIndex:"300",marginTop:"-30%", textAlign:"center"}:{zIndex:"300", marginTop:"25vw", textAlign:"center"}}>
        Collision Detection</h3>
      </div>}


      {kthOpen &&
      <div style ={chosen1 ? {display:"flex", flexDirection:"column", alignItems:"center", transition: "left 300ms ease-in", transform:optionChosen ? chosen1 ? "scale(1)":"scale(0)":"scale(1)", position: 'absolute', left:"40%"}:{display:"flex", flexDirection:"column", alignItems:"center", transition: "left 200ms ease-in", position: 'absolute', left:"-140%"}}>
      <a href="https://bowprojectdh2323813886224.wordpress.com/" target="_blank">
        <img src={bow} id="unityproject" />
      </a>
      <h3 style={widthscreen > 600 ?{zIndex:"300", color:"black", marginTop:"-30%", textAlign:"center"}:{zIndex:"300", color:"black", marginTop:"25vw", textAlign:"center"}}>
        Bow & Arrow</h3>
      </div>}

      {kthOpen &&
      <div style ={chosen5 ? {display:"flex", width:"40%", flexDirection:"column", alignItems:"center", transition: "left 300ms ease-in", transform:optionChosen ? chosen5 ? "scale(1)":"scale(0)":"scale(1)", position: 'absolute', left:widthscreen > 600 ?"5%":"5%", textAlign:"center"}:{display:"flex", flexDirection:"column", alignItems:"center", transition: "left 200ms ease-in", position: 'absolute', left:"-140%"}}>
      <p style={widthscreen > 600 ?{ textAlign:"center"}:{ textAlign:"center"}}>
        My bachelor's thesis is based the prevention of drug-trafficking
        by implementing facial recognition in public surveillance. The study is based on interviews with police officers and machine learing students
        in order to find out if there are any differences between the standpoints of these two gruops. 
        The choice of participants is based on the opinions of the users and developers of the technology regarding
        practical and ethical aspects. The full report is avaliable in the link in the top right 
        corner, Enjoy!
      </p>
      </div>}

      </div>
      </div>
      </div>

      <div class="left1">
      <div class="left1up" onClick={togglingWeb} style={webOpen ? {zIndex:"10", height: "400%"}:{}}>
      <a onClick={togglingWeb} target="_blank" style={webOpen ? {transition: "top 100ms ease-in", position:"absolute", top:widthscreen > 600 ?"131%":"65%", left:widthscreen > 600 ?"67%":"68%", zIndex:"200"}:
      {position:"absolute", top:widthscreen > 600 ?"102%":"54%",  left:widthscreen > 600 ? "67%":"68%", zIndex:"200"}}>
      <img src={angleblue} id="angle" style={webOpen ? {transform:"rotate(0deg)"}:{transform:"rotate(180deg)"}}/></a>
      
      <h2>MY WEBSITES</h2>
      {webOpen &&
      <div class="slideswork" style={{zIndex:"150", display:"flex", flexDirection:"column"}}>
      <p style={{paddingRight:"2vw"}}>
      This project portfolio is completely developed and designed by me in react. Click the links below to visit my other sites.
       In addition to the design of my sites I have also designed most of the art myself, enjoy!</p>
      <div style={webOpen ? {alignItems:"center",display:"flex", flexDirection:"row", marginTop:widthscreen > 600 ?"-15%":"-20%", transition: "transform 300ms ease-in", position: 'relative',transform:"scale(1)", zIndex:"300"}:{transition: "right 700ms ease-in", position: 'relative',transform:"scale(0)", zIndex:"-100", right:"10%"}}>
      <img src={pennaröd} id="flag" style={{transform:widthscreen > 600 ? "scale(1)":"scale(0.8)"}}/>
      <a href="https://tommasosportfolio.netlify.app/" target="_blank" style={{width:"50%", paddingRight:"2vw", transform:widthscreen > 600 ? "scale(1)":"scale(0.8)"}}><h3>Art Portfolio</h3></a>
      </div>
      <div style={webOpen ? {alignItems:"center",display:"flex", flexDirection:"row", marginTop:widthscreen > 600 ? "-15%":"-30%", transition: "transform 300ms ease-in", position: 'relative',transform:"scale(1)", zIndex:"300"}:{transition: "right 700ms ease-in", position: 'relative',transform:"scale(0)", zIndex:"-100", right:"10%"}}>
      <img src={nft} id="flag" style={{paddingRight:"1vw", transform:widthscreen > 600 ? "scale(1)":"scale(0.8)"}}/>
      <a href="https://lazylabels.io/" target="_blank" style={{width:"50%", paddingRight:"2vw", transform:widthscreen > 600 ? "scale(1)":"scale(0.8)"}}><h3>NFT Project</h3></a>
      </div>    
      </div>}
      </div>

      <div class="left1down" onClick={togglingSkills} style={skillsOpen ? {zIndex:"10", height: "500%"}:{}}>
      <a onClick={togglingSkills} target="_blank" style={skillsOpen ? {transition: "top 100ms ease-in", position:"absolute", top:widthscreen > 600 ?"96%":"51%", left:widthscreen > 600 ?"82%":"82%", zIndex:"200"}:
      {position:"absolute", top:widthscreen > 600 ?"122%":"62%",  left:widthscreen > 600 ? "82%":"82%", zIndex:"200"}}>
      <img src={angle} id="angle" style={skillsOpen ? {transform:"rotate(-180deg)"}:{transform:"rotate(0deg)"}}/></a>
     
      <h2>PERSONAL SKILLS</h2>
      {skillsOpen &&
      <div class="slidesskils" style={{zIndex:"150", display:"flex", flexDirection:"column"}}>
      <div style={{paddingBottom:"20%", paddingTop:"-5%"}}>
      <div style ={skillsOpen ? {textAlign:"left", padding:"5px", display:"flex", flexDirection:"column", alignItems:"center", transition: "transform 300ms ease-in", position: 'absolute', right:widthscreen > 600 ? "21%":"11%", transform:"scale(1)", zIndex:"300"}:{padding:"2%", transition: "transform 50ms ease-in", position: 'absolute', transform:"scale(0)", zIndex:"-100", right:"5%",}}>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <h3 style={{zIndex:"1000"}}>Fluent</h3>
      <p style={{zIndex:"1000", marginTop:"-8%"}}>SPEECH/WRITING</p>
      </div>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"-20%"}}>
      <img src={sweden} id="flag"/>
      <div style={{display:"flex", flexDirection:"row", marginTop:"-30%"}}>
      <img src={gb} id="flag" style={{marginRight:"-45%"}}/>
      <img src={italy} id="flag"/>
      </div>
      </div>
      </div>
      <div style ={skillsOpen ? {display:"flex", flexDirection:"column", alignItems:"center", transition: "transform 300ms ease-in", position: 'absolute', right:widthscreen > 600 ? "5%":"1%",  transform:"scale(1)", zIndex:"300"}:{transition: "transform 50ms ease-in", position: 'absolute', transform:"scale(0)", zIndex:"-100", right:"5%",}}>
      <img src={pennaröd} id="testslideskill"/>
      <h3 style={{marginTop:"-35%", zIndex:"1000"}}>Creative</h3>
      </div>
      </div>
      <div style={
      widthscreen > 600 ? 
      {paddingTop:"5vw"}:
      {paddingTop:"12vw"}}>
      {!light &&
      <div style ={
      skillsOpen ? {
      display:"flex", 
      flexDirection:"column", 
      alignItems:"center", 
      transition: "transform 300ms ease-in", 
      position: 'absolute', 
      right:widthscreen > 600 ? "25%":"20%", 
      transform:"scale(1)", 
      zIndex:"300"}:{transition: "transform 50ms ease-in", position: 'absolute', transform:"scale(0)", zIndex:"-100", right:"25%",}}>
      <img src={lampoff} id="testslideskill"/>
      </div>}
      {light &&
      <div style ={
        skillsOpen ? {
        display:"flex", 
        flexDirection:"column", 
        alignItems:"center", 
        transition: "transform 300ms ease-in", 
        position: 'absolute', 
        right:widthscreen > 600 ? "25%":"20%", 
        transform:"scale(1)", 
        zIndex:"300"}:{transition: "transform 50ms ease-in", position: 'absolute', transform:"scale(0)", zIndex:"-100", right:"25%",}}>
      <img src={lampon} id="testslideskill"/>
      <h3 style={{marginTop:"-35%", zIndex:"1000", color:"rgb(255, 196, 70)"}}>Quick Learner</h3>
      </div>}
      
      <div style ={
        skillsOpen ? {
        display:"flex", 
        flexDirection:"column", 
        alignItems:"center", 
        transition: "transform 300ms ease-in", 
        position: 'absolute', 
        right:widthscreen > 600 ? "5%":"1%",  
        transform:"scale(1)", 
        zIndex:"300", 
        zIndex:"10"}:{transition: "transform 50ms ease-in", position: 'absolute', transform:"scale(0)", zIndex:"-100", right:"5%",}}>
      <img src={ambition} id="testslideskill"/>
      <h3 style={{marginTop:"-35%", zIndex:"1000"}}>Ambitious</h3>
      </div>
      </div>
      </div>}

      </div>
      </div>
      </div>
      <div class="row2">
      <div class="right2" style={{zIndex:"200"}}>
      <div 
      class="right2content" 
      style={aboutOpen ? {transition:"left 1000ms ease-in", position:"absolute", left:"36%", width: "26.8%"}:{transition:"left 1000ms ease-in"}}
      ref={el => {
        if (!el) return;
        set_height = el.getBoundingClientRect().height// prints 200px
      }}>
        <a onClick={togglingAbout} target="_blank" style={aboutOpen ? {position:"absolute", top:widthscreen > 600 ?"35%":"36%", left:widthscreen > 600 ?"-21%":"-20%", zIndex:"3000"}:
        {position:"absolute", top:widthscreen > 600 ?"205%":"95%",  left:widthscreen > 600 ? "21%":"21%", zIndex:"200"}}>
      <img src={angle} id="angle" style={aboutOpen ? {transform:"rotate(-90deg)"}:{transform:"rotate(90deg)"}}/></a>
      <img src={tommaso} id="tommaso" style={{opacity:"0"}}/>
      <h2 style={{position:"absolute"}}>ABOUT</h2>
      </div>
      </div>

      <div class="contact" style={{zIndex:"1"}}>
      
      <div class="contactcontent" style={aboutOpen ?{transition:"width 300ms ease-in", width:"0%"}:
      {display:"flex", flexDirection:"column"}}>
      <h2>CONTACT <br/> INFORMATION</h2>
      
      <div style={aboutOpen ? {transform:"scale(0)"}:
      {transform:workOpen ? "scale(0)":"scale(1)", position:"absolute", left:"28vw", display:"flex", flexDirection:"row", alignItems:"center"}}>
      <img src={onlymail} id="testcontact"/>
      <h3 style={{marginLeft:"-3vw"}}>Tommaso.f.piehl <br/> @gmail.com</h3>
      </div>
      
      <div style={aboutOpen ? {transform:"scale(0)"}:{transform:workOpen ? "scale(0)":"scale(1)" ,position:"absolute", left:"28vw", display:"flex", flexDirection:"row", alignItems:"center", paddingTop:widthscreen > 600 ?"10vw":"15vw"}}>
      <img src={onlyphone} id="testcontact"/>
      <h3 style={{marginLeft:"-3vw"}}>+46 73 571 58 12</h3>
      </div>

      <div style={aboutOpen ? {backgroundColor:"white",transform:"scale(0)"}:
      {transform:workOpen ? "scale(0)":"scale(1)", position:"absolute", left:"27vw", display:"flex", flexDirection:"row", alignItems:"center", paddingTop:widthscreen > 600 ?"20vw":"30vw"}}>
      <a href="https://www.linkedin.com/in/tommaso-piehl-66b0b11b2/" target="_blank">
        <img src={onlylinked} id="testcontactlinked"/>
      </a>
      <h3 style={{marginLeft:"-3vw"}}>@TommasoPiehl</h3>
      </div>

      <img src={tommaso} id="tommaso" style={{opacity:"0"}}/>
      </div>
      </div>
      <div class="abouttext" style={aboutOpen ? {position:"absolute", margin:"auto", left:"0%"}:{position:"absolute", left:"32%"}}>
      <div style={aboutOpen ? {display:"flex", flexDirection:"column",opacity:"100", alignItems:"left"}:{opacity:"0"}}>
      <div style={{display:"flex", flexDirection:"column", gap:"3%"}}>
      <h2>Age:</h2>
      <h3>21</h3>
      </div>
      <div style={{display:"flex", flexDirection:"column", gap:"3%"}}>
      <h2>Origin:</h2>
      <h3>Stockholm,Sweden</h3>
      </div>
      <div style={{display:"flex", flexDirection:"column", gap:"3%"}}>
      <h2>Interests:</h2>
      <h3>Art, Programming, Travelling, Music, Football.</h3>
      </div>
      <div style={{display:"flex", flexDirection:"column", gap:"3%"}}>
      <h2>Strengths:</h2>
      <h3>Creative, Driven, Social & Curious.</h3>
      </div>
      </div>
      <img src={tommaso} id="tommaso" style={{opacity:"0"}}/>
      </div>
      <div class="left2" style={{zIndex:"200"}}>
      
      <div 
      class="left2content" 
      onClick={togglingWork}
      style={workOpen ? {
        transition:"width 1000ms ease-in",
        zIndex: "2000",
        width: "59%",
        position:"absolute",
        left:"36%",
        alignItems: "left",
        }:{}}>
      <a onClick={togglingWork} target="_blank" style={workOpen ? {transition: "right 100ms ease-in", position:"absolute", top:widthscreen > 600 ?"35%":"36%", right:widthscreen > 600 ?"-12%":"-11%", zIndex:"3000"}:
      {position:"absolute", top:widthscreen > 600 ?"205%":"95%",  right:widthscreen > 600 ? "23%":"23%", zIndex:"200"}}>
      <img src={anglegreencircle} id="angle" style={workOpen ? {transform:"rotate(90deg)"}:{transform:"rotate(-90deg)"}}/></a>
      
      <h2>WORK EXPERIENCE</h2>
      <div style ={workOpen ? {transition: "transform 100ms ease-in", position: 'absolute', right:widthscreen > 600 ?"70%":"50%", transform:"scale(1)", paddingTop:widthscreen > 600 ?"5vw":"7vw"}:{ transition: "scale 200ms ease-in", position: 'absolute', right:widthscreen > 600 ?"75%":"50%", transform:"scale(0)", paddingTop:"5vw"}}>
      <h3>Karolinska Institutet, 2016-</h3>
      <p style={{marginTop:"-0.5vw"}}>Each summer im in charge of administrative tasks at Karolinska. This usually involves
        compiling research data in Excel.
      </p>
      </div>
      <div style ={workOpen ? {transition: "transform 100ms ease-in", position: 'absolute', right:widthscreen > 600 ?"70%":"50%", transform:"scale(1)", paddingTop:widthscreen > 600 ?"15vw":"20vw"}:{ transition: "scale 200ms ease-in", position: 'absolute', right:widthscreen > 600 ?"75%":"50%", transform:"scale(0)", paddingTop:"5vw"}}>
      <h3>Nortulls SK, 2016-2018</h3>
      <p style={{marginTop:"-0.5vw"}}>I was the head coach for a football team of 8-year old boys. This means arranging practices and games twice a week, 
        great exerice for my leadership and organizing skills.
      </p>
      </div>
      <div style ={workOpen ? {transition: "transform 100ms ease-in", position: 'absolute', right:widthscreen > 600 ?"70%":"50%", transform:"scale(1)", paddingTop:widthscreen > 600 ?"27vw":"35vw"}:{ transition: "scale 200ms ease-in", position: 'absolute', right:widthscreen > 600 ?"75%":"50%", transform:"scale(0)", paddingTop:"5vw"}}>
      <h3>Digital artist, 2016-</h3>
      <p style={{marginTop:"-0.5vw"}}>I have for the last couple of years been selling my art. Initially as cover-art for musicians and 
        lately as logos and art for merchendise. Great practice regarding communication and marketing. 
      </p>
      </div>
      <img src={tommaso} id="tommaso" style={{opacity:"0"}}/>
      </div>
      </div>
      </div>
      <div class="row3">
      <h2>For any further questions please feel free to contact me!</h2>
      <a href="https://www.linkedin.com/in/tommaso-piehl-66b0b11b2/" target="_blank" style={{margin:"auto"}}>
        <img src={linkedwhite} id="headlink"/>
      </a>
      </div>
      </div>
  );
}




export default App;
