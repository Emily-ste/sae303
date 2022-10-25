import scatterData from './data/marge.js'

const scatter = new Chart(
    document.getElementById('chartMarge'),
    {
        type: 'scatter',
        data: scatterData,
        options: {
        responsive: true,
        plugins: {
            legend: {
            position: 'top',
            },
            title: {
            display: true,
            text: 'nombre de vente par région'
            },
            tooltip: {
            callbacks: {
                label: (context) => {
                return context.raw.data
                }
            }
            }
        }
        },
    });

