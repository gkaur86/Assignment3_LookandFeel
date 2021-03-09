//Dummy CRUD functions

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.ftc.gov/v0/dnc-complaints?api_key=6M67TJKni6Xa8tHyv0FGQppKQ2ntfXYFygc6uWUX&created_date_from="2019-12-01 00:00:00"&created_date_to="2020-12-31 00:00:00"&state="Florida"', true)

request.onload = function() {
  // Begin accessing JSON data here
    var data = JSON.parse(this.response);
}

// Send request
request.send()