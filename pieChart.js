function drawChart() 
	{
		var data = google.visualization.arrayToDataTable
			([
				['Task', 'Hours per Day'],
				['Jedzenie', 2],
				['Mieszkanie', 1],
				['Transport', 1],
				['Opieka zdrowotna', 1],
				['Ubranie', 5],
				['Higiena', 1],
				['Dzieci', 1],
				['Rozrywka', 4],
				['Wycieczka', 6],
				['Szkolenia', 1],
				['Książki', 3],
				['Oszczędności', 1],
				['Na złotą jesień, czyli emeryturę', 2],
				['Spłata długów', 1],
				['Darowizna', 1],
				['Inne wydatki', 1]
			]);

				// Optional; add a title and set the width and height of the chart
		var options = {'title':'Procentowy rozkład wydatków', 'width':800, 'height':800, tooltip:{text:'percentage'},
                           'is3D': true};

				// Display the chart inside the <div> element with id="piechart"
		var chart = new google.visualization.PieChart(document.getElementById('piechart'));
				chart.draw(data, options);
	}