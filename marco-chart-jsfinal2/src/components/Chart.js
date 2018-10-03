import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData,
            chartOptions: props.chartOptions,
            chartGenerators: props.chartGenerators
        }
    }


  //Default mathematical formula equation
  coreFunction(val) {
    return val*val
  }

 /* altFunction(equationVal)  {
    if (equationVal == equationInput)
    return {
        coreFunction(val) {
            return val*val
        }
    }
  }*/


  //Generating X-Points
  generateX(limitX) {
      let minX = -parseInt(limitX);
      let maxX = parseInt(limitX);
      let xArray = [];
      for (let x = minX; x <= maxX; x=x+5){
          xArray.push(x)
      }
      return xArray;
  }


  //Mapping according to above math equation
  generateY(setX) {
    console.log (setX)
    return setX.map( xVal =>{
      return this.coreFunction(xVal)
    });
  }

 //Function for parsing math equations from strings
 generateFunction() {
    let equationInput = {}
     console.log (equationInput)
    if (equationInput !== undefined) {} {
        return equationInput.map(equationVal => {
            return this.altFunction(equationVal)
            }
        )
      }
    }

//Search component for Desired Equation Text Box
mathGenerate(event) {
    this.getChartData({equation:event.target.value})
  };

//Search component for Y-Value Text Box
updateSearch(event) {
    this.getChartData({y:event.target.value})
  };

//Search component for X-Value Text Box
updateX(event) {
    this.getChartData({x:event.target.value})
  };

  
 //Extrapolating data for rendering
 componentWillMount() {
    this.getChartData();
  }


  //Saving information to state for rendering
  getChartData(newState) {
    this.setState((state) => {
        if (!state.graphY && !state.graphX && !state.graphMath) {
            return {
                graphX: 10,
                graphY: 50,
                graphMath: 'y=x^2',
                chartData: {
                    labels:[-10, -5, 0, 5, 10], 
                    datasets:[
                        {
                            label: 'Square Values',
                            data: this.generateY([-10, -5, 0, 5, 10]),
                            borderColor:[
                                'rgba(255, 99, 132, 0.6)'
                            ],
                            fill: false
                        },
                    ],
                },
                chartOptions: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                min: -50,
                                max: 50
                            }
                        
                        }]
                    },
                   title:{
                       display:this.props.displayTitle,
                       text:'My First Cartesian Graph',
                       fontSize:25
                   },
                   legend:{
                       display:this.props.displayLegend,
                       position:this.props.legendPosition
                   }
                },
                chartGenerators: {
                    coreFunction(val) {
                        return val*val
                      }
                }
            }
        }
        
        else {
            let y=state.graphY;
            let x=state.graphX;
            let equation=state.graphMath;
            if (newState.x !== undefined) {
                let newX = parseInt(newState.x);
                if (x !== newX) {
                    x=newX
                }
            }
            if (newState.y !== undefined) {
                let newY = parseInt(newState.y);
                if (y !== newY) {
                    y=newY
                }
            }
            //PLACEHOLDER DEFINITION FOR PARSED EQUATION FUNCTION
            if (newState.equation !== undefined) {
                let newEquation = parseInt(newState.equation);
                if (equation !== newEquation) {
                    equation=newEquation
                }
            }

        console.log(JSON.stringify(newState, 4, null));
       
        return {
            graphX: x,
            graphY: y,
            graphMath: equation,
            chartData: {
                labels:this.generateX(x), 
                datasets:[
                    {
                        label: 'Square Values',
                        data: this.generateY(this.generateX(x)),
                        borderColor:[
                            'rgba(255, 99, 132, 0.6)'
                        ],
                        fill: false
                    },
                ],
            },
            chartOptions: {
                scales: {
                    yAxes: [{
                        ticks: {
                            min: -y,
                            max: y
                        }
                    
                    }]
                },
               title:{
                   display:this.props.displayTitle,
                   text:'My First Cartesian Graph',
                   fontSize:25
               },
               legend:{
                   display:this.props.displayLegend,
                   position:this.props.legendPosition
               }
            },
            chartGenerators:{}
        }
        }
    });
}

static defaultProps = {
    displayTitle:true,
    displayLegend:true,
    legendPosition:'right',
    location:'City'
}

render() {
    return (
        <div className="chart">
        <Line
            data={this.state.chartData}
            options={this.state.chartOptions}
            generators={this.state.chartGenerators}
        />
        <form>
        <p>Y-Values</p>
        <input type="number" 
          name="Y-Values"
          defaultValue={this.state.search}
          onChange={this.updateSearch.bind(this)}/>
        <p>X-Values</p>
        <input type="number"
            name="X-Values"
            defaultValue={20}
            onChange={this.updateX.bind(this)}/>
        <p>Desired Equation</p>
        <input type="text"
            defaultValue="y=x^2"
            onChange={this.mathGenerate.bind(this)}/>
        </form>
        </div>

    )
}
}

export default Chart;
