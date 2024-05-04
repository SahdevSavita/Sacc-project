$(document).ready(function () {
  // $('.qa-noida > ul > li').click(function () {
  //     $(this).parent().toggleClass('open-qa')
  // });

  $('.agent-box').click(function () {
    $('.input-block').toggleClass('open-input');
  });
  $('.agent-box2').click(function () {
    $('.input-block2').toggleClass('open-input2');
  });
  $('.agent-box3').click(function () {
    $('.input-block3').toggleClass('open-input3');
  });

  $('.logo-box .fa-bars').click(function () {
    $('#header-main').toggleClass('open-menu');
  });

  $('.intrection-button .int-btn1').click(function () {
    $('.intrection-button .int-btn1.active').removeClass('active')
    $(this).addClass('active')
  });
  $('.intrection-button .int-btn1:first-child').addClass('active');


  $('.intrection-button .int-btn2').click(function () {
    $('.intrection-button .int-btn2.active').removeClass('active2')
    $(this).addClass('active')
  });
  $('.intrection-button .int-btn2:first-child').addClass('active2');



  const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


  var ctx2 = document.getElementById('myChart2').getContext('2d');
  var myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      datasets: [{
        label: 'apples',
        data: [12, 19, 3, 17, 6, 3, 7],
        backgroundColor: "rgba(153,255,51,0.6)"
      }, {
        label: 'oranges',
        data: [2, 29, 5, 5, 2, 3, 10],
        backgroundColor: "rgba(255,153,0,0.6)"
      }]
    }
  });


  // Get the modal
  var ebModal = document.getElementById('mySizeChartModal');

  // Get the button that opens the modal
  var ebBtn = document.getElementById("mySizeChart");


  // Get the <span> element that closes the modal
  var ebSpan = document.getElementsByClassName("ebcf_close")[0];

  // When the user clicks the button, open the modal 
  ebBtn.onclick = function () {
    ebModal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  ebSpan.onclick = function () {
    ebModal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == ebModal) {
      ebModal.style.display = "none";
    }
  }



  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {


    var data = google.visualization.arrayToDataTable([
      ['Categories', 'Hours per Day'],
      ['Category 1', 300+Math.random()*300],
      ['Category 2', 300+Math.random()*300],
      ['Category 3', 300+Math.random()*300],
      ['Category 4', 300+Math.random()*300],
      ['Category 5', 300+Math.random()*300],
      ['Category 6', 300+Math.random()*300]
    ]);

    var options = {
      colors:["#ff3300","#ff9933", "#ffcc00","#ff8800", "#99ff33", "#009900"],
      legend:"none"
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    var chart2 = new google.visualization.PieChart(document.getElementById('piecharttwo'));

    chart.draw(data, options);
    chart2.draw(data, options);

  }

});