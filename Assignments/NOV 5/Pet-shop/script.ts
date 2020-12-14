interface petDetails{
    type:string;
    count:number;

}
// Availability class
class petsAvailable{
        //Array<data type> here elements should be of type petDetails(interface) and values are stored in pets.Fow now it is empty array
    pets:Array<petDetails>=[];
    constructor(availablePets:Array<petDetails>){
        this.pets.push(...availablePets)
    }
    insert(pet:petDetails){
        this.pets.push(pet)
    }
    petdetails(){
        console.log(this.pets)
    }

    checkRequests(requestArray: Array<petDetails>) {
        for (let i = 0; i < requestArray.length; i++) {
            let available;
            for (let j = 0; j < this.pets.length; j++) {
                if (requestArray[i].type === this.pets[j].type) {
                    available = this.pets[j].count;
                    break;
                }
            }
            if (!available) {
                console.log(`${requestArray[i].type} is not available`);
            } else {
                console.log(
                    `${requestArray[i].type} is available and the available count is ${available}`
                );
            }
        }
    }
}


let show=new petsAvailable([
    {"type":"Dogs","count":3},
    {"type":"Cats","count":4},
    {"type":"loveBirds","count":6},
    {"type":"rabbits","count":2}
])

// request class
class requestPets {
    requests:Array<petDetails>=[];
    constructor(req:Array<petDetails>){
        this.requests.push(...req)
    }
    addReq(newReq:petDetails){
        this.requests.push(newReq)
    }
    reqDetails(){
        console.log(this.requests)
    }
    checkAvailability(){
        show.checkRequests(this.requests)
    }
}

let request=[
    {"type":"chickens","count":12},
    {"type":"Dogs","count":2},
    {"type":"Cats","count":1}
];

let req=new requestPets(request)

console.log(req.checkAvailability())

