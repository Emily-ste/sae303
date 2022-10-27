import moisArray from "./mois.js"

const modePaiementData = {
      labels: moisArray,
      datasets: [{
        label: 'CB',
        backgroundColor: '#E9C46A',
        data:[84.78,82.89,84.85,95.00,92.39,82.83,83.16,80.00,82.35,67.74,86.21,86.05],
        pointRadius: 7,
        pointHoverRadius: 9
      }, 
      {
        label: 'Paypal',
        backgroundColor: '#3454D1',
        data: [13.04, 3.95, 2.02, 1.25, 2.17, 5.05, 0.00, 3.16, 5.88, 18.28, 4.60, 2.33],
        pointRadius: 7,
        pointHoverRadius: 9
      },
      {
        label: 'VRT',
        backgroundColor: '#D1345B',
        data: [2.17, 13.16, 13.13, 3.75, 5.43, 12.12, 16.84, 16.84, 11.76, 13.98, 9.20, 11.63],
        pointRadius: 7,
      pointHoverRadius: 9
      }]
    }

export default modePaiementData