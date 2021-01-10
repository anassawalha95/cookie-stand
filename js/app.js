'use strict'

var seattle, tokyo, dubai, paris, lima, locationTotalSalesAnd;


seattle = {
    location: "seattle",
    minCustomerNumber: 23,
    maxCustomerNumber: 65,
    averageCookieSales: 6.3,
    salesPerHour: {
        '6am': 0,
        '7am': 0,
        '8am': 0,
        '9am': 0,
        '10am': 0,
        '11am': 0,
        '12am': 0,
        '1pm': 0,
        '2pm': 0,
        '3pm': 0,
        '4pm': 0,
        '5pm': 0,
        '6pm': 0,
        '7pm': 0,

    },

    calculateAvarageSalesPerHour: function () {

        var randomNumberGenerated, total = 0;


        for (var key in this.salesPerHour) {

            randomNumberGenerated = Math.floor(Math.random() * (this.maxCustomerNumber - this.minCustomerNumber) * this.averageCookieSales);

            this.salesPerHour[key] = key + ":" + randomNumberGenerated + " cookies ";

            total += randomNumberGenerated;
        }

        this.results = "Total: " + [total];


    },





}






tokyo = {
    location: "tokyo",
    minCustomerNumber: 3,
    maxCustomerNumber: 24,
    averageCookieSales: 1.2,
    salesPerHour: {
        '6am': 0,
        '7am': 0,
        '8am': 0,
        '9am': 0,
        '10am': 0,
        '11am': 0,
        '12am': 0,
        '1pm': 0,
        '2pm': 0,
        '3pm': 0,
        '4pm': 0,
        '5pm': 0,
        '6pm': 0,
        '7pm': 0

    },

    results: [],

    calculateAvarageSalesPerHour: function () {

        var randomNumberGenerated, total = 0;


        for (var key in this.salesPerHour) {

            randomNumberGenerated = Math.floor(Math.random() * (this.maxCustomerNumber - this.minCustomerNumber) * this.averageCookieSales);

            this.salesPerHour[key] = key + ":" + randomNumberGenerated + " cookies";

            total += randomNumberGenerated;
        }

        this.results = "Total: " + [total];


    },



}


dubai = {
    location: "dubai",
    minCustomerNumber: 11,
    maxCustomerNumber: 38,
    averageCookieSales: 3.7,
    salesPerHour: {
        '6am': 0,
        '7am': 0,
        '8am': 0,
        '9am': 0,
        '10am': 0,
        '11am': 0,
        '12am': 0,
        '1pm': 0,
        '2pm': 0,
        '3pm': 0,
        '4pm': 0,
        '5pm': 0,
        '6pm': 0,
        '7pm': 0,

    },

    results: [],

    calculateAvarageSalesPerHour: function () {

        var randomNumberGenerated, total = 0;


        for (var key in this.salesPerHour) {

            randomNumberGenerated = Math.floor(Math.random() * (this.maxCustomerNumber - this.minCustomerNumber) * this.averageCookieSales);

            this.salesPerHour[key] = key + ":" + randomNumberGenerated + " cookies";

            total += randomNumberGenerated;
        }

        this.results = "Total: " + [total];


    },


}



paris = {
    location: "paris",
    minCustomerNumber: 20,
    maxCustomerNumber: 38,
    averageCookieSales: 2.3,
    salesPerHour: {
        '6am': 0,
        '7am': 0,
        '8am': 0,
        '9am': 0,
        '10am': 0,
        '11am': 0,
        '12am': 0,
        '1pm': 0,
        '2pm': 0,
        '3pm': 0,
        '4pm': 0,
        '5pm': 0,
        '6pm': 0,
        '7pm': 0,

    },

    results: [],

    calculateAvarageSalesPerHour: function () {

        var randomNumberGenerated, total = 0;


        for (var key in this.salesPerHour) {

            randomNumberGenerated = Math.floor(Math.random() * (this.maxCustomerNumber - this.minCustomerNumber) * this.averageCookieSales);

            this.salesPerHour[key] = key + ":" + randomNumberGenerated + " cookies";

            total += randomNumberGenerated;
        }

        this.results = "Total: " + [total];


    },



}



lima = {
    location: "lima",
    minCustomerNumber: 2,
    maxCustomerNumber: 16,
    averageCookieSales: 4.6,
    salesPerHour: {
        '6am': 0,
        '7am': 0,
        '8am': 0,
        '9am': 0,
        '10am': 0,
        '11am': 0,
        '12am': 0,
        '1pm': 0,
        '2pm': 0,
        '3pm': 0,
        '4pm': 0,
        '5pm': 0,
        '6pm': 0,
        '7pm': 0,
    },

    results: [],

    calculateAvarageSalesPerHour: function () {

        var randomNumberGenerated, total = 0;


        for (var key in this.salesPerHour) {

            randomNumberGenerated = Math.floor(Math.random() * (this.maxCustomerNumber - this.minCustomerNumber) * this.averageCookieSales);

            this.salesPerHour[key] = key + ":" + randomNumberGenerated + " cookies";

            total += randomNumberGenerated;
        }

        this.results = "Total: " + [total];

    },
}

