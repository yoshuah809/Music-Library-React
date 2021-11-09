import React, { Component, useState } from 'react';

class FilterBy extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'coconut' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div
        display='flex'
        justify-content='center'
        align-items='center'
        flex-direction='column'
        font-family='Helvetica,Arial,sans-serif'
        background-color='grey'
      >
        <form onSubmit={this.handleSubmit}>
          <label>
            Filter By:
            <select
              class='form-select'
              aria-label='Default select example'
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option value='title'>Title</option>
              <option value='artist'>Artist</option>
              <option value='album'>album</option>
              <option value='release_date'>Release Date</option>
              <option value='genre'>Genre</option>
            </select>
            <input
              type='Text'
              name='Text'
              placeholder='Search...'
              class='form-control'
            ></input>
          </label>
          {'  '}
          <input className='btn btn-success' type='submit' value='Filter' />
        </form>
      </div>
    );
  }
}

export default FilterBy;
