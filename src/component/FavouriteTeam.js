import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, withRouter} from 'react-router-dom';
import DoctorSelect from "./DoctorSelect.js";

        
export default class FavouriteTeam extends Component {
      state = {
        teams: [],
        selectedTeam: "",
        validationError: ""
      }
     
      componentDidMount() {
        // http://localhost:26854/api/premiershipteams
        fetch("https://swapi.co/api/planets/")
          .then((response) => {
            return response.json();
          })
          .then(data => {
            let teamsFromApi = data.results.map(team => { return {value: team, display: team} })
                            //  = planets.map((planet) =><option key={planet.terrain}>{planet.terrain}</option>
            this.setState({ teams: [{value: '', display: '(Select your favourite team)'}].concat(teamsFromApi) });
          }).catch(error => {
            console.log(error);
          });
      }
     
      render() {
        return (
          <div>
            <select value={this.state.selectedTeam} 
                    onChange={(e) => this.setState({selectedTeam: e.target.value, validationError: e.target.value === "" ? "You must select your favourite team" : ""})}>
              {this.state.teams.map((team) => <option key={team.name} value={team.name}>{team.display}</option>)}
            </select>
            <div style={{color: 'red', marginTop: '5px'}}>
              {this.state.validationError}
            </div>
          </div>
        )
      }
    }