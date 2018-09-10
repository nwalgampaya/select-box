import React from 'react';

class DoctorSelect extends React.Component {
    constructor() {
        super();
    }

    render () {
        let planets = this.props.state.planets;
        // let selectedProf = this.props.selectedProf;
        let optionItems = planets.map((planet) =>
        <option key={planet.terrain}>{planet.terrain}</option>
        // console.log("optionItems"+ planet.name);
    );

        return (
            // value={this.state.selectedProf} 
            //   onChange={(e) => this.setState({selectedProf: e.target.value})
         <div>
             <select  >
                {optionItems}   
             </select>
         </div>
        )
    }
}

export default DoctorSelect;