var d = document, mainContainer = d.getElementById("sales-items");

seattle.calculateAvarageSalesPerHour();

var seattleContainer = d.createElement("article")
var seattleLocation = d.createElement("h3");
seattleLocation.innerHTML = seattle.location;
var seattleSales = d.createElement("ul")
var seateleItemSalePerHour = d.createElement('li')


for (var key in seattle.salesPerHour) {

    seateleItemSalePerHour = d.createElement('li')
    seateleItemSalePerHour.innerHTML = seattle.salesPerHour[key];
    seattleSales.appendChild(seateleItemSalePerHour)

}

seateleItemSalePerHour = d.createElement('li')
seateleItemSalePerHour.innerHTML = seattle.results;
seattleSales.appendChild(seateleItemSalePerHour)

seattleContainer.appendChild(seattleLocation)
seattleContainer.appendChild(seattleSales)

mainContainer.appendChild(seattleContainer)




tokyo.calculateAvarageSalesPerHour();

var tokyoContainer = d.createElement("article")
var tokyoLocation = d.createElement("h3");
tokyoLocation.innerHTML = tokyo.location;
var tokyoSales = d.createElement("ul")
var tokyoItemSalePerHour = d.createElement('li')


for (var key in tokyo.salesPerHour) {

    tokyoItemSalePerHour = d.createElement('li')
    tokyoItemSalePerHour.innerHTML = tokyo.salesPerHour[key];
    tokyoSales.appendChild(tokyoItemSalePerHour)

}

tokyoItemSalePerHour = d.createElement('li')
tokyoItemSalePerHour.innerHTML = tokyo.results;
tokyoSales.appendChild(tokyoItemSalePerHour)

tokyoContainer.appendChild(tokyoLocation)
tokyoContainer.appendChild(tokyoSales)

mainContainer.appendChild(tokyoContainer)





dubai.calculateAvarageSalesPerHour();

var dubaiContainer = d.createElement("article")
var dubaiLocation = d.createElement("h3");
dubaiLocation.innerHTML = dubai.location;
var dubaiSales = d.createElement("ul")
var dubaiItemSalePerHour = d.createElement('li')


for (var key in dubai.salesPerHour) {

    dubaiItemSalePerHour = d.createElement('li')
    dubaiItemSalePerHour.innerHTML = dubai.salesPerHour[key];
    dubaiSales.appendChild(dubaiItemSalePerHour)

}

dubaiItemSalePerHour = d.createElement('li')
dubaiItemSalePerHour.innerHTML = dubai.results;
dubaiSales.appendChild(dubaiItemSalePerHour)

dubaiContainer.appendChild(dubaiLocation)
dubaiContainer.appendChild(dubaiSales)

mainContainer.appendChild(dubaiContainer)





paris.calculateAvarageSalesPerHour();

var parisContainer = d.createElement("article")
var parisLocation = d.createElement("h3");
parisLocation.innerHTML = paris.location;
var parisSales = d.createElement("ul")
var parisItemSalePerHour = d.createElement('li')


for (var key in dubai.salesPerHour) {

    parisItemSalePerHour = d.createElement('li')
    parisItemSalePerHour.innerHTML = paris.salesPerHour[key];
    parisSales.appendChild(parisItemSalePerHour)

}

parisItemSalePerHour = d.createElement('li')
parisItemSalePerHour.innerHTML = paris.results;
parisSales.appendChild(parisItemSalePerHour)

parisContainer.appendChild(parisLocation)
parisContainer.appendChild(parisSales)

mainContainer.appendChild(parisContainer)



lima.calculateAvarageSalesPerHour();

var limaContainer = d.createElement("article")


var limaLocation = d.createElement("h3");
limaLocation.innerHTML = lima.location;

var limaSales = d.createElement("ul")
var limaItemSalePerHour = d.createElement('li')


for (var key in dubai.salesPerHour) {

    limaItemSalePerHour = d.createElement('li')
    limaItemSalePerHour.innerHTML = lima.salesPerHour[key];
    limaSales.appendChild(limaItemSalePerHour)

}

limaItemSalePerHour = d.createElement('li')
limaItemSalePerHour.innerHTML = lima.results;
limaSales.appendChild(limaItemSalePerHour)

limaContainer.appendChild(limaLocation)
limaContainer.appendChild(limaSales)

mainContainer.appendChild(limaContainer)




