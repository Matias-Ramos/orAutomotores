# Project name
OR automotores

## About it

### Purpose

The client requested a solution for a recurring problem:
When a customer asked my client about the cars in stock, the client had to respond with multiple ecommerce links or with individual images.

### The Solution

This is a simple React solution with very few components that fetches data from a noSql Firebase DB.
It centralizes the entire vehicle stock on a single web page, with the solely purpose to redirect the customer to the ecommerce link where they can find more information related to the car that is of their interest.

### Link
https://www.orautomotores.com.ar

### Hosting
app.netlify.com (from ghPages)


## Code

### Core components
1. Header.jsx
2. GalleryContainer.jsx
3. ContactUsContainer.jsx

### Frameworks
- react-bootstrap 
- MaterialUi

### Stock update method

The stock of vehicles is updated through the noSQL database Firestore (a Google service).

### Project execution
Clone the repository. Run "npm install". Run "npm start" on the IDE terminal. The app should automatically open in development mode. Otherwise, you can open the app manually by accessing the host [http://localhost:3000] in the browser.

### Project initialization
The project was initialized with "npx create-react-app".