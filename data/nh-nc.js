//Nombre habitant / nombre commande
import regionArray from "./region.js"

const nhNcData = {
    labels: regionArray,
    datasets: [
      {
        label: 'REMPLIR CA',
        data: [
            69.52,
            24.33,
            28.86,
            22.33,
            2.92,
            47.99,
            52.10,
            105.9,
            28.91,
            51.85,
            51.06,
            32.76,
            43.82
        ],
        backgroundColor: 'rgb(100, 50, 100, 0.2)',
        borderColor: 'rgba(0, 2, 50, 0.8)',
      },
    ]
  }

  export default nhNcData