// pourcentage marge e-commerce vs en ligne

import colorArray from "./color.js";

const scatterData = {
    datasets: [{
      label: 'Scatter Dataset',
      data: [{
        x: 8037059,
        y: 115602.37,
        data: 'Auvergne-Rhône-Alpes'
      }, 
      {
        x: 2813289,
        y: 53247.46,
        data: 'Bourgogne-Franche-Comté'
      }, 
      {
        x: 3336643,
        y: 66489.28,
        data: 'Bretagne'
      }, 
      {
        x: 2582522,
        y: 49799.83,
        data: 'Centre-Val de Loire'
      }, 
      {
        x: 337796,
        y: 48716.22,
        data: 'Corse'
      }, 
      {
        x: 5548090,
        y: 53885.36,
        data: 'Grand Est'
      }, 
      {
        x: 6023336,
        y: 61523.33,
        data: 'Hauts-de-France'
      }, 
      {
        x: 12246234,
        y: 116241.22,
        data: 'Île-de-France'
      }, {
        x: 3342467,
        y: 60065.99,
        data: 'Normandie'
      }, 
      {
        x: 5994336,
        y: 46635.42,
        data: 'Nouvelle-Aquitaine'
      }, 
      {
        x: 5903190,
        y: 52994.66,
        data: 'Occitanie'
      }, 
      {
        x: 3787411,
        y: 34272.47,
        data: 'Pays de la Loire'
      }, 
      {
        x: 5065723,
        y: 96483,
        data: 'Provence-Alpes-Côte d\'Azur'
      }],
      backgroundColor: colorArray,
      pointRadius: 7,
      pointHoverRadius: 9
    }],
  };

export default scatterData
