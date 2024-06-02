# Zomato Orders API

## Link: https://zomato-backend-alma.onrender.com

This project is a Node.js application built with Express and MySQL. It exposes a GET endpoint to retrieve records from the orders table in a MySQL database, with support for pagination through limit and offset query parameters.

## Features

### Endpoint: 
GET: https://zomato-backend-alma.onrender.com

### Query Parameters:
limit: Maximum number of records to return (default: 10).
offset: Number of records to skip before starting to return records (default: 0).

### Validation:
limit and offset must be positive integers.<br>
Invalid values are replaced with default values.

### Responses:
200: Success, returns an array of records.
404: No data found.
500: Internal server error.

### Error Handling
If the database connection fails, an appropriate error message is logged.
Invalid limit and offset values are automatically replaced with default values.
