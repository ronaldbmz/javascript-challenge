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

console.log(toCamelCase("benton"));

	
html = "";

for (var i = 0; i < rows.length; i++) {
html+="<tr>";
html+="<td>"+rows[i].datetime+"</td>";
html+="<td>"+rows[i].city+"</td>";
html+="<td>"+rows[i].state+"</td>";
html+="<td>"+rows[i].country+"</td>";
html+="<td>"+rows[i].shape+"</td>";
html+="<td>"+rows[i].durationMinutes+"</td>";
html+="<td>"+rows[i].comments+"</td>";
html+="</tr>";

}

// view the ufo data on console
//console.log(html);

//to send html tags and data to html frontend
d3.select("table>tbody").html(html);



