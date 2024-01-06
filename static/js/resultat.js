const ctx = document.getElementById('myChart');
var queryString = window.location.search;
console.log('QueryString:', queryString);
var urlParams = new URLSearchParams(queryString);
var sumGroups = JSON.parse(decodeURIComponent(urlParams.get('data')));
console.log('sumGroups:', sumGroups);
resultat = sumGroups;
console.log(resultat);
const data = {
  labels: [
    'Expertise',
    'Management',
    'Autonomie',
    'Stabilité',
    'Créativité',
    'Soucis des autres',
    'Challenge',
    'Style de vie'
  ],
  datasets: [{
    label: 'Vos résultats',
    data: resultat,
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
};
const config = {
  type: 'radar',
  data: data,
  options: {
    scales:{
      r:{
        suggestedMin:5,
        suggestedMax:25
      }
    },
    responsive: true, 
    maintainAspectRatio: true,
    elements: {
      line: {
        borderWidth: 3 
      }
    }
  }
};
const myChart = new Chart(ctx, config);
function refaire() {
    window.location.href = '/';
}