import React, { Component } from 'react';

import styled from 'styled-components';

import $ from 'jquery';

// Version British News !!

function refreshPage(){ 
    window.location.reload(); 
}

class UKNews extends Component {
    constructor() {
        super()
        this.state = {
          data: null,
          data_first: null,
          button: true,
        }
        this.handleClick = this.handleClick.bind(this);
      }


      handleClick(){
        this.setState({
          button:!this.state.button
        })
      }

      componentWillMount() {
          this.getData7();
      }

      componentDidMount() {

        $(".hide-first-datas").click(function () {
            // On retire :
            $('.first-datas-container').css('display', 'none');
        });

        // CodePen Home Scroll to top button : démo https://codepen.io/michalwyrwa/pen/GBaPPj
        $(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
        });
        
      }
      
      // https://newsapi.org/v1/articles?source=buzzfeed&apiKey=09554bc11b0b4e4cb4d22c519e42604b
      // https://facebook.github.io/react-native/movies.json
    
    getData() {

        let data = fetch('https://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=09554bc11b0b4e4cb4d22c519e42604b')

        .then((res) => {
            res.json().then((resp) => {
                console.log(resp.articles)
                this.setState({ data: resp.articles })
            })
        })
    }


    getData2() {
       
        let data = fetch('https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=09554bc11b0b4e4cb4d22c519e42604b')

        .then((res2) => {
            res2.json().then((resp2) => {
                console.log(resp2.articles)
                this.setState({ data: resp2.articles })
            })
        })
    }

    getData3() {
       
        let data = fetch('http://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=09554bc11b0b4e4cb4d22c519e42604b')

        .then((res3) => {
            res3.json().then((resp3) => {
                console.log(resp3.articles)
                this.setState({ data: resp3.articles })
            })
        })
    }

    getData4() {
       
        let data = fetch('https://newsapi.org/v2/top-headlines?country=gb&category=health&apiKey=09554bc11b0b4e4cb4d22c519e42604b')

        .then((res4) => {
            res4.json().then((resp4) => {
                console.log(resp4.articles)
                this.setState({ data: resp4.articles })
            })
        })
    }

    getData5() {
       
        let data = fetch('https://newsapi.org/v2/top-headlines?country=gb&category=science&apiKey=09554bc11b0b4e4cb4d22c519e42604b')

        .then((res5) => {
            res5.json().then((resp5) => {
                console.log(resp5.articles)
                this.setState({ data: resp5.articles })
            })
        })
    }

    getData6() {
       
        let data = fetch('http://newsapi.org/v2/top-headlines?country=gb&category=entertainment&apiKey=09554bc11b0b4e4cb4d22c519e42604b')

        .then((res6) => {
            res6.json().then((resp6) => {
                console.log(resp6.articles)
                this.setState({ data: resp6.articles })
            })
        })
    }

    getData7() {
       
        let data_first = fetch('http://newsapi.org/v2/top-headlines?country=gb&apiKey=09554bc11b0b4e4cb4d22c519e42604b')

        .then((res7) => {
            res7.json().then((resp7) => {
                console.log(resp7.articles)
                this.setState({ data_first: resp7.articles})
                
            })
        })
    }
    
    /*
    greeting() {
        alert('Hello what ?');
        
    }

    greeting2() {
        alert('World !');
    }
    */
    
    render() {

// Ajout du scroll to top pour chaque transition vers un article
window.scrollTo(0, 0);

        return (

            <CardFlipApiLoops>

            <SubTitleLogo>
              <p className="subtitle-position">United Kingdom</p>
            </SubTitleLogo>
                
{/* 
                <button className="" onClick={this.handleClick}> 
                {this.state.button ? this.greeting() : this.greeting2() }
                I'm a TOGGLE button
                </button>
*/}

{/* Show or Hide a component */}              
{/*                 
                
                <div>
                    <div onClick={() => this.onClick()}>
                        Parent - click me to show/hide my child
                    </div>
                    {
                    this.state.childVisible
                    ? <Child />
                    : null
                    }
                </div>
*/}                

                {/* Evénement changement de texte au click */}
{/* 
                <button className="" onClick={this.handleClick}> 
                {this.state.button ? "buttonTrue": "buttonFalse"}
                </button>
*/}
                <div className="special-buttons">
                
                <button className="button-effect btn-3 hide-first-datas" onClick={ refreshPage }> Featured <i className="far fa-star"></i> </button>

                {/* Boutons pour activer l'affichage des Datas NewsApi.org */}
                <button className="button-effect btn-3 hide-first-datas" onClick={() => this.getData()}>
                Technology <i className="fas fa-desktop"></i>
                </button>

                <button className="button-effect btn-3 hide-first-datas" onClick={() => this.getData2()}>
                Sports <i className="fas fa-football-ball"></i>
                </button>

                <button className="button-effect btn-3 hide-first-datas" onClick={() => this.getData3()}>
                Business <i className="fas fa-user-tie"></i>
                </button>

                <button className="button-effect btn-3 hide-first-datas" onClick={() => this.getData4()}>
                Health <i className="fas fa-capsules"></i>
                </button>

                <button className="button-effect btn-3 hide-first-datas" onClick={() => this.getData5()}>
                Science <i className="fas fa-microscope"></i>
                </button>

                <button className="button-effect btn-3 hide-first-datas" onClick={() => this.getData6()}>
                Entertainement <i className="far fa-laugh-beam"></i>
                </button>


                

                </div>





<FirstDatasApi className="first-datas-container">

{
                    this.state.data_first ?

                    this.state.data_first.map((item) =>
                    
                    <div className="container-fluid">
         
                        <div className="row">

                            <div className="col-12 mt-3">
          
                                <div className="card border-0">

                                    <div className="card-horizontal">

                                    <div className="img-square-wrapper">

                                        <div className="grid">

                                            <figure className="effect-bubba">

                                                <a href={item.url} target="_blank">
                                                    <img src={item.urlToImage} className="switch-img" alt={item.title} title={item.title} />
                                                </a>

                                                <figcaption>
                                                    
                                                    <p style={{ fontSize: '20px', background: 'white'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Read more</p>
                                                    
                                                    
                                                </figcaption>

                                                

                                            </figure>

                                        </div>

                                        </div>

                                        <div className="card-body">

                                            <a href={item.url} target="_blank">
                                                <h3 className="card-title colored-text" style={{ fontSize: '26px'}}>{item.title}</h3>
                                            </a>

                                            <h4 className="card-title" style={{ fontSize: '18px'}}>{item.description}</h4>

                                        </div>
 
                                    </div>

                                </div>

                            </div>
              
                        </div>

                        <br />
                        
                        <hr />
                        

                    </div>

                    
      
   
                    )

                    :
                    (
                        <div>
                            
                        </div>
                    
                    )

                }
</FirstDatasApi>

<MultiDatasApi>
                

                {
                    this.state.data ?

                    this.state.data.map((item) =>
                    
                    <div className="container-fluid">
         
                        <div className="row">

                            <div className="col-12 mt-3">
          
                                <div className="card border-0">

                                    <div className="card-horizontal">

                                    <div className="img-square-wrapper">

                                        <div className="grid">

                                            <figure className="effect-bubba">

                                                <a href={item.url} target="_blank">
                                                    <img src={item.urlToImage} className="switch-img" alt={item.title} title={item.title} />
                                                </a>

                                                <figcaption>
                                                    
                                                    <p style={{ fontSize: '20px', background: 'white'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Read more</p>
                                                
                                                </figcaption>

                                                

                                            </figure>

                                        </div>

                                        </div>

                                    <div className="card-body">

                                        <a href={item.url} target="_blank">
                                            <h3 className="card-title colored-text" style={{ fontSize: '26px'}}>{item.title}</h3>
                                        </a>

                                        <h4 className="card-title" style={{ fontSize: '18px'}}>{item.description}</h4>

                                    </div>
 
                                    </div>

                                </div>

                            </div>
              
                        </div>

                        <br />
                        <hr />
                        

                    </div>

                    
      
   
                    )

                    :
                    (
                        <div>
                            
                        </div>
                    
                    )

                }
</MultiDatasApi>

<a id="back-to-top" href="#" className="btn btn-light btn-lg back-to-top" role="button"><i className="fas fa-chevron-up"></i></a>
                
            </CardFlipApiLoops>
        )
    }
}

export default UKNews;

const CardFlipApiLoops = styled.section `

font-family: 'Quicksand', sans-serif;


margin-top:75px;

@media (min-width:1000px) {
    margin-left:10%;
    margin-right:10%;
}

/* CodePen Home
Scroll to top button */

.back-to-top {
    position: fixed;
    bottom: 25px;
    right: 25px;
    display: none;
}

.colored-text {
    color:#005bee;
    
    transition: 0.5s;
}

.colored-text:hover {
    color:#1D233D;
    
    transition: 0.5s;
    
}

.card-horizontal {
    display: flex;
    flex: 1 1 auto;
}

.card-horizontal a {
    text-decoration:none;
}

.switch-img {
    max-width:500px;
}

@media (max-width:1000px) {
    .switch-img {
        width:100%;
        max-width:100%;
    }
}

@media (max-width:1000px) {
    .card-horizontal {
        display: inline;
        
    }
}


/* Bubba Image Hover effect -> Démo Codepen https://codepen.io/maheshambure21/pen/GgVbVW */

figure.effect-bubba img {
	opacity: 1;
	
    transition: opacity 0.35s;
    
    border:1px solid #bdbdbd;
    padding:3px;
}

figure.effect-bubba:hover img {
	opacity: 0.85;
}

figure.effect-bubba p {
    margin-top:-30px;
    
    opacity: 0;
    
    color:#1D233D;
    
	transition: opacity 0.35s, transform 0.35s;
	
	transform: translate3d(0,20px,0);
}

figure.effect-bubba:hover p {
	opacity: 1;
	
	transform: translate3d(0,0,0);
}


/* Buttons container */

.special-buttons {
    text-align:center;
}

/* GENERAL BUTTON STYLING */

.button-effect,
.button-effect::after {
	transition: all 0.4s;
}

.button-effect {
  background: none;
  border: 0px solid blue;
  border-radius: 5px;
  color: grey;
  display: inline;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  margin: 10px;
  position: relative;
  outline-style: none;
  
}

.button-effect::before,
.button-effect::after {
  background: #1D233D;
  border: 0px solid blue;
  border-radius: 20px;
  content: '';
  position: absolute;
  z-index: -1;
}

.button-effect:hover {
  color: white;
}

/* Buttons Hover Effects : Codepen démo https://codepen.io/ritchiejacobs/pen/qEJjBM */

/* BUTTON 1 */
.btn-1::after {
  height: 0;
  left: 0;
  top: 0;
  width: 100%;
}

.btn-1:hover:after {
  height: 100%;
}

/* BUTTON 2 */
.btn-2::after {
  height: 100%;
  left: 0;
  top: 0;
  width: 0;
}

.btn-2:hover:after {
  width: 100%;
}

/* BUTTON 3 */
.btn-3::after {
  height: 0;
  left: 50%;
  top: 50%;
  width: 0;
}

.btn-3:hover:after {
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
}

/* BUTTON 4 */
.btn-4::before {
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
}

.btn-4::after {
  background: white;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
}

.btn-4:hover:after {
  height: 0;
  left: 50%;
  top: 50%;
  width: 0;
}


`;

const MultiDatasApi = styled.section `

border-left:1px solid #dcdcdc;
border-right:1px solid #dcdcdc;

`;

const FirstDatasApi = styled.section `

border-left:1px solid #dcdcdc;
border-right:1px solid #dcdcdc;

`;

const SubTitleLogo = styled.section `

height:1px;
position:fixed;
text-align:center;
width:100%;
top:50px;
left:0;
border:0px solid red;
z-index:2000;
color:white;

.subtitle-position {
  margin-top:-10px;
  margin-left:0px;
  opacity:0.85;
}



`;

