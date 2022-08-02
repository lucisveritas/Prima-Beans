var drinkPrice = 0;
var drinkType = "";
var drinkSize = "";
var drinkQuantity = 0;
var UserInputtedDrinkQuantity = 0;
var orderSubtotal = 0;
var orderTotal = 0;
let orderList = [];
let reportList = [];
var primaBeansMember = false;
var orderDiscount = 0;

// Totals //
var totalEspressoShot = 0;
var totalLongMac = 0;
var totalCappucino = 0;
var totalFlatWhite = 0;
var reportTotal = 0;
var reportDrinkType = 0;
var reportItemPrice = 0;


// Interfaces //
function switchToOrderInterface() {
    document.getElementById("orderInterface").style.display = "grid"; //Unhides the order interface
    document.getElementById("reportInterface").style.display = "none"; //Hides the report interface
    resetOrder()
}

function switchToReportInterface() {
    document.getElementById("orderInterface").style.display = "none"; //Unhides the order interface
    document.getElementById("reportInterface").style.display = "grid"; //Hides the report interface
    resetOrder()
    generateReport()
}

// Drink Type //

function flatWhite() { //ButtonFlatWhite 
    drinkType = "Flat White"; //Sets drinkType to "Flat White"
    showElementById("drinkSizeLarge"); //Unhides the ButtonDrinkSizeLarge
}

function cappucino() { //ButtonCappucino
    drinkType = "Cappucino"; //Sets drinkType to "Cappucino"
    showElementById("drinkSizeLarge"); //Unhides the ButtonDrinkSizeLarge
}

function longMac() { //ButtonLongMac
    drinkType = "Long Mac"; //Sets drinkType to "Long Mac"
    showElementById("drinkSizeLarge"); //Unhides the ButtonDrinkSizeLarge
}

function espressoShot() { //ButtonEspressoShot
    drinkType = "Espresso Shot"; //Sets drinkType to "Espresso Shot"
    drinkSize = "Small"
    hideElementById("drinkSizeLarge"); //Hides the ButtonDrinkSizeLarge as espresso shots do not come in a large size
}

function hideElementById(element) {
    document.getElementById(element).style.display = "none"; //Hides the element 
}

function showElementById(element) {
    document.getElementById(element).style.display = "block"; //Unhides the element
}

function hideElementByClass(element) {
    classList = document.getElementsByClassName(element);
    for (i = 0; i < classList.length; i++) {
        classList[i].style.display = "none";
    }
}

// Drink Size //

function drinkSizeSmall() { //ButtonDrinkSizeSmall
    drinkSize = "Small"; //Sets drinkSize to "Small"
}

function drinkSizeLarge() { //ButtonDrinkSizeLarge
    drinkSize = "Large"; //Sets drinkSize to "Large"
}

// Drink Quantity //

function drinkQuantityIntegerValidation(UserInputtedDrinkQuantity) { 
    if ((UserInputtedDrinkQuantity % 1) == 0) { //tests if UserInputtedDrinkQuantity is an integer
        return false; //returns false if there is no error, i,e. the UserInputtedDrinkQuantity is not an integer
    }
    else {
        return true; //returns true if there is an error, i.e. the UserInputtedDrinkQuantity is an integer
    }
}

function drinkQuantityLengthValidation(UserInputtedDrinkQuantity) { 
    if ((UserInputtedDrinkQuantity.length) == 0) { //tests if UserInputtedDrinkQuantity is an integer
        return true; //returns true if there is an error, i,e. the UserInputtedDrinkQuantity is not an integer
    }
    else {
        return false; //returns false if there is no error, i.e. the UserInputtedDrinkQuantity is an integer
    }
}

function drinkQuantityParityValidation(UserInputtedDrinkQuantity) { 
    if ((UserInputtedDrinkQuantity) < 0) { //tests if UserInputtedDrinkQuantity is an integer
        return true; //returns true if there is an error, i,e. the UserInputtedDrinkQuantity is not an integer
    }
    else {
        return false; //returns false if there is no error, i.e. the UserInputtedDrinkQuantity is an integer
    }
}

function updateDrinkQuantity() { //InputBoxDrinkQuantity
    UserInputtedDrinkQuantity = document.getElementById("inputDrinkQuantity").value; //Stores user inputted drink quantity
    if ((drinkQuantityLengthValidation(UserInputtedDrinkQuantity)) == false) {
        if ((drinkQuantityIntegerValidation(UserInputtedDrinkQuantity)) == false) {
            if ((drinkQuantityParityValidation(UserInputtedDrinkQuantity)) == false) {
                drinkQuantity = parseInt(UserInputtedDrinkQuantity);
                updateInputBoxDrinkQuantity();
                hideElementByClass("errorMessage"); //If user inputted drink quantity is not an integer, outputs an error message
            }
            else {
                drinkQuantity = 0;
                showElementById("outputDrinkQuantityError"); //If user inputted drink quantity is not an integer, outputs an error message
            }
        }
        else {
            drinkQuantity = 0;
            showElementById("outputDrinkQuantityError"); //If user inputted drink quantity is not an integer, outputs an error message
        }
    }
    else {
        drinkQuantity = 0;
        updateInputBoxDrinkQuantity()
        hideElementById("outputDrinkQuantityError"); //If user inputted drink quantity is not an integer, outputs an error message
    }
}

