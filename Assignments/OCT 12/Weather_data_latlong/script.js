var lat = [];
var long = [];
var req = new XMLHttpRequest();
req.open('GET', 'https://restcountries.eu/rest/v2/all', true);
req.send()
req.onload = function () {
    var data = JSON.parse(this.response);
    for (var i in data) {
        lat.push(data[i].latlng[0]);   //collects latitude
        long.push(data[i].latlng[1]);  //collects longitude
    }
    console.log(data)
    console.log(long);
    for (var i=0;i<lat.length;i++) {
        var request = new XMLHttpRequest();
        request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat[i] + '&lon=' + long[i] + '&appid=8cf4124d561853ea19987b2ae07e8560', true);
        request.send();
        request.onload=function () {
            var d = JSON.parse(this.response);
            console.log(d);
        }
        
        
    }
}


