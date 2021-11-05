import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import MusicTable from './Components/MusicTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { songs: [] };
  }

  componentDidMount() {
    this.getSongs();
  }

  getSongs = async () => {
    let response = await axios.get('http://127.0.0.1:8000/music/');
    console.log(response.data);
    this.setState({
      songs: response.data,
    });
  };

  render() {
    return (
      <div>
        <h1>Songs API</h1>
        {this.state.songs.length > 0 && (
          <MusicTable songs={this.state.songs} getNewSong={this.getSongs} />
        )}
      </div>
    );
  }
}

export default App;
