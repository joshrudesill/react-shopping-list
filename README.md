# React Shopping List

A shopping list app to track groceries with functionality to mark groceries as purchased.

## Description

React Shopping List is the solution to track groceries efficiently to ensure you won't forget to buy all of your needed groceries. When the app is loaded, add your shopping list item, quantity, and unit (if applicable) to the input fields and click 'Add Item.' 

#### Base Mode Buttons
- 'Buy' will mark the grocery item as purchased and will send that item to the bottom of your list
- 'Remove' will remove the item from your list
- 'Clear Purchased' will mark all items in your list as unpurchased
- 'Clear List' will remove all items from your list
#### Edit Mode Buttons
- 'Edit' will allow you to type into the input field to change your item name, quantity, and unit
- 'Confirm Edit' will confirm your changes
- 'Cancel Edit' will cancel your changes and return the item to pre edit mode values


### Dependencies
This app uses: 
- React
- Axios
- Express

### Installing
1. Set up database
    - Create a database named "fs-react-shopping"
    - Create a table with the provided database.sql file
2. Install dependencies with ```npm install```
3. Install axios with ```npm install axios```
4. Run ```npm run client```
5. In a seperate terminal, run ```npm run client```
6. Go to http://localhost:5173/ on your browser of choice

### Authors
Acadia week 10 pod-2
- Beth Tracy
- Josh Rudesill
- Ryan Kamleiter

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
