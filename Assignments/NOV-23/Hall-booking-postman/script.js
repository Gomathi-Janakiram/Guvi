var express = require("express")
var bodyParser = require("body-parser")
var app = express()
app.use(bodyParser.json())


// creating hall
var halls = []
app.post("/hall", (req, res) => {
    req.body.hall_id = halls.length + 1
    console.log(req.body)
    halls.push(req.body)
    res.json({
        "message": "Hall Created"
    })
})

// getting halls
app.get("/halls", (req, res) => {
    res.json(halls)
})

// getting a particular hall
app.get("/halls/:id", (req, res) => {
    let hall = halls.find(item => item.hall_id == req.params.id)
    console.log("get-data-one-find")
    console.log(hall)
    res.json(hall)
})
// updating hall details
app.put("/hall/:id", (req, res) => {
    let hall = halls.findIndex(item => item.hall_id == req.params.id)
    console.log("put-findindex"+hall)
    if (hall !== -1) {
        req.body.hall_id =parseInt(req.params.id) 
        halls[hall] = req.body
        res.json({
            "message": "Hall details Updated"
        })
    } else {
        res.status(404).json({
            "message": "Hall not found"
        })
    }
})

// deleting hall
app.delete("/hall/:id", (req, res) => {
    let hall = halls.findIndex(item => item.hall_id == req.params.id )
    if (hall !== -1) {
        halls.splice(hall, 1)
        res.json({
            "message": "Hall deleted"
        })
    }else{
        res.status(404).json({
            "message":"Record not found"
        })
    }
})

// creating customers
var customers = []

app.post("/customer",(req,res)=>{
    req.body.cust_id=customers.length+1
    customers.push(req.body)
    console.log(req.body)
    res.json({
        "message":"customer created"
    })
})

// getting customers
app.get("/customers",(req,res)=>{
    res.json(customers)
})

// getting a particular customer
app.get("/customers/:id",(req,res)=>{
    let cust=customers.find((item)=>{item.cust_id==req.params.id})
    res.json(customers[cust])
})

// updating a customer
app.put("/customer/:id",(req,res)=>{
    let cust=customers.findIndex(item=>item.cust_id==req.params.id)
    console.log(cust)
    if(cust!==-1){
        req.body.cust_id=req.params.id
        customers[cust]=req.body
        res.json({
            "message":"Customer Updated"
        })
    }else{
        res.json({
            "message":"Customer not found"
    })
}}
)

// deleting a customer
app.delete("/cutomer/:id",(req,res)=>{
    let cust=customers.findIndex((item)=>{customers.cust_id==req.params.id})
    if(cust!==-1){
        customers.splice(cust,1)
        res.json({
            "message":"Customer deleted"
        })
    }else{
        res.json({
            "message":"Customer not found"
        })
    }
})

// placing orders
var orders=[];
var count=0
app.post("/order",(req,res)=>{
    req.body.id=orders.length+1;
    let dateArr1=req.body.startDate.split("/");
    let year=dateArr1[2];
    let month=dateArr1[1];
    let day=dateArr1[0];
    let dateStart=new Date(parseInt(year),parseInt(month)-1,parseInt(day)+1);
    let dateArr2=req.body.endDate.split("/");
    let year2=dateArr2[2];
    let month2=dateArr2[1];
    let day2=dateArr2[0];
    let dateEnd=new Date(parseInt(year2),parseInt(month2)-1,parseInt(day2)+1);
    if(orders.length===0){
        orders.push(req.body);
        res.json({message:"order created"})
    }else{
       for(i=0;i<orders.length;i++){
           let hall=orders[i].hallId;
           currDate1=orders[i].startDate.split("/")
           let currStart=new Date(parseInt(currDate1[2]),parseInt(currDate1[1])-1,parseInt(currDate1[0])+1)
           currDate2=orders[i].endDate.split("/")
           let currEnd=new Date(parseInt(currDate2[2]),parseInt(currDate2[1])-1,parseInt(currDate2[0])+1)

           if((hall==req.body.hallId)&&(currStart>=dateStart || currStart>=dateEnd )&& (currEnd<=dateStart || currEnd<=dateEnd)){
                count++
           }
       }if(count===0){
        orders.push(req.body);
        res.json({
           message: "order created"
        })
        console.log('booked');count=0;
       }else{
           res.status(404).json({
               message:"Hall not available"
           })
           console.log('cant book');count=0;
       }
    }
  })

//getting all the booked halls
  app.get("/orders",(req,res)=>{
    res.json(orders)
    })

app.listen(3000, (err) => {
    if (err) {
        throw err
    } else {
        console.log("started")
    }
})