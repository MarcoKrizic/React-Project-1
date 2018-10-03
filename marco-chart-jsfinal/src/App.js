import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData:{},
      search:''

    }
  }

  //Extrapolating data for rendering
  componentWillMount() {
    this.getChartData();
  }

  //Mathematical formula equation
  coreFunction(val) {
    return val*val
  }

  //Mapping according to above math equation
  generateY(setX) {
    console.log (setX)
    return setX.map( xVal =>{
      return this.coreFunction(xVal)
    });
  }

  getChartData() {
    this.setState({
      chartData: {
        labels:[-10, -5, 0, 5, 10], 
        datasets:[
            {
                label: 'Assorted Values',
                data: this.generateY([-10, -5, 0, 5, 10]),
                borderColor:[
                    'rgba(255, 99, 132, 0.6)'
                ],
                fill: false
            }
        ]
    }
  });
  }

  //Changing functions
  updateSearch(event) {
    this.setState({
      search: event.target.value})
  };

  onSubmit() {
    this.setState({})
  };


  
//Rendering graph on web page
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Chart chartData={this.state.chartData} 
        legendPosition="bottom"/>
      <form>
        <input type="number" 
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}/>

        <button onClick={() => 
          this.onSubmit()}>Click to display new value range!</button>
      </form>
    </div>
    );
  }
}


export default App;
