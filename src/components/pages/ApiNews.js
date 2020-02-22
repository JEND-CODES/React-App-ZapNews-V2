import React, { Component } from 'react';

// Travailler avec la démo ? https://codepen.io/mburakerman/pen/gLdpWo?editors=1010
// Penser à installer AXIOS : https://stackoverflow.com/questions/44342142/axios-is-not-defined

// Fetch Data from an API in React.js -> Tuto Youtube ultra simple : https://www.youtube.com/watch?v=T3Px88x_PsA
// Test fonctionnel avec l'API : https://api.randomuser.me/


{/* 2 fonctions qui gèrent les Responsive react-bootstrap cards -> Voir démo Codepen : https://codepen.io/nathansebhastian/pen/qgOJKe?editors=1010 */}
function Card(props) {
  return (
    <div className="card">
      <img className="card-img-top" src={props.featureImage} alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.link} className="btn btn-primary">Learn more</a>
      </div>
    </div>
  );
}

function CardList() {
return (
  <div className="row">
    <div className="col-sm-4">
      <Card
        featureImage="https://sebhastian.com/static/eb0e936c0ef42ded5c6b8140ece37d3e/fcc29/feature-image.png"
        title="How To Make Interactive ReactJS Form"
        description="Let's write some interactive form with React"
        link="https://sebhastian.com/interactive-react-form"
      />
    </div>
    <div className="col-sm-4">
      <Card
        featureImage="https://sebhastian.com/static/4257b49310455388f3e155f8d5ab632e/fcc29/feature-image.png"
        title="Babelify your JavaScript code"
        description="Babel make JavaScript code browser-compatible."
        link="https://sebhastian.com/babel-guide"
      />
    </div>
    <div className="col-sm-4">
      <Card
        featureImage="https://sebhastian.com/static/4d13c75e6afd3976800de29628da5ba5/fcc29/feature-image.png"
        title="JavaScript Basics Before You Learn React"
        description="Learn the prerequisites of learning React fast"
        link="https://sebhastian.com/js-before-react"
      />
    </div>
  </div>
);
}

{/* Classe qui gère la requête vers l'API newsapi.org test 1 */}
class ApiNews extends Component {

state = {
  loading: true,
  postElement: null,
}

  async componentDidMount(){
    const url = "https://newsapi.org/v1/articles?source=buzzfeed&apiKey=09554bc11b0b4e4cb4d22c519e42604b";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({postElement: data.articles[0], loading: false});
    console.log(data.articles);
  }


    render() {
        return (
          
          
          <div>
            {/* Responsive react-bootstrap cards */}
            <h3>Responsive react-bootstrap cards :</h3>
            <CardList />

            <br />

            <h3>Loading de l'API newsapi.org :</h3>

            {/* Loading de l'API newsapi.org test 1*/}
             {this.state.loading || !this.state.postElement ? (
                <div>Loading...</div> 
                )  : ( 
                <div>
                  
                  <h2>{this.state.postElement.title}</h2>
                  <h5>Par {this.state.postElement.author}</h5>

                  <img src={this.state.postElement.urlToImage} className="" alt="" />

                </div> 
                  )}
          </div>

          
        )
      }
}

export default ApiNews;
