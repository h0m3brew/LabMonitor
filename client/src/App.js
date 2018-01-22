import React, { Component } from 'react';
import './App.css'
import NodeCard from './components/NodeCard';

const INTERVAL_SECONDS = 2;
const MAX_DATA = 10;

class App extends Component {
  // initialize state as an object with an empty array
  state = { data: [] };

  componentDidMount() {
    setInterval(() => {
      fetch('/live-data')
        .then(res => {
          if (res.ok) return res.json();
          else throw new Error('Could not connect');
        })
        .then(latestData => {
          // console.log(JSON.stringify(latestData, null, '\t'));
          const last = this.state.data[this.state.data.length - 1];
          // console.log('LATEST: ' + JSON.stringify(latestData));
          // console.log('LAST: ' + JSON.stringify(last));
          if (!(JSON.stringify(latestData) === JSON.stringify(last))) {
            console.log('New data detected. Updating state...')
            // clone the original state
            const newState = Object.assign({}, this.state);
            // add the new data
            newState.data.push(latestData);
            // don't store in the state more than max amount of datapoints
            if (newState.data.length > MAX_DATA)
              newState.data.shift();
            return this.setState({ newState });
          } else {
            console.log('No new data.')
          }
        })
        .catch(err => {
          console.log(err);
        });
    }, INTERVAL_SECONDS * 1000);
  }
  // something here about generating the Nodes dynamically perhaps

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SHARP LABORATORY</h1>
        </header>
        <div className="container">
          {/* {
            this.state.data.forEach(node => {
              // make a node
              <NodeCard title={`Node ${node.id}`}
                ownerInfo={{
                  name: node.owner,
                }}
                description={node.description}
              />


            })
          } */}
          <NodeCard title="Node 1"
            ownerInfo={{
              name: "Andrew Jong",
              email: "andrew.jong@nasa.gov"
            }}
            description="This node is monitoring Andrew's lunchbox, to make sure evil ants don't get to it. Andrew's lunchbox has crackers which are known to be explosive."
            sensorData={[
              {
                status: "Good",
                chartData: {
                  // probably for labels later we can read from props
                  labels: ["25s", "20s", "15s", "10s", "5s", "0s"],
                  datasets: [{
                    label: 'Temperature over time',
                    // probably for data later we can read from props
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1
                  }]
                },
                chartOptions: {
                  legend: {
                    display: true,
                    position: 'top'
                  },
                  scales: {
                    yAxes: [{
                      ticks: {
                        beginAtZero: true
                      }
                    }]
                  },
                }
              },
              {
                status: "WARNING",
                chartData: {
                  // probably for labels later we can read from props
                  labels: ["25s", "20s", "15s", "10s", "5s", "0s"],
                  datasets: [{
                    label: 'Gas over time',
                    // probably for data later we can read from props
                    data: [8, 19, 10, 5, 18, 42],
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderColor: 'rgba(99,190,132,1)',
                    borderWidth: 1
                  }]
                },
                chartOptions: {
                  legend: {
                    display: true,
                    position: 'top'
                  },
                  scales: {
                    yAxes: [{
                      ticks: {
                        beginAtZero: true
                      }
                    }]
                  },
                }
              },
              {
                status: "Good",
                chartData: {
                  // probably for labels later we can read from props
                  labels: ["25s", "20s", "15s", "10s", "5s", "0s"],
                  datasets: [{
                    label: 'Vibration over time',
                    // probably for data later we can read from props
                    data: [15, 14, 19, 18, 25, 28],
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderColor: 'rgba(80,100,190,1)',
                    borderWidth: 1
                  }]
                },
                chartOptions: {
                  legend: {
                    display: true,
                    position: 'top'
                  },
                  scales: {
                    yAxes: [{
                      ticks: {
                        beginAtZero: true
                      }
                    }]
                  },
                }
              },
            ]}
          />

          <NodeCard title="Node 2"
            ownerInfo={{
              name: "George Gorospe",
              email: "george.s.gorospe@nasa.gov"
            }}
            description="This node is monitoring George's lunchbox, to make sure it doesn't spoil. George's lunchbox is actually a squircle, so it's a lunchsquircle."
            sensorData={[
              {
                status: "Good",
                chartData: {
                  // probably for labels later we can read from props
                  labels: ["25s", "20s", "15s", "10s", "5s", "0s"],
                  datasets: [{
                    label: 'Temperature over time',
                    // probably for data later we can read from props
                    data: [5, 3, 13, 20, 9, 3],
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1
                  }]
                },
                chartOptions: {
                  legend: {
                    display: true,
                    position: 'top'
                  },
                  scales: {
                    yAxes: [{
                      ticks: {
                        beginAtZero: true
                      }
                    }]
                  },
                }
              },
              {
                status: "Good",
                chartData: {
                  // probably for labels later we can read from props
                  labels: ["25s", "20s", "15s", "10s", "5s", "0s"],
                  datasets: [{
                    label: 'Gas over time',
                    // probably for data later we can read from props
                    data: [15, 19, 10, 5, 18, 18],
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderColor: 'rgba(99,190,132,1)',
                    borderWidth: 1
                  }]
                },
                chartOptions: {
                  legend: {
                    display: true,
                    position: 'top'
                  },
                  scales: {
                    yAxes: [{
                      ticks: {
                        beginAtZero: true
                      }
                    }]
                  },
                }
              },
              {
                status: "Good",
                chartData: {
                  // probably for labels later we can read from props
                  labels: ["25s", "20s", "15s", "10s", "5s", "0s"],
                  datasets: [{
                    label: 'Vibration over time',
                    // probably for data later we can read from props
                    data: [25, 14, 19, 18, 10, 28],
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderColor: 'rgba(80,100,190,1)',
                    borderWidth: 1
                  }]
                },
                chartOptions: {
                  legend: {
                    display: true,
                    position: 'top'
                  },
                  scales: {
                    yAxes: [{
                      ticks: {
                        beginAtZero: true
                      }
                    }]
                  },
                }
              },
            ]}
          />
        </div>
      </div>
    );
  }
}

export default App;
