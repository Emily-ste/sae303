import scatterData from './data/ca-habitant.js'
import caNh100Data from './data/ca-nh-100.js';
import caLivraisonData from './data/ca-livraison.js';
import magEcommData from './data/mag-eco.js';
import modePaiementData from './data/mode-paiement.js';

const scatter = new Chart(
    document.getElementById('chartHabitant'),
    {
        type: 'scatter',
        data: scatterData,
        options: {
        responsive: true,
        plugins: {
            legend: {
            position: 'hide',
            },
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
    );

const radar = new Chart(
    document.getElementById('chartCaNh100'),
    {
    type: 'radar',
    data: caNh100Data,
    options: {
      responsive: true,
      plugins: {
      },
      scales: {
        x: {
          display: true,
        },
        y: {
          display: true,
        }
      }
    },
  });


  const caCoutLiv = new Chart(
    document.getElementById('chartCaCout'),
    {
    type: 'doughnut',
    data: caLivraisonData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      }
    },
  });

  let  delayed
  const magEcomm = new Chart(
    document.getElementById('chartMagEcomm'),
    {
    type: 'bar',
    data: magEcommData,
    options: {
      animation: {
        onComplete: () => {
          delayed = true;
        },
        delay: (context) => {
          let delay = 0;
          if (context.type === 'data' && context.mode === 'default' && !delayed) {
            delay = context.dataIndex * 300 + context.datasetIndex * 100;
          }
          return delay;
        },
      },
      responsive: true,
      plugins: {
        tooltip: {
          callbacks: {
              label: (context) => {
              return '% ' + context.dataset.label
              }
          }
        }
      },
      scales: {
        x: {
          display: true,
        },
        y: {
          display: true,
        }
      }
    },
  });


  const modePaiment =  new Chart(
    document.getElementById('chartModeLivraison'),
    {
    type: 'line',
    data: modePaiementData,
    options: {
      animations: {
        y: {
          easing: 'easeInOutElastic',
          from: (ctx) => {
            if (ctx.type === 'data') {
              if (ctx.mode === 'default' && !ctx.dropped) {
                ctx.dropped = true;
                return 0;
              }
            }
          }
        }
      },
      responsive: true,
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
        }
      },
      plugins: {
        legend: {
          position: 'top',
        },
    }
  },
  animations: {
    y: {
      easing: 'easeInOutElastic',
      from: (ctx) => {
        if (ctx.type === 'data') {
          if (ctx.mode === 'default' && !ctx.dropped) {
            ctx.dropped = true;
            return 0;
          }
        }
      }
    }
  },
});