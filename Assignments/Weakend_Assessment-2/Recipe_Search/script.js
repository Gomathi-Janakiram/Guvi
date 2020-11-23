

var rest_api = "https://api.edamam.com/search?q=chicken&app_id=0d45ec66&app_key=7c61a7bf72c00b9671c90a72e0897475&from=0&to=3&health=alcohol-free";
var proxy_str = "https://cors-anywhere.herokuapp.com/";

function makeRequest(method, url) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open(method, url, true);
        req.send();
        req.onload = function () {
            if (req.status === 200) {
                resolve(JSON.parse(this.response))
            } else {
                reject({ message: req.statusText })
            }
        }

    })
}


var input_box = document.createElement("input")
input_box.setAttribute("id", "inp")
input_box.setAttribute("class", "form-control mr-sm-2")
input_box.setAttribute("type", "text")
input_box.setAttribute("placeholder", "Search your favourite dish")
input_box.setAttribute("aria-label", "Search")

var value = input_box.value;

var search_button = document.createElement("button")
search_button.setAttribute("class", "btn btn-primary")
search_button.setAttribute("type", "submit")
search_button.innerHTML = "Search";

input_box.style.position = "absolute";
input_box.style.width = "25%";
input_box.style.top = "50px";
input_box.style.left = "500px";
input_box.style.borderRadius = "10px";
input_box.style.height = "45px";


search_button.style.position = "absolute";
search_button.style.width = "10%";
search_button.style.top = "120px";
search_button.style.left = "570px";



var container = document.createElement("div")
container.id = "cont"
container.setAttribute("class", "card-deck")
container.style.width = "1100px";
container.style.margin = "170px auto";
// container.style.height="500px";
// container.style.backgroundColor="white";


