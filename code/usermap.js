      google.charts.load('current', {'packages':['geochart']});
      google.charts.setOnLoadCallback(drawMarkersMap);

      function drawMarkersMap() {

        var data = google.visualization.arrayToDataTable([
        ['City',   'Population', 'Area'],
        ['Pune',      10,    1],
        ['Eugene',     10,    1],
        ['Urbana',    20,     1],
        ['Tokyo',   20,     1],
        ['Los Angeles',     10,     1],
        ['DC',   10,     1],
        ['Rio De Janrio',  10,     1],
        ['China', 10,      1],
        ['Rome',     10,      1],
        ['Seoul',  10,      1],
        ['Davis',  10,      1],
        ['Berkeley',  20,      1],
        ['San Diego',  20,      1],
        ['Pasadena',  20,      5],
        ['San Jose',  20,      2],
        ['Michigan', 20, 1]
      ]);



				var options = {
        	displayMode: 'markers',
        	colorAxis: {colors: ['green', 'blue']}
      	};

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }