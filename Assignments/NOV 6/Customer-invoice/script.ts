interface customerInterface {
    Id:number;
    Name: string;
    Discount: number
}
// customer class
class Customer {
    id:number;
    name: string;
    discount: number
    constructor(cust_details: customerInterface) {
        this.id = cust_details.Id;
        this.name = cust_details.Name;
        this.discount = cust_details.Discount
    }
    getID(): number {
        return this.id
    }
    getName(): string {
        return this.name
    }
    getDiscount() {
        return this.discount
    }
    setDiscount(discount: number) {
        this.discount = discount;
    }
    toString(): string {
        return `Id: ${this.id} ,Name:${this.name},Discount:${this.discount}`
    }
}

var cust = new Customer({
    "Id": 101,
    "Name": "Gomathi",
    "Discount": 5
})
console.log(cust)
console.log(cust.toString())

// Invoice class
class Invoice extends Customer {
    amount:number;
    constructor(cust_details: customerInterface, amount:number) {
        super(cust_details)
        this.amount = amount;
    }
    getId() {
        return this.id;
    }
    getCustomer() {
        return this.toString()
    }
    getAmount() {
        return `Your Amount is ${this.amount}`
    }
    setAmount(amount) {
        this.amount = amount;
    }
    getCustomerName() {
        return this.name;
    }
    getAmountAfterDiscount() {
        var amt = this.amount;
        var dis = this.discount / 100;
        var act_dis = amt * dis;
        var total = amt - act_dis;
        return total;
    }
}

var invoice = new Invoice({
    "Id": 101,
    "Name": "Gomathi",
    "Discount": 5
}, 2000)

console.log(`amount :${invoice.amount}`)
console.log(`discount amount ${invoice.discount}`)
console.log(`Amount after discount ${invoice.getAmountAfterDiscount()}`)


// Account class
class Acc extends Customer {
    balance :number
    constructor(custdetails: customerInterface) {
        super(custdetails)
        this.balance=1000;
    }
    getCustomer() {
        return this.toString()
    }
    getBalance() {
        return this.balance
    }
    setBalance(balance: number) {
        this.balance = balance;
    }
    toStringaccount() {
        return `Name :${this.name} Balance:${this.balance}`
    }
    getCustomerName() {
        return this.name;
    }
    deposit(amount:number) {
        var deposit_amount = amount;
        this.balance += amount;
        // return deposit_amount;
        return this.balance
    }
    withdraw(amount:number) {
        // var withdrawel_amount = amount;
        if (amount < this.balance) {
            this.balance -= amount;
            return this.balance
        } else {
            alert(`Amout exceeds the balance!...`)
            return this.balance

        }
    }

}

var acc = new Acc({
    "Id":101,
    "Name":"Gomathi",
    "Discount":0.05
})
console.log(acc.getCustomerName())

var bal = document.getElementById("show_balance")
bal.innerHTML = `Your current Balance is ${acc.balance}`;
bal.style.textAlign = "center"
var result = document.getElementById("result")

// To deposit the money to your account click deposit btn
var dep_btn = document.getElementById("deposit")
dep_btn.addEventListener("click", function () {
    result.innerHTML = ""
    // input box is created to enter amt
    var inp1 = document.createElement("input")
    inp1.setAttribute("type", "number")
    inp1.setAttribute("placeholder", "Enter Amount")
    inp1.setAttribute("id", "deposit_amt")
    inp1.style.marginLeft = "580px"
    inp1.style.width = "200px"
    inp1.style.padding = "10px"
    var br = document.createElement("br")
    // proceed btn
    var btn1 = document.createElement("button")
    btn1.setAttribute("id", "proceed_button")
    btn1.innerHTML = "Proceed"
    btn1.style.margin = " 20px 660px"
    btn1.style.padding = "10px"
    result.append(inp1, br, btn1)
    // If proceed btn is clicked deposited amt will be added to your balance
    btn1.addEventListener("click", function () {
        var inp = inp1.value
        var res = acc.deposit(parseInt(inp))
        document.getElementById("show_balance").innerHTML = `Your current Balance is ${res}`;
        console.log(document.getElementById("show_balance").innerHTML)
    })

})

// to withdraw money from your account click withdraw button
var withdraw_btn = document.getElementById("withdraw")
withdraw_btn.addEventListener("click", function () {
    result.innerHTML = ""
    // input box is created to enter amt
    var inp2 = document.createElement("input")
    inp2.setAttribute("type", "number")
    inp2.setAttribute("placeholder", "Enter Amount")
    inp2.setAttribute("id", "input2")
    inp2.style.marginLeft = "580px"
    inp2.style.width = "200px"
    inp2.style.padding = "10px"
    var br = document.createElement("br")
    // proceed button
    var btn2 = document.createElement("button")
    btn2.innerHTML = "Proceed"
    btn2.style.margin = " 20px 660px"
    btn2.style.padding = "10px"
    result.append(inp2, br, btn2)
    // If proceed btn is clicked withdrawn amt will be reduced from  your balance
    btn2.addEventListener("click", function () {
        var inp_wd = inp2.value
        var res_wd = acc.withdraw(parseInt(inp_wd))
        document.getElementById("show_balance").innerHTML = `Your current Balance is ${res_wd}`;
        console.log(document.getElementById("show_balance").innerHTML)
    })

})














