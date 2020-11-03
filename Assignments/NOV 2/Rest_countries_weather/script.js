// card-deck
var container = document.createElement("div")
container.setAttribute("class", "card-deck")

// request from rest countries api..
async function makeRequest() {
    try {
        var country_req = await fetch("https://restcountries.eu/rest/v2/all");
        var parsed_countryreq = await country_req.json();
        // getting the deatails of each country
        for (var i in parsed_countryreq) {
            console.log(parsed_countryreq[i])
            var name = parsed_countryreq[i].name;
            var capital = parsed_countryreq[i].capital;
            var region = parsed_countryreq[i].region;
            var code = parsed_countryreq[i].alpha3Code;
            var lat = parsed_countryreq[i].latlng[0];
            var long = parsed_countryreq[i].latlng[1];
            var flag_url = parsed_countryreq[i].flag;
            console.log(name, capital, region, code, lat, long, flag_url)
    
            var column = document.createElement("div")
            column.setAttribute("class", "col-sm-4")
            // creating a card for aech country
            var card = document.createElement("div")
            card.setAttribute("class", "card mb-3 mt-3")
            card.style.height = "550px";
            card.style.borderBottomLeftRadius="100px";
            card.style.borderBottomRightRadius="100px";

            // card header
            var card_header = document.createElement("h4")
            card_header.setAttribute("class", "card-header")
            card_header.innerHTML = name;
            card_header.style.textAlign = "center";
            // flag img
            var image = document.createElement("img")
            image.setAttribute("src", flag_url)
            image.setAttribute("class", "card-img-top")
            // card body
            var card_body = document.createElement("div")
            card_body.setAttribute("class", "card-body")
            card_body.style.textAlign = "center";
            var p1 = document.createElement("h5")
            p1.setAttribute("class", "card-text")
            p1.innerHTML = "Capital : " + capital;
            var p2 = document.createElement("h5")
            p2.setAttribute("class", "card-text")
            p2.innerHTML = "Region : " + region;
            var p3 = document.createElement("h5")
            p3.setAttribute("class", "card-text")
            p3.innerHTML = "Country Code : " + code;
            var p4 = document.createElement("h5")
            p4.setAttribute("class", "card-text")
            p4.innerHTML = "Lat,Long : " + lat + "," + long;
            // click for weather button
            var button = document.createElement("button")
            button.setAttribute("type", "button")
            button.setAttribute("class", "btn btn-primary mt-1")
            button.setAttribute("data-toggle", "modal")
            button.setAttribute("data-target", "#exampleModal" + i)
            button.innerHTML = "Click for Weather";
            button.setAttribute("onclick", "getWeather(" + lat + "," + long + "," + i+")");
            // appending everything
            card_body.append(p1, p2, p3, p4, button)
            card.append(card_header, image, card_body)
            column.append(card)
            container.append(column)

        }
    }


    catch (error) {
        console.log("Error occurred")
    }
}

// function to fetch details from weather api
async function getWeather(a, b, i) {
    var weather_req = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + a + "&lon=" + b + "&appid=267f91f8f416ec4849e7432d9d7324e2");
    var parsed_weather = await weather_req.json();
    // details from weather api
    var max_temp = parsed_weather["main"].temp_max;
    var min_temp = parsed_weather["main"].temp_min;
    var temp = parsed_weather["main"].temp;
    var humidity = parsed_weather["main"].humidity;
    var pressure = parsed_weather["main"].pressure;
    var climate = parsed_weather["weather"][0].description;
    var wind = parsed_weather["wind"].speed;
    console.log(max_temp)
    // creating modal
    var modal = document.createElement("div")
    modal.setAttribute("class", "modal fade")
    modal.setAttribute("id", "exampleModal" + i)
    modal.setAttribute("tabindex", "-1")
    modal.setAttribute("aria-labelledby", "exampleModalLabel")
    modal.setAttribute("aria-hidden", "true")
    var modal_dialogue = document.createElement("div")
    modal_dialogue.setAttribute("class", "modal-dialog")
    var modal_content = document.createElement("div")
    modal_content.setAttribute("class", "modal-content")
    // modal-header
    var modal_header = document.createElement("div")
    modal_header.setAttribute("class", "modal-header")
    var modal_title = document.createElement("h5")
    modal_title.setAttribute("class", "modal-title")
    modal_title.setAttribute("id", "exampleModalLabel")
    modal_title.innerHTML = "Weather details";
    // modal-body
    var modal_body = document.createElement("div")
    modal_body.setAttribute("class", "modal-body")
    // content of the modal
    var ul = document.createElement("ul")
    ul.setAttribute("class", "list-group list-group-flush")
    var item1 = document.createElement("li")

    item1.setAttribute("class", "list-group-item")
    item1.innerHTML = "Climate :" + climate;

    var item2 = document.createElement("li")
    item2.setAttribute("class", "list-group-item")
    item2.innerHTML = "Max Temp :" + max_temp;

    var item3 = document.createElement("li")
    item3.setAttribute("class", "list-group-item")
    item3.innerHTML = "Min Temp :" + min_temp;

    var item4 = document.createElement("li")
    item4.setAttribute("class", "list-group-item")
    item4.innerHTML = "Humidity :" + humidity;

    var item5 = document.createElement("li")
    item5.setAttribute("class", "list-group-item")
    item5.innerHTML = "Pressure :" + pressure;

    var item6 = document.createElement("li")
    item6.setAttribute("class", "list-group-item")
    item6.innerHTML = "Temperature :" + temp;

    var item7 = document.createElement("li")
    item7.setAttribute("class", "list-group-item")
    item7.innerHTML = "Wind Speed :" + wind;
    // modal-footer
    var modal_footer = document.createElement("div")
    modal_footer.setAttribute("class", "modal-footer")
    var close_button = document.createElement("button")
    close_button.setAttribute("type", "button")
    close_button.setAttribute("class", "btn btn-primary")
    close_button.setAttribute("data-dismiss", "modal")

    close_button.innerHTML = "Close";

    // appending everything
    modal_header.append(modal_title)
    ul.append(item1, item2, item3, item4, item5, item6, item7)
    modal_body.append(ul)
    modal_footer.append(close_button)
    modal_content.append(modal_header, modal_body, modal_footer)
    modal_dialogue.append(modal_content)
    modal.append(modal_dialogue)
    document.body.append(modal)
}


makeRequest()
document.body.append(container)

