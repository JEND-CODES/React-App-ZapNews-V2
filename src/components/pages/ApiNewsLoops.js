import React, { Component } from 'react';

// Démos Codepen avec boucle de résultats : https://codepen.io/makecodenotwar/pen/rjOvPL?editors=1010
// https://codepen.io/mrcow/pen/vmvEGv?editors=0010
// https://codepen.io/NestedLooper/pen/NzGmBV?editors=0010


// Cet exemple récupère des infos url de deux sources différentes, pour les associer en fonction de l'id et les visualiser :

 // define variables
 var api = "https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty";
 var apiTopStories = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
 var storiesStore = [];

class ApiNewsLoops extends Component {
   
    constructor() {
        super();
        this.state = {
          stories: [],
          subtitle: "Top Stories"
        }
      }
      // fetch top stories ID
      fetchTopStories() {
        fetch(apiTopStories)
          .then(response => response.json())
          .then(data => {
            var store = data.slice(0,10);
            // console.log("10 story id", store);
            store.forEach((story) => {
              this.fetchOneStory(story);
            })
          })
      }
      // fetch content from one story
      fetchOneStory(id) {
        var target = "https://hacker-news.firebaseio.com/v0/item/" + id + ".json?print=pretty";
        fetch(target)
          .then(response => response.json())
          .then(data => {
            // console.log(data);
            storiesStore.push({
              title: data.title,
              url: data.url,
              score: data.score,
              author: data.by
            })
          })
          .then(() => this.setState({ stories: storiesStore }))
      }
      // init and fetch top stories
      componentDidMount() {
        this.fetchTopStories();
      }
      render() {
        return (
          <div className="card">
    
            <div className="card-header">
              <h1 className="mb-0">{this.props.title}</h1>
            </div>
            
            <div className="card-content p-3">
              <h4>{this.state.subtitle}</h4>
              <ul>
                {this.state.stories.map((story) => (
                  <li>
                    <a href={story.url} target="_blank">{story.title}</a> <i>by {story.author}</i> 
                    <span className="badge badge-success ml-2">{story.score}</span>
                  </li>
                ))}
              </ul>
            </div>
    
          </div>
        )
      }
    }
    

export default ApiNewsLoops;
