>Day-06 

Rest defines a set of arhitectural principles by which web services are designed. It is the most popular interface design system now. It has displaced `SOAP` and `WSDL` based interface design. 

> Learn more: SOAP and WSDL

A concrete implementation of a REST Web service follows four basic design principles:

1. Use HTTP methods explicitly.
2. Be stateless.
3. Expose directory structure-like URIs.
4. Transfer XML, JavaScript Object Notation (JSON), or both. 

### Use HTTP methods explicitly
The inherent design flaw in many WEB APIs due to the unintended usage of HTTP methods. The semantics support that we should use `GET` method to retrieve sth from server. It is the intended use of `GET`. If we use `GET` method to do a transaction in the database, this is not semantically right. For example:  

#### Refactoring of GET method used for database opeation 

```HTTP
GET /users?name=robert HTTP/1.1 
```  

After refactoring: 
```HTTP 
POST /users HTTP/1.1 
--- 
---
{
    "name": "robert" 
}
(Note: this can be XML form)
```   

```HTTP 
GET /users/robert HTTP/1.1
```    

### statelessness 
As the web services are stateless, it removes the effort and need to synchronize the session data with other application. 


### Directory structure like URI

example: 
```HTTP
http://www.myservice.org/discussion/topics/{topic} 
```   
> Keep in mind:   
1. never use server side scripting file extension in the URI. We can resue it 
2. keep everything in lowercase
3. Substitute spaces with hypen or underscore
4. avoid query string as much as you can
5. send a default resurce istead of 404 status code in the case of partial path provided. 

It's also important that the relationship between resources that's encoded in the URIs remains independent of the way the relationships are represented where they are stored.  
Example API: 

Suppose the storage: 
```
authors={
    ...
    ...
}

books={
    ...
    ...
}
``` 


```HTTP    
GET /authors/:authorid/books HTTP/1.1  
GET /books/:bookid HTTP/1.1
```

### Transfer XML, JSON or both

