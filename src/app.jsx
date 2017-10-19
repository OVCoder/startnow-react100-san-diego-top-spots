import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          topspots: []
      };
  }

  componentWillMount(){
    axios //tells React to make an HTTP GET request to our external web service when the component is about to be mounted to the DOM
    .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));
  }
  
  render() {
    return (
      <div className='App container'>
        <div className="jumbotron">
          <h4 className="card-title">
            San Diego Top Spots
          </h4>
          <p className="card-text"> A list of the top 30 places to see in San Diego, California.</p>
        </div>
        <div className="jumbotron">{ this.state.topspots.map(topspot => (
                <TopSpot
                    key={topspot.id}
                    name={topspot.name}
                    description={topspot.description}
                    location={topspot.location} />
            )) }
        </div> {/*{ JSON.stringify(this.state.topspots, null, 2) } - this displays JSON in an easy-to-read (for a person )format*/}
      </div>
    );
  }
}

export default App;
