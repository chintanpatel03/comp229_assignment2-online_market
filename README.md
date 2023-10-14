## Online Market Application with CRUD Operations
This repository presents an Online Market Application created with Node.js, Express, and MongoDB. It offers a comprehensive guide to setting up the application and covers CRUD (Create, Read, Update, Delete) operations through RESTful APIs.

### Getting Started
To run this application locally, follow these steps:

### Prerequisites
- Node.js installed on your machine
- MongoDB database set up
- Code editor (e.g., Visual Studio Code)

### Installation
1. Clone the repository to your local machine.
```
git clone https://github.com/chintanpatel03/comp229_assignment2-online_market.git
```
2. Install dependencies.
```
cd comp229_assignment2-online_market
npm install
```

3. Configure your MongoDB connection in config.js.
```
module.exports = {
  mongoURI: 'your-mongodb-connection-string',
};
```
4. Start the server.
```
npm start
```

### CRUD Operations
The application supports the following CRUD operations:

### Create
- Endpoint: POST /api/products
- Description: Create a new product.
- Request Body: Provide product details (name, description, price, quantity, category).
- Response: Returns the created product.

### Read
- Endpoint: GET /api/products
- Description: Get a list of all products.
- Response: Returns an array of products.
- Endpoint: GET /api/products/:id
- Description: Get a specific product by ID.
- Response: Returns the product details.

### Update
- Endpoint: PUT /api/products/:id
- Description: Update a specific product by ID.
- Request Body: Provide updated product details.
- Response: Returns the updated product.

### Delete
- Endpoint: DELETE /api/products/:id
- Description: Delete a specific product by ID.
- Response: Returns a success message.

Same operations are performed on categories.

### Testing
You can test the CRUD operations using tools like Postman or Thunder client. Ensure the server is running and send requests to the respective endpoints.

### Contributing
Feel free to contribute to this project by creating pull requests or reporting issues.