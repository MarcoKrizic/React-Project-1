import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search:'',
      chartData:{},
      chartOptions:{},
      generators:{}  
    }
  }

 /* //Extrapolating data for rendering
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
        ],
    }
  });
  }*/

  //Changing functions

//Attempt to parse new array 1
/* getChartData:
      document.getElementById('newValue').addEventListener('click',
      function() {
        getchartData.datasets.forEach(function(datasets) {
          datasets.data = datasets.data.map(function() {
            return data.generateY(['newValue']);
          });
        });

      window.myLine.updateSearch();
      }
      )
*/

//Attempt to parse new array 2



  
//Rendering graph on web page
  render() {
    return (
      <div className="App">
        <Chart />
    </div>
    );
  }
}


export default App;
