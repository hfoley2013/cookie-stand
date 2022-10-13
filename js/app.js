'use strict';
let footer = document.createElement('tr');
let allStores = [];
let hours = ['6am', '7am', '8am','9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const salesData = document.getElementById('salesData');
const salesTable = document.getElementById('salesTable');
const salesHeader = document.getElementById('salesHeader');
const salesBody = document.getElementById('salesBody');
const salesFooter = document.getElementById('salesFooter');

// Constructor for Stores
function Store(location, minCustomers, maxCustomers, avgCookiesPerCustomer) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.dailyTotal = 0;
  this.cookiesSoldEachHour = [];
  this.getCookies();
  allStores.push(this);
  this.renderSalesTable();
}

// Generate Customer Traffic Numbers
Store.prototype.getRandomCustomers = function() {
  let randomCustomer = Math.floor(Math.random()*(this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  return randomCustomer;
}

// Multiply Custom Traffic Numbers by Average Cookies per Customer at each Location
Store.prototype.getCookies = function() {
  for (let i = 0; i < hours.length; i++) {
    let randomCustomer = this.getRandomCustomers();
    let cookiesPerHour = Math.floor(randomCustomer * this.avgCookiesPerCustomer);
    this.cookiesSoldEachHour.push(cookiesPerHour);
    this.dailyTotal = this.dailyTotal + cookiesPerHour;
  }
}

// Build Table Header
function buildTableHeader() {
  let header = document.createElement('th');
  header.textContent = "Locations";
  salesHeader.appendChild(header);
  for (let i = 0; i < hours.length; i++) {
    let th = document.createElement('th');
    th.textContent = hours[i];
    salesHeader.appendChild(th);
  }
  let dailyLocationTotal = document.createElement('th');
  dailyLocationTotal.textContent = 'Location Daily Total';
  salesHeader.appendChild(dailyLocationTotal);
}

// Build Sales Data in Table
Store.prototype.renderSalesTable = function() {
  let tr = document.createElement('tr');
  salesBody.appendChild(tr);
  let tdLocation = document.createElement('td');
  tdLocation.textContent = this.location;
  tr.appendChild(tdLocation);
  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesSoldEachHour[i];
    tr.appendChild(td);
  }
  let totalCookiesColumn = document.createElement('td');
  totalCookiesColumn.textContent = this.dailyTotal;
  tr.appendChild(totalCookiesColumn);
}

// Build Table Footer
function buildTableFooter() {
  footer.innerHTML = '';
  footer.textContent = 'Totals';
  salesFooter.appendChild(footer);

  for (let i = 0; i < hours.length; i++) {
    let totalHourlySales = 0;
    for (let j = 0; j < allStores.length; j++) {
      totalHourlySales += allStores[j].cookiesSoldEachHour[i];
    }
    let tdFooter = document.createElement('td');
    tdFooter.textContent = totalHourlySales;
    footer.appendChild(tdFooter);
  }
  let footerDailyTotal = document.createElement('td');
  let totalFooterSales = 0;
  for (let i = 0; i < allStores.length; i++) {
      totalFooterSales += allStores[i].dailyTotal;
    }
  footerDailyTotal.textContent = totalFooterSales;
  footer.appendChild(footerDailyTotal);
}


// 1. Get form from DOM
let form = document.querySelector('form');

// 3. Declare event handler (a function) 
let handleSubmit = function(e) {
  e.preventDefault();
  
  let location = e.target.locationName.value;
  let minCustomer = e.target.minCustomer.value;
  let maxCustomer = e.target.maxCustomer.value;
  let avgCookiePerCustomer = e.target.avgCookiePerCustomer.value;

  // Store(location, minCustomers, maxCustomers, avgCookiesPerCustomer)
  new Store(location, minCustomer, maxCustomer, avgCookiePerCustomer);
  buildTableFooter();
}

// 2. Add Event Listener

form.addEventListener('submit', handleSubmit);

// Builds Sales Table
buildTableHeader();
new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);
buildTableFooter();
