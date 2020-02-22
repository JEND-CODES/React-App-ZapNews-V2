import React, { Component } from 'react';

import { InfoConsumer } from './context';

import { Link } from 'react-router-dom';

import styled from 'styled-components';


class Info extends Component {
    
// Voir Codepen Bootstrap card flip example
// https://codepen.io/jadeli1720/pen/PoYyqxK
// https://codepen.io/ingac/pen/zYxWaoY?editors=1010
// https://codepen.io/reklamarsiv/pen/vgPLLv?editors=1010

    render() {

        const {
            id,
            headerTitle,
            headerSubTitle,
            headerText,
            img
           } = this.props.item;

        return (
            <InfoConsumer>
                {value => (   

                    <CardFlip className="col-xs-12 col-md-6 col-lg-4">
         
         <div class="row">
          
    <div class="card-container mx-4 mb-4">

         <div class="card-flip">
        
            <div class="card front">
                    
                    <div className="card" >

                        <img src={img} className="card-img-top" alt={headerTitle} />

                        <div className="card-block">

                                <h3 className="card-title text-uppercase">{headerTitle}</h3>
                                <h5 className="card-title">{headerSubTitle}</h5>

                                {/* Ajout d'un substring pour les textes en page d'accueil */}
                                <p className="card-text">{headerText.substring(0,10)}...</p>

                                
        
                        </div>

                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>

                    </div>
                </div>

                <div className="card back">
          <div className="card-block">
            <h4 className="card-title">Back Card Title</h4>
            <h6 className="card-subtitle mb-2 text-muted">Back Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
            <Link onClick={() => value.handleDetail(id)} to="/details" className="btn btn-outline-primary text-uppercase">
            En savoir plus
            </Link>

          </div>
        </div>



            </div>
            </div>
            </div>
   
                    </CardFlip>

                )}
            </InfoConsumer>
        )
    }
}

export default Info;

const CardFlip = styled.section `

    cursor:pointer;

    /* Flip Cards CSS */

.card-container {
  display: grid;
  perspective: 700px;
}

.card-flip {
  display: grid;
  grid-template: 1fr / 1fr;
  grid-template-areas: "frontAndBack";
  transform-style: preserve-3d;
  transition: all 0.7s ease;
}

.card-flip div {
  backface-visibility: hidden;
  transform-style: preserve-3d;
}

.front {
  grid-area: frontAndBack;
}

.back {
  grid-area: frontAndBack;
  transform: rotateY(-180deg);
}

.card-container:hover .card-flip {
  transform: rotateY(180deg);
}


`;
