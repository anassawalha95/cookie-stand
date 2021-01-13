'use strict'

var seattle, tokyo, dubai, paris, lima, d = document, mainContainer = d.getElementById("sales-items");
var laborHours = ["6:00am", "7:00am", "8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm"]

var locations = [];
var table = d.createElement("table")
var thead = d.createElement("thead")
var tbody = d.createElement("tbody")
var tfoot = d.createElement("tfoot")

function isEmpty(check) {

    if (check != "") {

        return true;

    }


    return false;

}

Shop.prototype.calculateAvarageSalesPerHour = function () {

    var randomNumberGenerated, laborHoursArrayLength = laborHours.length, HourlySales = [];

    for (var index = 0; index < laborHoursArrayLength; index++) {

        randomNumberGenerated = Math.floor(Math.random() * (this.maxCustomerNumber - this.minCustomerNumber) * this.averageCookieSales);

        HourlySales[index] = randomNumberGenerated;
    }
    return HourlySales
};

Shop.prototype.calculateTotalSalesPerHour = function () {

    var laborHoursArrayLength = laborHours.length, totalSalesPerDay = 0

    for (var index = 0; index < laborHoursArrayLength; index++) {

        totalSalesPerDay += this.salesPerHour[index];

    }
    return totalSalesPerDay
};





Shop.prototype.tableDataFiller = function (tbody) {

    var tr = d.createElement("tr");


    for (var index = 0; index < laborHours.length + 2; index++) {

        var td = d.createElement("td")

        if (index == 0) {
            td.textContent = this.location

        } else if (index == 15) {
            td.textContent = this.totalSalesPerDay
        }

        else {
            td.textContent = this.salesPerHour[index - 1]
        }



        tr.appendChild(td)

    }

    tbody.appendChild(tr)
};



function tableTfootFiller(tfoot, locations) {

    var tr = d.createElement("tr");
    var total = 0;
    var grandTotal = 0
    for (var index = 0; index < 16; index++) {

        var td = d.createElement("td")
        if (index == 0) {
            td.textContent = "Totals"

        } else if (index == 15) {
            td.textContent = grandTotal
        }

        else {

            for (var index2 = 0; index2 < locations.length; index2++) {

                total += locations[index2].salesPerHour[index - 1]
                //grandTotal += total;

            }
            grandTotal += total;
            td.textContent = total
            total = 0
        }



        tr.appendChild(td)

    }

    tfoot.appendChild(tr)

}


function Shop(location, maxCustomerNumber, minCustomerNumber, averageCookieSales) {
    this.location = location;
    this.maxCustomerNumber = maxCustomerNumber;
    this.minCustomerNumber = minCustomerNumber;
    this.averageCookieSales = averageCookieSales;
    this.salesPerHour = this.calculateAvarageSalesPerHour();

    this.totalSalesPerDay = this.calculateTotalSalesPerHour();

    locations.push(this)

}


seattle = new Shop("Seattle", 65, 23, 6.3);

tokyo = new Shop("Tokyo", 24, 3, 1.2);

dubai = new Shop("Dubai", 38, 11, 3.7);

paris = new Shop("Paris", 38, 20, 2.3);

lima = new Shop("Lima", 16, 2, 4.6);


console.log(locations.length)

var table = d.createElement("table")
var thead = d.createElement("thead")
var tbody = d.createElement("tbody")
var tfoot = d.createElement("tfoot")


var addNewItem = d.getElementById("submit");

addNewItem.addEventListener("click", addNewStore)

function addNewStore(e) {
    e.preventDefault();

    var newLocation = d.getElementById("location")
    var newMinCustomerNumber = d.getElementById("minCustomerNumber")
    var newMaxCustomerNumber = d.getElementById("maxCustomerNumber")
    var newAvgSalesPerHour = d.getElementById("AvgSalesPerHour")


    if (isEmpty(newLocation.value) && isEmpty(newMaxCustomerNumber.value) && isEmpty(newMinCustomerNumber.value) && isEmpty(newAvgSalesPerHour.value)) {
        var newStore = new Shop(newLocation.value, parseInt(newMaxCustomerNumber.value), parseInt(newMinCustomerNumber.value), parseFloat(newAvgSalesPerHour.value));

        console.log(locations)

        mainContainer.innerHTML = ""



        table = d.createElement("table")
        thead = d.createElement("thead")
        tbody = d.createElement("tbody")
        tfoot = d.createElement("tfoot")

        tableTheadFiller(thead)
        for (var index = 0; index < locations.length; index++) {
            locations[index].tableDataFiller(tbody)
        }

        tableTfootFiller(tfoot, locations)

        table.appendChild(thead)
        table.appendChild(tbody)
        table.appendChild(tfoot)

        mainContainer.appendChild(table)




    } else {
        if (isEmpty(newLocation)) {
            newLocation.style.borderColor = "red"
        }

        if (isEmpty(newMaxCustomerNumber)) {
            newMaxCustomerNumber.style.borderColor = "red"
        }

        if (isEmpty(newMinCustomerNumber)) {
            newMinCustomerNumber.style.borderColor = "red"
        }

        if (isEmpty(newAvgSalesPerHour)) {
            newAvgSalesPerHour.style.borderColor = "red"
        }
    }
}






function tableTheadFiller(thead) {

    var tr = d.createElement("tr")

    for (var index = 0; index < 16; index++) {

        var td = d.createElement("td")
        if (index == 0) {
            td.textContent = ""

        } else
            if (index == 15) {
                td.textContent = "Daily Location Total"
            }

            else {
                td.textContent = laborHours[index - 1]
            }



        tr.appendChild(td)

    }

    thead.appendChild(tr)

}



tableTheadFiller(thead)


seattle.tableDataFiller(tbody);
tokyo.tableDataFiller(tbody);
dubai.tableDataFiller(tbody);
paris.tableDataFiller(tbody);
lima.tableDataFiller(tbody);


tableTfootFiller(tfoot, locations)

table.appendChild(thead)
table.appendChild(tbody)
table.appendChild(tfoot)

mainContainer.appendChild(table)




