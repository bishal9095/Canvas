import React, { useRef, useEffect } from 'react';
import './App.css';
import Chart from 'chart.js/auto';
import Input from './Components/Input';

function App() {
  const chartRef = useRef(null);
  // const chartInstanceRef = useRef(null); // keep a reference to the Chart instance

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    
    chartRef.current=new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Sales',
            data: [800, 150, 500, 250, 600, 350],
          },
        ],
      },
    });
  }, []);
  return (
    <div className="my-3 py-3 App">
      <Input/>
      <h2 className='my-3 py-3'>Output Graph</h2>
      <canvas ref={chartRef} />
    </div>
  );
}

export default App;
