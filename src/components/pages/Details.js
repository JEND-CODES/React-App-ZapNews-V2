import React, { Component } from 'react';

import { InfoConsumer } from '../context';

import styled from 'styled-components';

export class Details extends Component {
    render() {

        // Ajout du scroll to top pour chaque transition vers un article
        window.scrollTo(0, 0);

        return (
           <InfoConsumer>
               {data => {
                   const {
                       id,
                       headerTitle,
                       headerSubTitle,
                       headerText,
                       img, 
                       title, 
                       maps,
                       description
                   } = data.detailInfo;

                   return (
                    
                        <React.Fragment>
                            
                            <HeaderDetails className="container-fluid align-items-center">

                            {/*Voir CodePen & Bootstrap Scrolling Nav Demo*/}
                            <section id="about" class="about-section"></section>    
                            <a class="page-scroll" href="#about">Lien de renvoi vers la section 1</a>

                                <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
                                <h4 className="display-5">{headerSubTitle}</h4>
                                <p>{headerText}</p>
                            </HeaderDetails>

                            <div className="container">
                                <ul className="nav nav-tabs">

                                    <li className="nav-item">
                                        <a href="#aboutPlace" className="nav-link active" role="tab" data-toggle="tab">About Place</a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="#reviews" className="nav-link" role="tab" data-toggle="tab">Reviews</a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="#map" className="nav-link" role="tab" data-toggle="tab">Map</a>
                                    </li>
                                    

                                </ul>

                                <div className="tab-content mb-5">
                                    <div id="aboutPlace" className="tab-pane in active text-center mb-5" role="tabpanel">
                                        <h2 className="mb-3">{title}</h2>
                                        <p>{description}</p>
                                        <img src={img} alt={title} className="img-thumbnail img-fluid"/>
                                    </div>

                                    <div id="reviews" className="tab-pane" role="tabpanel">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui voluptate odio quod doloremque unde reprehenderit velit quaerat. Deserunt voluptatem natus suscipit aliquid, eligendi sequi dicta porro? Laudantium, libero est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui voluptate odio quod doloremque unde reprehenderit velit quaerat. Deserunt voluptatem natus suscipit aliquid, eligendi sequi dicta porro? Laudantium, libero est   
                                </div>

                                <div id="map" className="tab-pane" role="tabpanel">
                                     <iframe src={maps} style={{ border: '0', height: '28.125rem', width: '100%', frameborder: '0' }}></iframe>   
                                </div>
                                </div>

                                


                            </div>
                        </React.Fragment>
                   );
               }}
           </InfoConsumer>
        )
    }
}

export default Details;

const HeaderDetails = styled.header `

background: linear-gradient(rgba(109,109,109), rgba(255,255,255));
height: 100vh;
color:var(--mainWhite);
text-align:center;

`;
