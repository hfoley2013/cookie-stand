# LAB - 6

## Salmon Cookeies

The purpose of this application is to allow Pat's Salmon Cookies, a confectionary company, to track sales performance metrics and present a landing page for customers to interact with to learn more about the company.

Pat will use this application to **calculate the number of cookies each location must make every day** in order to maintain its supplies inventory and baking schedule.
The number of cookies to make depends on the following:

- [ ] Minimum number customers per hour
- [ ] Maximum number customers per hour
- [ ] Average number of cookies purchased per customer

## Requirements

### Global
The application must be flexible so that Pat may:

  - [ ] Add and remove locations from daily projections
  - [ ] Easily modify input numbers for each location based on:
    - [ ] The day of the week
    - [ ] Special events
    - [ ] *Other factors*

### Sales Data

Sales data will be stored in a JS file as separate objects for each location and must do the following:

  - [ ] Store min/max hourly customers
  - [ ] Store Average cookes per customer
  - [ ] Use a method to create a random number generator for number of customers per hour
  - [ ] Calculate and store the simulated amount of cookies purchases for each hour at each location using average cookies purchased and the random number of customers
  - [ ] Store teh results for each location in a separate **array** as a **property** of the object representing that location
  - [ ] Display teh values of each array as **unordered lists** in the browser
  - [ ] Calculate the sum of these hourly totals
  - [ ] Display sales data in a tabular form on the Sales page:
    - [ ] These numbers will need the ability to update or remove locations

  | **Location** | **Min / Cust** | **Max / Cust | **Avg Cookie / Sale** |
  | --- | --- | --- | --- |
  | Seattle | 23 | 65 | 6.3 |
  | Tokyo | 3 | 24 | 1.2 |
  | Dubai | 11 | 38 | 3.7 |
  | Paris | 20 | 38 | 2.3 |
  | Lima | 2 | 16 | 4.6 |
    
### Home Page
  
  Home page requires the following:
  
   - [ ] Custom ***sans-serif*** font for  **headings `<h#/>`**
   - [ ] Specified ***sans-serif*** font for sales data
   - [ ] Specified ***serif*** font for text
   - [ ] 3x custom font color specific to each font above
   - [ ] Background color for default page background
   - [ ] Different background color for elements such as boxes and tables
   - [ ] Business info:
       - [ ] Locations
       - [ ] Hours
       - [ ] Contact information
       - [ ] Business tag line
      
### Author: Harper Foley

### Links and Resources

* [Lab 06: Salmon Cookies GitHub Repository](https://github.com/hfoley2013/cookie-stand/)
* [Lab 06: Problem Domain and Requirements](https://codefellows.github.io/code-201-guide/curriculum/class-06/lab/)

### Reflections and Comments

* *[Section to be updated daily]*
