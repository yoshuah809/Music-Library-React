import React from 'react';
import './MusicTable.css';

const MusicTable = props => {
  return (
    <React.Fragment>
      <p>This is an example of Music Table</p>
      <table id='songs'>
        <caption>SongList</caption>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Title</th>
            <th scope='col'>Artist</th>
            <th scope='col'>Albun</th>
            <th scope='col'>Release Date</th>
            <th scope='col'>Genre</th>
            <th scope='col'>Display</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Release Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.songs.map(song => {
            return (
              <tr>
                <th scope='row'> {song.id} </th>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.release_date}</td>
                <td>{song.genre}</td>
                <td>
                  <button class='button-33'>Display Song</button>
                </td>
                <td>
                  <button class='button-33'>Edit</button>
                </td>
                <td>
                  <button class='button-33'>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default MusicTable;
