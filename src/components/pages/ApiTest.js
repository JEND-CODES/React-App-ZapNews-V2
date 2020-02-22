import React, { Component } from 'react';

// React Fetch API Pen 1 and 2 :
// Voir démos Codepen : https://codepen.io/kinsomicrote/pen/XYLxWg?editors=1010
// https://codepen.io/kinsomicrote/pen/dKBqBK?editors=1010

const Post = ({ body }) => {
    return (
      <div>
        {body.map(post => {
          const {name, realName} = post;
          return (
            <div key={name}>
              <h2>{name}</h2>
              <h2>{realName}</h2>
              <hr />
            </div>
          );
        })}
      </div>
    );
  };
  
  class ApiTest extends Component {
    state = {
      
      questions: [],
      error: null
    };

    fetchPosts() {
        // another json for tests : https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/posts.json
        // https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/questions.json
        
        // News Api org example Buzzfeed : https://newsapi.org/v1/articles?source=buzzfeed&apiKey=09554bc11b0b4e4cb4d22c519e42604b

      fetch(`https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/questions.json`)
        .then(response => response.json())
        .then(
          data =>
            this.setState({
                questions: data,
              
            })
        )
        .catch(error => this.setState({ error }));
    }
  
    componentDidMount() {
      this.fetchPosts();
    }
  
    render() {
      const { questions, error } = this.state;
      return (
        <React.Fragment>
          
          {Object.keys(questions).map(key => <Post key={key} body={questions[key]} />) }
        </React.Fragment>
      );
    }
  }



export default ApiTest;
