import React, { Component } from 'react';

import styled from 'styled-components';

import $ from 'jquery';

// Ajout du component React Slideshow https://github.com/femioladeji/react-slideshow
import Slideshow from './Slide';

class JqueryTests extends Component {
    componentDidMount() {
        $("button").click(function() {
          $("h1").toggleClass("red");
        });
      }
      render() {
        return (
            <AnimeJquery>
          
                <Slideshow />

            <h1>jquery in React App</h1>
            <button>Click Me</button>
          
          </AnimeJquery>
        );
      }
}

export default JqueryTests;

const AnimeJquery = styled.section `
button {
    font-size: 25px;
  }
  
  .red {
    color: red;
  }
  
`;

