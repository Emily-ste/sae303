// CA / habitant * 100
import regionArray from "./region.js"

const caNh100Data = {
    labels: regionArray,
    datasets: [
      {
        label: '€ pour 100\/hab',
        data: [
            1.44,
            1.89,
            1.99,
            1.93,
            14.42,
            0.97,
            1.02,
            0.95,
            1.80,
            0.78,
            0.90,
            0.90,
            1.90
        ],
        backgroundColor: 'rgba(209, 52, 91, 0.8)',
        bordercolor: '#3454D1',
        pointRadius: 5,
        pointHoverRadius: 7
      },
    ]
  }

  export default caNh100Data