function updateInputBoxDrinkQuantity() { //InputBoxDrinkQuantity
    document.getElementById("inputDrinkQuantity").value = drinkQuantity; //displays the drinkQuantity in the input box
}

function decreaseDrinkQuantity() { //ButtonDrinkQuantityDecrease
    if (drinkQuantity > 0) { //Prevents drinkQuantity from being negative
        drinkQuantity -= 1; //Decreases drinkQuantity by 1
        updateInputBoxDrinkQuantity();
    }
}

function increaseDrinkQuantity() { //ButtonDrinkQuantityIncrease
    drinkQuantity += 1; //Increases drinkQuantity by 1
    updateInputBoxDrinkQuantity();
}

// Drink Price //

function calcDrinkPrice(drinkType, drinkSize) {
    if (drinkType == "Espresso Shot") {
        return 3;
    }
    else if (drinkType == "Long Mac") {
        if (drinkSize == "Small") {
            return 4.6;
        }
        else if (drinkSize == "Large") {
            return 5;
        }
        else { 
            return "";
        }
    }
    else if (drinkType == "Cappucino") {
        if (drinkSize == "Small") {
            return 4.5;
        }
        else if (drinkSize == "Large") {
            return 5;
        }
        else { 
            return "";
        }
    }
    else if (drinkType == "Flat White") {
        if (drinkSize == "Small") {
            return 4.3;
        }
        else if (drinkSize == "Large") {
            return 4.8;
        }
        else { 
            return "";
        }
    }
    else {
        return "";
    }
}

// Prima Beans Member //

function primaBeansYes() {
    primaBeansMember = true
    updateOrderTotal() 
}

function primaBeansNo() {
    primaBeansMember = false
    updateOrderTotal()
}

// Order //

function drinkQuantityValidation(UserInputtedDrinkQuantity) {
    error = drinkQuantityLengthValidation(UserInputtedDrinkQuantity)
    error = drinkQuantityIntegerValidation(UserInputtedDrinkQuantity)
    error = drinkQuantityParityValidation(UserInputtedDrinkQuantity)
    if (error == true) {
        showElementById("outputDrinkQuantityError"); //If user inputted drink quantity is not an integer, outputs an error message
    }
    else {
        hideElementById("outputDrinkQuantityError"); //If user inputted drink quantity is not an integer, outputs an error message
    }
    return error
}

function orderValidation(drinkType, drinkSize, drinkQuantity) { 
    if (drinkType == "") { //checks that a drink type has been selected
        showElementById("outputDrinkTypeError"); ////outputs an error message if a drink type has not been selected 
        return true; //returns true if an error is present
    }
    else if (drinkSize == "") { 
        showElementById("outputDrinkSizeError"); ////outputs an error message if a drink size has not been selected 
        return true; //returns true if an error is present
    }
    else if ((drinkQuantityValidation(drinkQuantity)) == true) {
        return true //returns true if an error is present
    }
    else {
        hideElementByClass("errorMessage"); //If user inputted drink quantity is not an integer, outputs an error message
        return false; //returns false if an error is not present
    }
}

function addItemToOrder() { //ButtonAddToOrder
    if ((orderValidation(drinkType, drinkSize, drinkQuantity)) == false) {
        drinkPrice = calcDrinkPrice(drinkType,drinkSize)
        itemPrice = drinkQuantity * drinkPrice
        const orderItem = [drinkType, drinkSize, drinkQuantity, drinkPrice, itemPrice]; //creates new instance of drinkOrder class using current drink configuration
        orderList.push(orderItem); //adds the new order item to the order list 
        orderPrice = 0;
        calcOrderSubtotal() //calculate and refresh orderSubtotal, orderTotal
        resetItem() //reset drink variables
    }
}

function calcOrderSubtotal() {
    orderSubtotal = 0; //resets orderSubtotal
    for (i = 0; i < (orderList.length); i++) { //loops through each order item
        orderPrice = orderList[i][4] 
        orderSubtotal += orderPrice; //adds the order price of each item to the order subtotal
        updateOutputOrderSubtotal() //updates the displayed order subtotal
    }
    updateOrderTotal()
}

