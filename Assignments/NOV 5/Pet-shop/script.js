// Availability class
var petsAvailable = /** @class */ (function () {
    function petsAvailable(availablePets) {
        var _a;
        this.pets = [];
        (_a = this.pets).push.apply(_a, availablePets);
    }
    petsAvailable.prototype.insert = function (pet) {
        this.pets.push(pet);
    };
    petsAvailable.prototype.petdetails = function () {
        console.log(this.pets);
    };
    petsAvailable.prototype.checkRequests = function (requestArray) {
        for (var i = 0; i < requestArray.length; i++) {
            var available = void 0;
            for (var j = 0; j < this.pets.length; j++) {
                if (requestArray[i].type === this.pets[j].type) {
                    available = this.pets[j].count;
                    break;
                }
            }
            if (!available) {
                console.log(requestArray[i].type + " is not available");
            }
            else {
                console.log(requestArray[i].type + " is available and the available count is " + available);
            }
        }
    };
    return petsAvailable;
}());
var show = new petsAvailable([
    { "type": "Dogs", "count": 3 },
    { "type": "Cats", "count": 4 },
    { "type": "loveBirds", "count": 6 },
    { "type": "rabbits", "count": 2 }
]);
// request class
var requestPets = /** @class */ (function () {
    function requestPets(req) {
        var _a;
        this.requests = [];
        (_a = this.requests).push.apply(_a, req);
    }
    requestPets.prototype.addReq = function (newReq) {
        this.requests.push(newReq);
    };
    requestPets.prototype.reqDetails = function () {
        console.log(this.requests);
    };
    requestPets.prototype.checkAvailability = function () {
        show.checkRequests(this.requests);
    };
    return requestPets;
}());
var request = [
    { "type": "chickens", "count": 12 },
    { "type": "Dogs", "count": 2 },
    { "type": "Cats", "count": 1 }
];
var req = new requestPets(request);
console.log(req.checkAvailability());
