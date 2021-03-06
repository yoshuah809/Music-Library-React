import './App.css';
import axios from 'axios';
import React, { Component, useState } from 'react';
import MusicTable from './Components/MusicTable';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Button } from 'reactstrap';
import CreateSong from './Components/CreateSong/CreateSong';
import FilterBy from './Components/FilterBy/FilterBy';

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
  deleteSong = async songId => {
    let response = await axios.delete(`http://127.0.0.1:8000/music/${songId}/`);
    console.log(response.data);
    this.getSongs();
  };

  filterSong = query => {
    let filteredSongs = this.state.songs.filter(function (song) {
      if (
        song.title.includes(query) ||
        song.artist.includes(query) ||
        song.album.includes(query) ||
        song.genre.includes(query)
      ) {
        return true;
      } else {
        return false;
      }
    });
    this.setState({ songs: filteredSongs });
  };

  render() {
    return (
      <div>
        <h1>Songs API</h1>
        <FilterBy filterSong={this.filterSong} />
        {this.state.songs.length > 0 && (
          <MusicTable
            songs={this.state.songs}
            getNewSong={this.getSongs}
            deleteSong={this.deleteSong}
          />
        )}
        <CreateSong />
      </div>
    );
  }
}

export default App;
