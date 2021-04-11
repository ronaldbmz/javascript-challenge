// from data.js
var tableData = data;

// view the ufo data on console
//console.log(tableData);

var rows = tableData;

// function to create text into CamelCase
function toCamelCase(str) {
    return str
        .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
        .replace(/^(.)/, function($1) { return $1.toUpperCase(); });
}

// testing camelcase function
//console.log(toCamelCase("benton"));

	
html = "";

for (var i = 0; i < rows.length; i++) {
html+="<tr>";
html+="<td>"+rows[i].datetime+"</td>";
html+="<td>"+toCamelCase(rows[i].city)+"</td>";
html+="<td>"+rows[i].state.toUpperCase()+"</td>";
html+="<td>"+rows[i].country.toUpperCase()+"</td>";
html+="<td>"+toCamelCase(rows[i].shape)+"</td>";
html+="<td>"+rows[i].durationMinutes+"</td>";
html+="<td>"+rows[i].comments+"</td>";
html+="</tr>";

}

// view the ufo data on console
//console.log(html);

//to send html tags and data to html frontend
d3.select("table>tbody").html(html);

// ************* Showing data based on date filter ********************
//Date filtering function
function filterDate(data, inputValue) {

	// Select the input date element and get the raw HTML node
	var inputDate = d3.select("#datetime");
	// Get the date value property of the input element
	var inputDateValue = inputDate.property("value");
	//console.log(inputDateValue);

	if (inputDateValue === "") {
		return data;
	} else {
		 return data.datetime === inputDateValue;
	}

}

function filterCity(data, inputValue) {

	// Select the input city element and get the raw HTML node
	var inputCity = d3.select("#city");
	// Get the city value property of the input element
	var inputCityValue = inputCity.property("value");
	//console.log(inputCityValue);

	if (inputCityValue === "") {
		return data;
	} else {
		 return data.city.toUpperCase() === inputCityValue.toUpperCase();
	}

}

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Complete the event handler function for the form
function runEnter() {
	
	// Prevent the page from refreshing
	d3.event.preventDefault();
	
	// Use the form input to filter the data
    var rows = tableData.filter(filterDate);
    rows = rows.filter(filterCity);
	
	
	html = "";
	
	for (var i = 0; i < rows.length; i++) {
	html+="<tr>";
	html+="<td>"+rows[i].datetime+"</td>";
	html+="<td>"+toCamelCase(rows[i].city)+"</td>";
	html+="<td>"+rows[i].state.toUpperCase()+"</td>";
	html+="<td>"+rows[i].country.toUpperCase()+"</td>";
	html+="<td>"+toCamelCase(rows[i].shape)+"</td>";
	html+="<td>"+rows[i].durationMinutes+"</td>";
	html+="<td>"+toCamelCase(rows[i].comments)+"</td>";
	html+="</tr>";

	}
	d3.select("table>tbody").html(html);
 

 
	
};


