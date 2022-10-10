'use strict';

let salesData = document.getElementById('salesData');

console.log(salesData);

let hours = ['6am:', '7am:', '8am:','9am:','10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];

// Store 1: Seattle
let store1 = {
  location: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  dailyTotal: 0,
  cookiesSoldEachHour: [],
  getRandomCustomers: function() {
    let randomCustomer = Math.floor(Math.random()*(this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
    return randomCustomer;
  },
  getCookies: function() {
    for (let i=0; i < hours.length; i++) {
      let randomCustomer = this.getRandomCustomers();
      let cookiesPerHour = Math.floor(randomCustomer * this.avgCookiesPerCustomer);
      this.cookiesSoldEachHour.push(cookiesPerHour);
      this.dailyTotal = this.dailyTotal + cookiesPerHour;
    }
  },
  displayStore: function() {
    this.getCookies();
    
    let h2Element = document.createElement('h2');
    h2Element.textContent = this.location;
    salesData.appendChild(h2Element);
    
    let ulElement = document.createElement('ul');
    salesData.appendChild(ulElement);
    
    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]} ${this.cookiesSoldEachHour[i]}`;
      ulElement.appendChild(liElement);
    } 
    let salesTotal = document.createElement('li');
    salesTotal.textContent = `Total: ${this.dailyTotal}`;
    ulElement.appendChild(salesTotal);
  }
}

console.log(store1.getRandomCustomers());
store1.displayStore();
console.log(store1);

// Store 2: Tokyo
let store2 = {
  location: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPerCustomer: 1.2,
  dailyTotal: 0,
  cookiesSoldEachHour: [],
  getRandomCustomers: function() {
    let randomCustomer = Math.floor(Math.random()*(this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
    return randomCustomer;
  },
  getCookies: function() {
    for (let i=0; i < hours.length; i++) {
      let randomCustomer = this.getRandomCustomers();
      let cookiesPerHour = Math.floor(randomCustomer * this.avgCookiesPerCustomer);
      this.cookiesSoldEachHour.push(cookiesPerHour);
      this.dailyTotal = this.dailyTotal + cookiesPerHour;
    }
  },
  displayStore: function() {
    this.getCookies();
    
    let h2Element = document.createElement('h2');
    h2Element.textContent = this.location;
    salesData.appendChild(h2Element);
    
    let ulElement = document.createElement('ul');
    salesData.appendChild(ulElement);
    
    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]} ${this.cookiesSoldEachHour[i]}`;
      ulElement.appendChild(liElement);
    } 
    let salesTotal = document.createElement('li');
    salesTotal.textContent = `Total: ${this.dailyTotal}`;
    ulElement.appendChild(salesTotal);
  }
}

console.log(store2.getRandomCustomers());
store2.displayStore();
console.log(store2);

// Store 3: Dubai
let store3 = {
  location: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesPerCustomer: 3.7,
  dailyTotal: 0,
  cookiesSoldEachHour: [],
  getRandomCustomers: function() {
    let randomCustomer = Math.floor(Math.random()*(this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
    return randomCustomer;
  },
  getCookies: function() {
    for (let i=0; i < hours.length; i++) {
      let randomCustomer = this.getRandomCustomers();
      let cookiesPerHour = Math.floor(randomCustomer * this.avgCookiesPerCustomer);
      this.cookiesSoldEachHour.push(cookiesPerHour);
      this.dailyTotal = this.dailyTotal + cookiesPerHour;
    }
  },
  displayStore: function() {
    this.getCookies();
    
    let h2Element = document.createElement('h2');
    h2Element.textContent = this.location;
    salesData.appendChild(h2Element);
    
    let ulElement = document.createElement('ul');
    salesData.appendChild(ulElement);
    
    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]} ${this.cookiesSoldEachHour[i]}`;
      ulElement.appendChild(liElement);
    } 
    let salesTotal = document.createElement('li');
    salesTotal.textContent = `Total: ${this.dailyTotal}`;
    ulElement.appendChild(salesTotal);
  }
}

console.log(store3.getRandomCustomers());
store3.displayStore();
console.log(store3);

// Store 4: Paris
let store4 = {
  location: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiesPerCustomer: 2.3,
  dailyTotal: 0,
  cookiesSoldEachHour: [],
  getRandomCustomers: function() {
    let randomCustomer = Math.floor(Math.random()*(this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
    return randomCustomer;
  },
  getCookies: function() {
    for (let i=0; i < hours.length; i++) {
      let randomCustomer = this.getRandomCustomers();
      let cookiesPerHour = Math.floor(randomCustomer * this.avgCookiesPerCustomer);
      this.cookiesSoldEachHour.push(cookiesPerHour);
      this.dailyTotal = this.dailyTotal + cookiesPerHour;
    }
  },
  displayStore: function() {
    this.getCookies();
    
    let h2Element = document.createElement('h2');
    h2Element.textContent = this.location;
    salesData.appendChild(h2Element);
    
    let ulElement = document.createElement('ul');
    salesData.appendChild(ulElement);
    
    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]} ${this.cookiesSoldEachHour[i]}`;
      ulElement.appendChild(liElement);
    } 
    let salesTotal = document.createElement('li');
    salesTotal.textContent = `Total: ${this.dailyTotal}`;
    ulElement.appendChild(salesTotal);
  }
}

console.log(store4.getRandomCustomers());
store4.displayStore();
console.log(store4);

// Store 5: Lima
let store5 = {
  location: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiesPerCustomer: 4.6,
  dailyTotal: 0,
  cookiesSoldEachHour: [],
  getRandomCustomers: function() {
    let randomCustomer = Math.floor(Math.random()*(this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
    return randomCustomer;
  },
  getCookies: function() {
    for (let i=0; i < hours.length; i++) {
      let randomCustomer = this.getRandomCustomers();
      let cookiesPerHour = Math.floor(randomCustomer * this.avgCookiesPerCustomer);
      this.cookiesSoldEachHour.push(cookiesPerHour);
      this.dailyTotal = this.dailyTotal + cookiesPerHour;
    }
  },
  displayStore: function() {
    this.getCookies();
    
    let h2Element = document.createElement('h2');
    h2Element.textContent = this.location;
    salesData.appendChild(h2Element);
    
    let ulElement = document.createElement('ul');
    salesData.appendChild(ulElement);
    
    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]} ${this.cookiesSoldEachHour[i]}`;
      ulElement.appendChild(liElement);
    } 
    let salesTotal = document.createElement('li');
    salesTotal.textContent = `Total: ${this.dailyTotal}`;
    ulElement.appendChild(salesTotal);
  }
}

console.log(store5.getRandomCustomers());
store5.displayStore();
console.log(store5);
