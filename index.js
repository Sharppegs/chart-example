import {data1, balance} from './data.js'



const dataNumbers = data1.map(day => day.amount)
const dataDays = data1.map(day => day.day)
const balanceSum = document.getElementById('balance-sum')
const weekSpend = document.getElementById('week-spend')
const remainBudget = document.getElementById('remain-budget')

let totalSpend = dataNumbers.reduce(function(totalNum, currentNum) {
  return totalNum + currentNum}
  
)
const moneyLeft = balance - totalSpend
balanceSum.textContent = `$${balance}`
weekSpend.textContent = `$${totalSpend}`
remainBudget.textContent = `$${moneyLeft.toFixed(2)}`

const data = {
    labels: dataDays,
    datasets: [{
      
      data: dataNumbers,
      backgroundColor: [
        'rgba(247, 86, 37)'
      ], 
      borderWidth: 1,
      barHoverRadius: 5,
      barHoverBackgroundColor: '#71bec9',
      borderRadius: 4, 
    }]
  };

  // config 
  const config = {
    type: 'bar',
    data,
    options: {
      onHover: (event, chartElement) => {
        if(chartElement.length === 1) {
        event.native.target.style.cursor = "pointer"
      } else {
        event.native.target.style.cursor = "default"
      }
      },
      scales: {
        y: {
          beginAtZero: true,
          display: false
        },
        x: {
            display: true,
            grid: {
                display: false
            } 
        }
      },
      plugins: {
        legend: {
            display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        tooltip: {
          displayColors: false,
          
          callbacks: {
            label: function(context) {
                let label = context.dataset.label || '';

                if (label) {
                    label += ': ';
                }
                if (context.parsed.y !== null) {
                    label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                }
                return label;
              }}         
        }}}
  };

  // render init block
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

  Chart.defaults.plugins.tooltip.yAlign = 'bottom'
  


 