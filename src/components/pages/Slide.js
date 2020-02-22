import React, { Component } from 'react';

import styled from 'styled-components';

// On importe la librairie slideshow qui vient de https://github.com/femioladeji/react-slideshow
// Pour l'installer il a suffit de taper : npm install react-slideshow-image -S
import { Slide } from 'react-slideshow-image';

// Propriétés du component React Slideshow https://github.com/femioladeji/react-slideshow

const slideImages = [
    'https://1.bp.blogspot.com/-ZcajAb5dvow/XdmtfktiffI/AAAAAAAAA_g/XExallOiT9UYNpPtWZK6GfpdgTcfOcvegCLcBGAsYHQ/s1600/photo-paysage-urbain-pont-nuit.jpg',
    'https://1.bp.blogspot.com/-NK--tvTr0nA/Xdmtbz06y7I/AAAAAAAAA_U/h0WYfcyGrtgwgoQpeyJg48YJF8oVsSfCQCLcBGAsYHQ/s1600/azertyuiop.JPG',
    'https://1.bp.blogspot.com/-mfuxNbJB5GY/Xdmtgd51v-I/AAAAAAAAA_o/oBeqOU05CXwqT3X79qfHjANpVmUzYKxSQCLcBGAsYHQ/s1600/qsdfghjklm.JPG'
  ];
  
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }
  
  const Slideshow = () => {
      return (
        <StyledSlideshow className="slide-container">
          <Slide {...properties}>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                <span>Slide 1</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                <span>Slide 2</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                <span>Slide 3</span>
              </div>
            </div>
          </Slide>
        </StyledSlideshow>
      )
  }



export default Slideshow;

const StyledSlideshow = styled.section `
.slide-container {
    width: 70%;
    margin: auto; }
  
  .each-slide > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 300px;
  }
  
  .each-slide span {
    padding: 20px;
    font-size: 20px;
    background: #efefef;
    text-align: center;
  }
  
  .each-fade {
    display: flex;
  }
  
  .each-fade .image-container {
    width: 75%;
    overflow: hidden;
  }
  
  .each-fade .image-container img {
    width: 100%;
  }
  
  .each-fade h2 {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    background: #adceed;
  }
`;
