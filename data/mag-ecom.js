const magEcomm = new Chart(
    document.getElementById('myChart5'),
    {
    type: 'bar',
    data: livraison,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Radar Chart'
        }
      },
      scales: {
        x: {
          display: true,
          //stacked: true
        },
        y: {
          display: true,
          //stacked: true,
          type: 'logarithmic',
        }
      }
    },
  });

  export default magEcommData