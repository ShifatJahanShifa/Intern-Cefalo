Let’s say we’re describing an order system with customers, orders, line items, products, etc. Consider the URIs involved in describing the resources in this service suite:

## Resource URI: for customers

1. to insert a new customer 
```HTTP
POST http://www.example.com/customers
```  

2. to read a custoer with id #123
```HTTP
GET http://www.example.com/customers/123
```   

3. to replace or update the customer data with id #345
```HTTP
PUT http://www.example.com/customers/345
```     

4. to delete the customer data with id #345
```HTTP
DELETE http://www.example.com/customers/345
```  

## Resource URI: for products

1. to insert a new product 
```HTTP
POST http://www.example.com/products
```  

2. to read a product with id #123
```HTTP
GET http://www.example.com/products/123
```   

3. to replace the customer data with id #345
```HTTP
PUT http://www.example.com/products/345
```     

4. to update the customer data with id #345
```HTTP
PATCH http://www.example.com/products/345
```     

5. to delete the customer data with id #345  
```HTTP
DELETE http://www.example.com/products/345
```  

## Resource URI: for orders  

1. create a new order for a customers
```HTTP
POST http://www.example.com/customers/345/orders 

or 

POST http://www.example.com/orders
```  
