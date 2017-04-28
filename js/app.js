var canvas, ctx1,ctx2,ctx3,ctx4, W, H,chartInstance,myHistogram,myDoughnutChart,myPieChart,myLineChart;
var labels=new Array();
var values=new Array();
var colors=new Array();
var count=0,flag=0;
var grd;

function init() {

  canvas1 = document.querySelector('.myHistogram');
  ctx1 = canvas1.getContext('2d');

  canvas2 = document.querySelector('.myPieChart');
  ctx2 = canvas2.getContext('2d');

  canvas3 = document.querySelector('.myDoughnut');
  ctx3 = canvas3.getContext('2d');

  canvas4 = document.querySelector('.myLineChart');
  ctx4 = canvas4.getContext('2d');
  
  H=canvas1.height;

  Chart.defaults.global.defaultFontFamily='Rationale','Montserrat','Gloria Hallelujah';
  Chart.defaults.global.defaultFontSize=16;

  grd=ctx1.createLinearGradient(0,0,0,H);
  grd.addColorStop(0,"red");
  grd.addColorStop(0.5,"green");
  grd.addColorStop(0.8,"orange");
  grd.addColorStop(1.0,"yellow"); 
  
  ctx1.fillStyle=grd;

  labels = [1,2,3,4,5];
  colors = ["red","blue","purple","green","yellow"];
  values = [10,50,5,25,35];
  flag=1;
  pushVal();

}

function fillLabel(){

  labels = [];
  values = [];
  colors = [];

  myHistogram.destroy();
  myPieChart.destroy();
  myDoughnutChart.destroy();
  myLineChart.destroy();

  myHistogram = new Chart(ctx1,{options: {
                    responsive: false,
                    maintainAspectRatio: true
                } });
  myPieChart = new Chart(ctx2,{options: {
                    responsive: false,
                    maintainAspectRatio: true
                } });
  myDoughnutChart = new Chart(ctx3,{options: {
                    responsive: false,
                    maintainAspectRatio: true
                } });
  myLineChart = new Chart(ctx4,{options: {
                    responsive: false,
                    maintainAspectRatio: true
                } }); 

  var sub = document.querySelector('#num').value;
  for(var i=1;i<=sub;i++){
    labels.push(i);
    colors.push(getRandomColor());
    }
}

//For Generating Random Colors
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function pushVal(){
  
  if( (count++ > document.querySelector('#num').value) && flag==0)
  alert("Max number of data already present");

  else{
  flag=0;  
  var xVal = (Number)(document.getElementById('y').value);
  values.push(xVal);

  // For Histogram
  myHistogram = new Chart(ctx1, {
    type: 'bar',

    data : {
    labels:labels,  // X-Axis
    datasets: [
        {
            label: "Histogram",
            fill: true,
            backgroundColor: grd,
            hoverBackgroundColor: grd,
            pointBackgroundColor: "#fff",
            highlightColor:grd,
           
            data: values   // Y-Axis
        }
      ]
    },      

    options: {
                    responsive: false,
                    maintainAspectRatio: true
                }                        
});


  // For Pie Chart
  myPieChart = new Chart(ctx2,{
    type: 'pie',
    data: {
    labels: labels,
    datasets: [
        {
            label: "Pie Chart",
            data: values,
            backgroundColor: colors,
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
    },

    options: {
                    responsive: false,
                    maintainAspectRatio: true
                } 

});

  //For Doughnut Chart
  myDoughnutChart = new Chart(ctx3, {
    type: 'doughnut',
    data: {
    labels: labels,
    datasets: [
        {
            label: "Doughnut Chart",
            data: values,
            backgroundColor: colors,
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
    },

    options: {
                    responsive: false,
                    maintainAspectRatio: true
                }

});


  //For Line Chart
  myLineChart = Chart.Line(ctx4, {
    type: 'bar',

    data : {
    labels:labels,  // X-Axis
    datasets: [
        {
            label: "Line Chart",
            fill: false,
            lineTension: 0.1,
            pointRadius: 1,
            pointHitRadius: 10,
            spanGaps: false,
            borderColor: "rgba(75,192,192,1)",
            backgroundColor: grd,
            pointHoverBackgroundColor: 'blue',
            pointBackgroundColor: "#fffff",
            highlightColor:grd,
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            data: values   // Y-Axis
        }
    ]
    },

    options: {
                    responsive: false,
                    maintainAspectRatio: true
                }

});
  

}
  
}
