import React, { Component } from 'react';
import './App.css';
import api from './api';

class App extends Component {

  state = { filmes: [] }

  async componentDidMount(){
    const response = await api.get('');
    
    this.setState({ filmes: response.data });
  }

  render(){

    const { filmes } = this.state;

    return(
      <div>
        <h1> Consumindo API TVMAZE </h1>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>url</th>
            </tr>
          </thead>
          <tbody>
            {filmes.map(filme => (
              <tr>
                <td>{filme.show.id}</td>
                <td>{filme.show.name}</td>
                <td><a href={filme.show.url}>{filme.show.url}</a></td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    )
  }
}

export default App;