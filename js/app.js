var canvas, ctx1,ctx2,ctx3,ctx4, W, H,myHistogram,myDoughnutChart,myPieChart,myLineChart,xVal,sub;
var labels=new Array();
var values=new Array();
var colors=new Array();
var count=0;
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

  firstTime();
}


/*Reset values when new Graph is to be created*/
function fillLabel(){
  myHistogram.destroy();
  myPieChart.destroy();
  myDoughnutChart.destroy();
  myLineChart.destroy();

  labels = [];
  values = [];
  colors = []; 
  count=0;

  sub=document.querySelector("#num").value;
  
  for(var i=1;i<=sub;i++){
    labels.push(i);
    values.push(i);
    colors.push(getRandomColor());
  }

  alert("Please enter the "+sub+" values below one by one");
  /* For creating an initial example containing entered number of values*/
  firstTime();
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

/* For Dynamic Value update */
function addData(){

  myHistogram.update();
  myPieChart.update();
  myDoughnutChart.update();
  myLineChart.update();
}


/*For pushing new data into the graph */
function pushVal() {
  count++;
  
    if(count==1){

    labels = [];
    values = [];
    colors = [];  

    myHistogram.destroy();
    myPieChart.destroy();
    myDoughnutChart.destroy();
    myLineChart.destroy();  
      
    xVal = (Number)(document.getElementById('y').value);
    values.push(xVal);

    labels.push(count);
    colors.push(getRandomColor());

    firstTime();
    }

    else if( (count > document.querySelector('#num').value))
    alert("Max number of data already present");

    else{

    xVal = (Number)(document.getElementById('y').value);
    values.push(xVal);

    labels.push(count);
    colors.push(getRandomColor());

    addData();
  }
  
}


/*For the first time when the graph is created*/
function firstTime(){

  Chart.defaults.global.responsive = false;
  Chart.defaults.global.maintainAspectRatio = true;
  

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
