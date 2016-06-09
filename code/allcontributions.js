      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Project', 'Bugs', 'New Features', 'Sub-tasks', 'Improvement', 'Mis-report', 'Other'],
          ['Cassandra', 0, 0, 0, 0, 0, 0],
          ['Mesos', 0, 0, 0, 0, 0, 0],
          ['ND4J', 3, 0, 0, 0, 1, 1],
          ['Spark', 1, 1, 1, 0, 0, 0],
          ['Zeppelin', 1, 1, 0, 1, 0, 0]
        ]);

        var options = {
          chart: {
            title: 'Infrastructure Contributions',
          },
          bars: 'vertical',
          vAxis: {format: 'decimal'},
          height: 400,
          colors: ['#FF0000', '#0000FF', '#FFFF00', '#008000', '#800080', '#FFA500']
        };

        var chart = new google.charts.Bar(document.getElementById('chart_div'));

        chart.draw(data, google.charts.Bar.convertOptions(options));

        var btns = document.getElementById('btn-group');

        btns.onclick = function (e) {

          if (e.target.tagName === 'BUTTON') {
            options.vAxis.format = e.target.id === 'none' ? '' : e.target.id;
            chart.draw(data, google.charts.Bar.convertOptions(options));
          }
        }
      }