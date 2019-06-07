import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';
import axios from 'axios';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: []
    };
  } 

  performSearch = (query) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=vIa6iVvRwwONNxkoXfSvGnyKuGvDgg3d&limit=5`)
      .then(response => {
        this.setState({
          gifs: response.data.data
        });
      })
      .catch(error => {
        console.log('Error getting data!', error);
      });
  }



  render() { 
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch}/>      
          </div>   
        </div>    
        <div className="main-content">
          <GifList data = {this.state.gifs} />
        </div>
      </div>
    );
  }
}
