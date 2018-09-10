import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, withRouter} from 'react-router-dom';
import DoctorSelect from "./DoctorSelect.js";

export default class ProneApp extends Component {
    constructor() {
        super();
        this.state = {
            planets: [],
            selectedProf: ""
        };
    }

    componentDidMount() {
        let initialPlanets = [];
        // https://swapi.co/api/planets/
        // http://localhost:8080/api
        fetch('https://swapi.co/api/planets/')
            .then(response => {
                return response.json();
            }).then(data => { initialPlanets = data.results.map((planet) => {
                return (planet)
            });
            console.log(initialPlanets);
            this.setState({
                planets: initialPlanets,
            });
        });
    }

    render() {
        return (
                    // <DoctorSelect state={this.state}/>
                    <div>

                <select value={this.state.selectedProf}
                    onChange={(e) => this.setState({ selectedProf: e.target.value })}>
                    {this.state.planets.map((planet) => <option key={planet.name}>{planet.name}</option>)}  </select>
                       
                        <p>{this.state.selectedProf}</p>
                    </div>
            //         <select  value={this.state.selectedProf} 
            //   onChange={(e) => this.setState({selectedProf: e.target.value})}>
            //     { <option key={this.planet.terrain}>{this.planet.terrain}</option>}   
            //  </select>
        );
    }
}