function updateOutputOrderSubtotal() {
    document.getElementById("outputOrderSubtotal").innerHTML = "Subtotal: $" + orderSubtotal.toFixed(2);
}

function updateOutputOrderDiscount() {
    document.getElementById("outputOrderDiscount").innerHTML = "Discount: $" + orderDiscount.toFixed(2);
}

function updateOutputOrderTotal() {
    document.getElementById("outputOrderTotal").innerHTML = "Total: $" + orderTotal.toFixed(2);
}

// Order Total //

function updateOrderTotal() { 
    if (primaBeansMember == true) {
        orderDiscount = orderSubtotal * 0.1
    }
    else {
        orderDiscount = 0;
    }
    orderTotal = orderSubtotal - orderDiscount
    updateOutputOrderDiscount()
    updateOutputOrderTotal()
}

function completeOrder() {
    orderList.unshift(primaBeansMember)
    reportList.push(orderList)
    resetOrder()
    updateAllOrderOutputs()
}

function updateAllOrderOutputs() {
    updateInputBoxDrinkQuantity()
    updateOutputOrderSubtotal()
    updateOutputOrderDiscount()
    updateOutputOrderTotal()
}

// Report //

function generateReport() {
    resetReportTotals()
    for (order = 0; order < (reportList.length); order++) {
        if (reportList[order][0] == true) { //checks if order is a Prima Beans Member
            for (drink = 1; drink < (reportList[order].length); drink++) {
                reportDrinkType = reportList[order][drink][0]
                reportItemPrice = reportList[order][drink][4] * 0.9
                calcReportTotals(reportDrinkType,reportItemPrice)
            }
        }
        else {
            for (drink = 1; drink < (reportList[order].length); drink++) {
                reportDrinkType = reportList[order][drink][0]
                reportItemPrice = reportList[order][drink][4]
                calcReportTotals(reportDrinkType,reportItemPrice)
            }
        }
    }
    updateReportTotals()
}

function calcReportTotals(drinkType,itemPrice){ 
    if (drinkType == "Espresso Shot") {
        totalEspressoShot += itemPrice
    }
    else if (drinkType == "Long Mac") {
        totalLongMac += itemPrice
    }
    else if (drinkType == "Cappucino") {
        totalCappucino += itemPrice
    }
    else if (drinkType == "Flat White") {
        totalFlatWhite += itemPrice
    }
    reportTotal += itemPrice
}

function updateReportTotals() { //populates report total table
    document.getElementById("totalFlatWhite").innerHTML = "$" + totalFlatWhite.toFixed(2); //populates report total table with the total sales of flat whites with a $ and to two decimal places
    document.getElementById("totalCappucino").innerHTML = "$" + totalCappucino.toFixed(2); //populates report total table with the total sales of cappucinos with a $ and to two decimal places
    document.getElementById("totalLongMac").innerHTML = "$" + totalLongMac.toFixed(2); //populates report total table with the total sales of long macs with a $ and to two decimal places
    document.getElementById("totalEspressoShot").innerHTML = "$" + totalEspressoShot.toFixed(2); //populates report total table with the total sales of espresso shots with a $ and to two decimal places
    document.getElementById("reportTotal").innerHTML = "$" + reportTotal.toFixed(2); //populates report total table with the total sales of espresso shots with a $ and to two decimal places
}

// Reset //
function resetOrder() {
    drinkPrice = 0;
    drinkType = "";
    drinkSize = "";
    drinkQuantity = 0;
    UserInputtedDrinkQuantity = 0;
    orderSubtotal = 0;
    orderTotal = 0;
    orderList = [];
    primaBeansMember = false;
    orderDiscount = 0;
    updateAllOrderOutputs()
}

function resetItem() {
    drinkPrice = 0;
    drinkType = "";
    drinkSize = "";
    drinkQuantity = 0;
    UserInputtedDrinkQuantity = 0;
    primaBeansMember = false;
    updateAllOrderOutputs()
}

function resetAll() {
    drinkPrice = 0;
    drinkType = "";
    drinkSize = "";
    drinkQuantity = 0;
    UserInputtedDrinkQuantity = 0;
    orderSubtotal = 0;
    orderTotal = 0;
    orderList = [];
    reportList = [];
    primaBeansMember = false;
    orderDiscount = 0;
    updateReportTotals()
    updateAllOrderOutputs()
}

function resetReportTotals() {
    totalEspressoShot = 0;
    totalLongMac = 0;
    totalCappucino = 0;
    totalFlatWhite = 0;
    reportTotal = 0;
    reportDrinkType = 0;
    reportItemPrice = 0;
}

// Exit //
function exit() {
    resetAll()
    document.getElementById("orderInterface").style.display = "none"; //Unhides the order interface
    document.getElementById("reportInterface").style.display = "none"; //Hides the report interface
  }