search_button.addEventListener("click", function (submit) {
    var inp_value = document.getElementById("inp")
    var cont = document.getElementById("cont")
    cont.innerHTML = "";
    makeRequest("GET", "https://api.edamam.com/search?q=" + inp_value.value + "&app_id=0d45ec66&app_key=7c61a7bf72c00b9671c90a72e0897475&from=0&to=4&health=alcohol-free")
        .then(function (result) {
            console.log(value)
            for (var i = 0; i < 4; i++) {

                var final = result.hits[i].recipe;
                var url = result.hits[i].recipe.url;
                var food_image = result.hits[i].recipe.image;

                var ingredient = result.hits[i].recipe.ingredientLines;
                var calories = result.hits[i].recipe.calories;
                var label = result.hits[i].recipe.label;
                var vitamin_1 = result.hits[i].recipe.totalNutrients.VITC;
                var vitamin_2 = result.hits[i].recipe.totalNutrients.VITA_RAE;
                var vitamin_3 = result.hits[i].recipe.totalNutrients.VITD;
                var vitamin_4 = result.hits[i].recipe.totalNutrients.VITB12;
                var vitamins = [vitamin_1, vitamin_2, vitamin_3, vitamin_4]
                console.log(vitamins)

                var card = document.createElement("div")
                card.setAttribute("class", "card")
                var image = document.createElement("img")
                image.setAttribute("src", food_image)
                image.setAttribute("class", "card-top-img")
                var body = document.createElement("div")
                var title = document.createElement("h5")
                title.setAttribute("class", "card-title mt-2 ml-3 mr-3")
                title.innerHTML = label;
                var ul = document.createElement("ul")
                ul.setAttribute("class", "list-group list-group-flush")
                var item1 = document.createElement("li")
                item1.setAttribute("class", "list-group-item")
                var d1 = document.createElement('div');
                d1.setAttribute('class', 'text-center');
                var btn1 = document.createElement("button")
                btn1.setAttribute("class", "btn btn-primary")
                btn1.setAttribute("data-toggle", "modal")
                btn1.setAttribute("data-target", "#ingredientsModel" + i)
                btn1.innerHTML = "Ingredients";
                d1.append(btn1);

                var modal = document.createElement("div")
                modal.setAttribute("class", "modal fade");
                modal.setAttribute("id", "ingredientsModel" + i);
                modal.setAttribute("tabIndex", "-1");
                modal.setAttribute("aria-labelledby", "exampleModalLabel")
                modal.setAttribute("aria-hidden", "true")
                var modal_dialogue = document.createElement("div")
                modal_dialogue.setAttribute("class", "modal-dialog")
                modal_dialogue.setAttribute("role", "document")
                var modal_content = document.createElement("div")
                modal_content.setAttribute("class", "modal-content")
                var modal_header = document.createElement("div")
                modal_header.setAttribute("class", "modal-header")
                var modal_title = document.createElement("h5")
                modal_title.setAttribute("class", "modal-title")
                modal_title.setAttribute("id", "exampleModalLabel")
                modal_title.innerHTML = "Ingredients";
                var close_button = document.createElement("button")
                close_button.setAttribute("type", "button");
                close_button.setAttribute("class", "close")
                close_button.setAttribute("data-dismiss", "modal")
                close_button.setAttribute("aria-label", "Close")
                var span_1 = document.createElement("span")
                span_1.setAttribute("aria-hidden", "true")
                span_1.innerHTML = "&times;"
                var modal_body = document.createElement("div")
                modal_body.setAttribute("class", "modal-body")

                var ingredient_ul = document.createElement("ul")
                for (var item = 0; item < ingredient.length; item++) {
                    var li = document.createElement("li")
                    li.innerHTML = ingredient[item];
                    ingredient_ul.append(li)
                    modal_body.append(ingredient_ul)
                }

                var modal_footer = document.createElement("div")
                modal_footer.setAttribute("class", "modal-footer")
                var modalClosebutton = document.createElement("button")
                modalClosebutton.setAttribute("type", "button")
                modalClosebutton.setAttribute("class", "btn btn-secondary")
                modalClosebutton.setAttribute("data-dismiss", "modal")
                modalClosebutton.innerHTML = "Close"

                var item2 = document.createElement("li")
                item2.setAttribute("class", "list-group-item")
                var btn2 = document.createElement("button")
                btn2.setAttribute("class", "btn btn-primary pop")
                btn2.innerHTML = "Calories";
                btn2.setAttribute("data-toggle", "popover")
                btn2.setAttribute("title", "Calories")
                btn2.setAttribute("data-content", calories)
                btn2.setAttribute("data-placement", "top")
                btn2.setAttribute("data-trigger", "focus")
                var btn3 = document.createElement("button")
                btn3.setAttribute("class", "btn btn-primary ml-1 pop")
                btn3.innerHTML = "Dish Link";
                btn3.setAttribute("data-toggle", "popover")
                btn3.setAttribute("title", "Dish link")
                btn3.setAttribute("data-content", url)
                btn3.setAttribute("data-placement", "top")
                btn3.setAttribute("data-trigger", "focus")
                $(function () {
                    $(".pop").popover();
                })


                // var item3=document.createElement("li")
                // item3.setAttribute("class","list-group-item")

                $(function () {
                    $(".pop").popover();
                })

                var item4 = document.createElement("li")
                item4.setAttribute("class", "list-group-item")
                var d2 = document.createElement('div');
                d2.setAttribute('class', 'text-center');
                var btn4 = document.createElement("button")
                btn4.setAttribute("class", "btn btn-primary pop")
                btn4.setAttribute("data-toggle", "modal")
                btn4.setAttribute("data-target", "#vitaminsModel" + i)
                btn4.innerHTML = "Vitamins";
                d2.append(btn4)

                var modal_vit = document.createElement("div")
                modal_vit.setAttribute("class", "modal fade");
                modal_vit.setAttribute("id", "vitaminsModel" + i);
                modal_vit.setAttribute("tabIndex", "-1");
                modal_vit.setAttribute("aria-labelledby", "exampleModalLabel")
                modal_vit.setAttribute("aria-hidden", "true")
                var modal_vit_dialogue = document.createElement("div")
                modal_vit_dialogue.setAttribute("class", "modal-dialog")
                modal_vit_dialogue.setAttribute("role", "document")
                var modal_vit_content = document.createElement("div")
                modal_vit_content.setAttribute("class", "modal-content")
                var modal_vit_header = document.createElement("div")
                modal_vit_header.setAttribute("class", "modal-header")
                var modal_vit_title = document.createElement("h5")
                modal_vit_title.setAttribute("class", "modal-title")
                modal_vit_title.setAttribute("id", "exampleModalLabel")
                modal_vit_title.innerHTML = "Vitamins";
                var vit_close_button = document.createElement("button")
                vit_close_button.setAttribute("type", "button");
                vit_close_button.setAttribute("class", "close")
                vit_close_button.setAttribute("data-dismiss", "modal")
                vit_close_button.setAttribute("aria-label", "Close")
                var span_2 = document.createElement("span")
                span_2.setAttribute("aria-hidden", "true")
                span_2.innerHTML = "&times;"
                var modal_vit_body = document.createElement("div")
                modal_vit_body.setAttribute("class", "modal-body")

                var vitamins_ul = document.createElement("ul")
                for (var item = 0; item < vitamins.length; item++) {
                    var li = document.createElement("li")
                    li.innerHTML = vitamins[item].label + ":" + vitamins[item].quantity;
                    vitamins_ul.append(li)
                    modal_vit_body.append(vitamins_ul)
                }

                var modal_vit_footer = document.createElement("div")
                modal_vit_footer.setAttribute("class", "modal-footer")
                var modalVitClosebutton = document.createElement("button")
                modalVitClosebutton.setAttribute("type", "button")
                modalVitClosebutton.setAttribute("class", "btn btn-secondary")
                modalVitClosebutton.setAttribute("data-dismiss", "modal")
                modalVitClosebutton.innerHTML = "Close"



                item4.append(d2)
                // item3.append(btn3)
                item2.append(btn2, btn3)
                item1.append(d1)
                ul.append(item1, item2, item4)
                modal_footer.append(modalClosebutton)
                close_button.append(span_1)
                modal_header.append(modal_title, close_button)
                modal_content.append(modal_header, modal_body, modal_footer)
                modal_dialogue.append(modal_content)
                modal.append(modal_dialogue)
                modal_vit_footer.append(modalVitClosebutton)
                modal_vit_header.append(modal_vit_title, vit_close_button)
                modal_vit_content.append(modal_vit_header, modal_vit_body, modal_vit_footer)
                modal_vit_dialogue.append(modal_vit_content)
                modal_vit.append(modal_vit_dialogue)
                body.append(title, ul, modal, modal_vit)
                card.append(image, body)
                container.append(card)


            }

        })

})

document.body.append(container, input_box, search_button)


