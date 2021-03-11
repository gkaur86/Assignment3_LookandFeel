var jsonfile = [
 {
   "Month": "Dec 2019",
   "RoboCalls": 14642,
   "LiveCall": 6538,
   "Total": 21180
 },
 {
   "Month": "Jan 2019",
   "RoboCalls": 18514,
   "LiveCall": 6265,
   "Total": 24779
 },
 {
   "Month": "Feb 2019",
   "RoboCalls": 15998,
   "LiveCall": 6068,
   "Total": 22066
 },
 {
   "Month": "Mar 2019",
   "RoboCalls": 11786,
   "LiveCall": 4533,
   "Total": 16319
 },
 {
   "Month": "Apr 2019",
   "RoboCalls": 7817,
   "LiveCall": 3207,
   "Total": 11024
 },
 {
   "Month": "May 2019",
   "RoboCalls": 9028,
   "LiveCall": 3268,
   "Total": 12296
 },
 {
   "Month": "Jun 2019",
   "RoboCalls": 14549,
   "LiveCall": 5051,
   "Total": 19600
 },
 {
   "Month": "Jul 2019",
   "RoboCalls": 18717,
   "LiveCall": 6750,
   "Total": 25467
 },
 {
   "Month": "Aug 2019",
   "RoboCalls": 26114,
   "LiveCall": 7957,
   "Total": 34071
 },
 {
   "Month": "Sep 2019",
   "RoboCalls": 26320,
   "LiveCall": 8060,
   "Total": 34380
 },
 {
   "Month": "Oct 2019",
   "RoboCalls": 26816,
   "LiveCall": 7948,
   "Total": 34764
 },
 {
   "Month": "Nov 2019",
   "RoboCalls": 21130,
   "LiveCall": 6671,
   "Total": 27801
 },
 {
   "Month": "Dec 2020",
   "RoboCalls": 20470,
   "LiveCall": 5775,
   "Total": 26245
 }
]


var Months = jsonfile.map(function(e) {
   return e.Month;
});

var Robo = jsonfile.map(function(e) {
   return e.RoboCalls;
});


var live = jsonfile.map(function(e) {
   return e.LiveCall;
});

var barchart = {
  labels: Months,
  datasets: [{
        label: 'Robo Calls',
        backgroundColor: window.chartColors.red,
        data: Robo
      }, {
        label: 'Live Callers',
        backgroundColor: window.chartColors.blue,
        data: live
      }

]

    };


var ctx = document.getElementById('myChart').getContext('2d');
var stackedBar = new Chart(ctx, {
    type: 'bar',
    data: barchart,
        options: {
          title: {
            display: true,
            text: 'SPAM Calls in Florida'
          },
    tooltips: {
      mode: 'label',
      callbacks: {
        footer: (tooltipItems, data) => {
          let total = tooltipItems.reduce((a, e) => a + parseInt(e.yLabel), 0);
          return 'Total: ' + total;
        }
      }
    },
          responsive: true,
          scales: {
            xAxes: [{
              stacked: true,
            }],
            yAxes: [{
              stacked: true
            }]
          }
        }
});