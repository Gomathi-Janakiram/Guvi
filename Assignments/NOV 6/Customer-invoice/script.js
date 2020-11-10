var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Customer = /** @class */ (function () {
    function Customer(cust_details) {
        this.id = cust_details.Id;
        this.name = cust_details.Name;
        this.discount = cust_details.Discount;
    }
    Customer.prototype.getID = function () {
        return this.id;
    };
    Customer.prototype.getName = function () {
        return this.name;
    };
    Customer.prototype.getDiscount = function () {
        return this.discount;
    };
    Customer.prototype.setDiscount = function (discount) {
        this.discount = discount;
    };
    Customer.prototype.toString = function () {
        return "Id: " + this.id + " ,Name:" + this.name + ",Discount:" + this.discount;
    };
    return Customer;
}());
var cust = new Customer({
    "Id": 101,
    "Name": "Gomathi",
    "Discount": 5
});
console.log(cust);
console.log(cust.toString());
var Invoice = /** @class */ (function (_super) {
    __extends(Invoice, _super);
    function Invoice(cust_details, amount) {
        var _this = _super.call(this, cust_details) || this;
        _this.amount = amount;
        return _this;
    }
    Invoice.prototype.getId = function () {
        return this.id;
    };
    Invoice.prototype.getCustomer = function () {
        return this.toString();
    };
    Invoice.prototype.getAmount = function () {
        return "Your Amount is " + this.amount;
    };
    Invoice.prototype.setAmount = function (amount) {
        this.amount = amount;
    };
    Invoice.prototype.getCustomerName = function () {
        return this.name;
    };
    Invoice.prototype.getAmountAfterDiscount = function () {
        var amt = this.amount;
        var dis = this.discount / 100;
        var act_dis = amt * dis;
        var total = amt - act_dis;
        return total;
    };
    return Invoice;
}(Customer));
var invoice = new Invoice({
    "Id": 101,
    "Name": "Gomathi",
    "Discount": 5
}, 2000);
console.log("amount :" + invoice.amount);
console.log("discount amount " + invoice.discount);
console.log("Amount after discount " + invoice.getAmountAfterDiscount());
var Acc = /** @class */ (function (_super) {
    __extends(Acc, _super);
    function Acc(custdetails) {
        var _this = _super.call(this, custdetails) || this;
        _this.balance = 1000;
        return _this;
    }
    Acc.prototype.getCustomer = function () {
        return this.toString();
    };
    Acc.prototype.getBalance = function () {
        return this.balance;
    };
    Acc.prototype.setBalance = function (balance) {
        this.balance = balance;
    };
    Acc.prototype.toStringaccount = function () {
        return "Name :" + this.name + " Balance:" + this.balance;
    };
    Acc.prototype.getCustomerName = function () {
        return this.name;
    };
    Acc.prototype.deposit = function (amount) {
        var deposit_amount = amount;
        this.balance += amount;
        // return deposit_amount;
        return this.balance;
    };
    Acc.prototype.withdraw = function (amount) {
        // var withdrawel_amount = amount;
        if (amount < this.balance) {
            this.balance -= amount;
            return this.balance;
        }
        else {
            alert("Amout exceeds the balance!...");
            return this.balance;
        }
    };
    return Acc;
}(Customer));
var acc = new Acc({
    "Id": 101,
    "Name": "Gomathi",
    "Discount": 0.05
});
console.log(acc.getCustomerName());
var bal = document.getElementById("show_balance");
bal.innerHTML = "Your current Balance is " + acc.balance;
bal.style.textAlign = "center";
var result = document.getElementById("result");
var dep_btn = document.getElementById("deposit");
dep_btn.addEventListener("click", function () {
    result.innerHTML = "";
    var inp1 = document.createElement("input");
    inp1.setAttribute("type", "number");
    inp1.setAttribute("placeholder", "Enter Amount");
    inp1.setAttribute("id", "deposit_amt");
    inp1.style.marginLeft = "580px";
    inp1.style.width = "200px";
    inp1.style.padding = "10px";
    var br = document.createElement("br");
    var btn1 = document.createElement("button");
    btn1.setAttribute("id", "proceed_button");
    btn1.innerHTML = "Proceed";
    btn1.style.margin = " 20px 660px";
    btn1.style.padding = "10px";
    result.append(inp1, br, btn1);
    btn1.addEventListener("click", function () {
        // var inp=(<HTMLInputElement>document.getElementById("deposit_amt")).value
        var inp = inp1.value;
        var res = acc.deposit(parseInt(inp));
        document.getElementById("show_balance").innerHTML = "Your current Balance is " + res;
        console.log(document.getElementById("show_balance").innerHTML);
    });
});
var withdraw_btn = document.getElementById("withdraw");
withdraw_btn.addEventListener("click", function () {
    result.innerHTML = "";
    var inp2 = document.createElement("input");
    inp2.setAttribute("type", "number");
    inp2.setAttribute("placeholder", "Enter Amount");
    inp2.setAttribute("id", "input2");
    inp2.style.marginLeft = "580px";
    inp2.style.width = "200px";
    inp2.style.padding = "10px";
    var br = document.createElement("br");
    var btn2 = document.createElement("button");
    btn2.innerHTML = "Proceed";
    btn2.style.margin = " 20px 660px";
    btn2.style.padding = "10px";
    result.append(inp2, br, btn2);
    btn2.addEventListener("click", function () {
        // var inp=(<HTMLInputElement>document.getElementById("deposit_amt")).value
        var inp_wd = inp2.value;
        var res_wd = acc.withdraw(parseInt(inp_wd));
        document.getElementById("show_balance").innerHTML = "Your current Balance is " + res_wd;
        console.log(document.getElementById("show_balance").innerHTML);
    });
});
