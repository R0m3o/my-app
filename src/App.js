import React, { Component } from 'react';
import axios from 'axios';

class App extends Component{
  state = {
    bruger: []
  }

  componentDidMount(){
    axios.get("https://worldcruiseapi.azurewebsites.net/bruger")
    .then(res => {
        console.log(res.data)
        this.setState({
          bruger: res.data
        });
    });
  }
  
  render(){
    const {bruger} = this.state;
    const brugerListe = bruger.length ? (
      bruger.map(brug => {
        return (
          <div key={brug._id}>
            <h5>{brug.Navn}</h5>
            <p>{brug.Adresse}</p>
            <p>{brug.Email}</p>
            <p>{brug.Nationalitet}</p>
          </div>
        )
      })
    ) : (
      <div>Loading</div>
    )
    return (
      <div>
        {brugerListe}
      </div>
    )
  }
}

export default App;
