import React, { Component } from 'react';
import axios from 'axios';
import MusicTable from '../MusicTable';
import {
  Button,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormGroup,
  Modal,
} from 'reactstrap';

class CreateSong extends Component {
  async AddSong(song) {
    let response = await axios.post('http://127.0.0.1:8000/music/', song);
    console.log(response.data);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = event => {
    //event.preventDefault();
    this.AddSong(this.state);
  };
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      artist: '',
      album: '',
      release_date: '',
      genre: '',
    };
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='col-md-6'>
          <label className='control-label'>Title:</label>
          <input
            onChange={this.handleChange}
            name='title'
            type='text'
            value={this.state.title}
            class='form-control'
            placeholder='Song Title'
          />
          <label>Artist:</label>
          <input
            onChange={this.handleChange}
            name='artist'
            type='text'
            value={this.state.artist}
            class='form-control'
            placeholder='Artist'
            width='10%'
          />
          <label>Album:</label>
          <input
            onChange={this.handleChange}
            name='album'
            type='text'
            value={this.state.album}
            class='form-control'
            placeholder='Album'
            width='10%'
          />
          <label>Release Date:</label>
          <input
            onChange={this.handleChange}
            name='release_date'
            type='date'
            value={this.state.release_date}
            class='form-control'
            placeholder='Release Date'
            width='10%'
          />
          <label>Genre:</label>
          <input
            onChange={this.handleChange}
            name='genre'
            type='text'
            value={this.state.genre}
            class='form-control'
            placeholder='Genre'
            width='10%'
          />
          <button type='submit' className='btn btn-primary'>
            Create Book
          </button>
        </div>
      </form>
    );
  }
}

export default CreateSong;
