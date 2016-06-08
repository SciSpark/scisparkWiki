      google.charts.load('current', {'packages':['timeline']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var container = document.getElementById('timeline');
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'Contribution' });
        dataTable.addColumn({ type: 'string', id: 'Type' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        dataTable.addRows([
          [ 'Contributions', 'ND4J', new Date(2015, 6, 15),  new Date(2015, 6, 15) ],
          [ 'Contributions', 'ND4J', new Date(2015, 7, 11),  new Date(2015, 7, 11) ],
          [ 'Contributions', 'ND4J', new Date(2015, 7, 20),  new Date(2015, 7, 20) ],
          [ 'Contributions', 'ND4J', new Date(2015, 7, 24),  new Date(2015, 7, 24) ],
          [ 'Contributions', 'ND4J', new Date(2015, 8, 5),  new Date(2015, 8, 5) ],
          [ 'Contributions', 'Spark', new Date(2015, 3, 15),  new Date(2015, 3, 15) ],
          [ 'Contributions', 'Spark', new Date(2016, 3, 3),  new Date(2016, 3, 3) ],
          [ 'Contributions', 'Spark', new Date(2015, 7, 8),  new Date(2015, 7, 8) ],
          [ 'Contributions', 'Zeppelin', new Date(2015, 6, 24),  new Date(2015, 6, 24) ],
          [ 'Contributions', 'Zeppelin', new Date(2016, 3, 1),  new Date(2016, 3, 1) ],
          [ 'Contributions', 'Zeppelin', new Date(2016, 3, 3),  new Date(2016, 3, 3) ],]);
          
				var options = {
          timeline: { groupByRowLabel: true },
          colors: ['#FF0000', '#0000FF', '#FFFF00']
    		};

        chart.draw(dataTable, options);
      }