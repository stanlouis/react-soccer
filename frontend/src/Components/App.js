import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PlayerSingle from './Player/PlayerSingle';
import PlayerList from './Player/PlayerList';
import PlayerForm from './Player/PlayerForm';

class App extends Component {
  state = {
    players: [],
    currentPlayer: {}
  };

  componentDidMount() {
    const url = 'http://localhost:4500/players';

    axios
      .get(url)
      .then(response => {
        this.setState({ players: response.data });
      })
      .catch(error => console.error(error));
  }

  updateCurrentPlayer = item => {
    this.setState({
      currentPlayer: item
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav>
            <div className="nav-wrapper blue bg-darken-1">
              <a href="/" className="brand-logo center">
                Soccer Management
              </a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s3">
            <PlayerList
              players={this.state.players}
              updateCurrentPlayer={this.updateCurrentPlayer}
            />
          </div>
          <div className="col s9">
            <PlayerSingle selectedPlayer={this.state.currentPlayer} />
          </div>
        </div>
        <div className="container">
          <div className="col m10 offset-m1 s12">
            <div className="row">
              <div className="col s12">
                <PlayerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
