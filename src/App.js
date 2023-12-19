import logo from './logo.svg';
import './App.css';
import Chart from "chart.js/auto";
import { Line } from 'react-chartjs-2';
import { CategoryScale } from "chart.js";
import { useState } from 'react';
export const Data = [
  {
    id: 1,
    year: 2016,
    userGain: 80000
   
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677
   
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888
   
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000
   
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300
   
  }
];

function App() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
       
       
      }
    ]
  }) ;

  return (
    <div className="App">
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            },
            

          }
        }}
      />


    </div>
  );
}

export default App;
