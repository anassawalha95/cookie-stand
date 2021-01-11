'use strict'

var seattle, tokyo, dubai, paris, lima, d = document, mainContainer = d.getElementById("sales-items");
var laborHours = ["6:00am", "7:00am", "8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm"]

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

    var tr = d.createElement("tr")

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


function Shop(location, maxCustomerNumber, minCustomerNumber, averageCookieSales) {
    this.location = location;

    this.maxCustomerNumber = maxCustomerNumber;
    this.minCustomerNumber = minCustomerNumber;
    this.averageCookieSales = averageCookieSales;
    this.salesPerHour = this.calculateAvarageSalesPerHour();
    this.totalSalesPerDay = this.calculateTotalSalesPerHour();
}


seattle = new Shop("Seattle", 65, 23, 6.3);

tokyo = new Shop("Tokyo", 24, 3, 1.2);

dubai = new Shop("Dubai", 38, 11, 3.7);

paris = new Shop("Paris", 38, 20, 2.3);

lima = new Shop("Lima", 16, 2, 4.6);

var locations = [seattle, tokyo, dubai, paris, lima]
var table = d.createElement("table")
var thead = d.createElement("thead")
var tbody = d.createElement("tbody")
var tfoot = d.createElement("tfoot")


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
                console.log(locations)
                total += locations[index2].salesPerHour[index - 1]


            }
            grandTotal += total;
            td.textContent = total
            total = 0
        }



        tr.appendChild(td)

    }

    tfoot.appendChild(tr)

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




