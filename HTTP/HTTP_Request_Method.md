> **DAY-04**

# HTTP Request Methods

## Safe
Those methods are safe if they dont alter the state of the server. such as `GET`, `HEAD`,`OPTIONS` etc. Here safe means that the client does not explicitly request for a change in the server. Web crawlers also rely on safe methods. It does not need to be static files only we will fetch using safe methods.

Those methods are unsafe if they alter the state of the server. such as `POST`, `PUT`, `PATCH` etc. 
## Idempotent
Those methods are idempotent if we get the same response everytime we make request with that methods. such as `GET`, `HEAD`.

> Fact 

All safe methods are idempotent but not all idempotent methods are safe.
For example: `GET`, `HEAD`, `OPTIONS` are safe as well as idempotent but `PUT`, `DELETE` are idempotent but unsafe. 



## Cacheable
We cache HTTP response as well as a new request to the server. 

`However, we cannot cache all HTTP responses. There are some constraints.` 

1. GET and HEAD method is cacheable. Response to the post, patch method can be cached if freshness is indicated and content-location is set. But this is rarely implemented. For example, Firefox does not support it. Response for the put and delete method cannot be cacheable.  
2. Some status code is cacheble. Such as 200, 203, 204, 206, 300, 301, 404, 405, 410, 414, and 501.
3. There are no specific headers with values to prohibit caching. Like we can prohibit caching using `cache-control header` with `no-cache` value.  

>Three cases:       

`case-1`   
Both The request method and the status of the response are cacheable, the response to the request can be cached. 

```HTTP
    GET /pageX.html HTTP/1.1
    (…)

    200 OK
    (…)
```

`case-2`
The response to the request with **PUT** method cannot be cached. Also it invalidates the cached response of **GET** method. Suppose we have cached response to a request with **GET** or **HEAD** method to a specific URI. Now, we have made a request to that URI with **PUT** method. Now it will invalidate the cached response. For example, we have made a **GET** request to URI '/pageX.html' and cached the response. Now we are making a **PUT** request to the same URI '/pageX.html'. It will invalidate the cached data. 

```
    PUT /pageX.html HTTP/1.1
    (…)

    200 OK
    (…)
```

`case-3`
We can prohibit caching using specific value of **cache-control** header in the response message.

```
    GET /pageX.html HTTP/1.1
    (…)

    200 OK
    Cache-Control: no-cache
    (…)
```
### More on caching and cache-control 
By using cache-control, we can define how long the response to be stored and under what conditions it can be reused. 

Two places to cache the response. 
- Browser
- Cache server    

Browser can cache the response of a frequent request to the device's local storage. The directory is actually hidden. The response can be stored in compressed or hashed format.

> some terms: 

`freshness` : it means how long the response will be valid. 

> Questions? 


why actually the response of the **POST** and **PATCH** request is not implemented usually?? 


> What is HTTP content?? What is Payload??

HTTP content actually resides in HTTP message's body. The response for the `HEAD` method, status code `204(no content)` and `304(not modified)` do not include HTTP content.    

For example: 
```HTTP
HTTP/1.1 200 OK
Content-Type: text/plain

Mozilla Developer Network
```

here, `Mozilla Developer Network` is HTTP content. 

Another example: 
```HTTP
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

7\r\n
Mozilla\r\n
9\r\n
Developer\r\n
7\r\n
Network\r\n
0\r\n
\r\n
``` 
here, we use transfer encoding value to encode the data into chunks. 

> Note: i will go through the chunk structure later 

## Details of each method

`GET`  
When we use **GET** method in a request, we do not include any HTTP content with the request. 

> If we use body with the **GET** request, may get **4XX** client error message by some servers. But another site says "GET request message has an optional request body which contains the query string"

> Syntax 

```HTTP
GET <request-target>["?"<query>] HTTP/1.1
``` 

> Elaborated Syntax

```HTTP
GET request-URI HTTP-version
(optional request headers)
(blank line)
(optional request body)
```

`<request-target`  
Here, the request-target formation may differ depending on the server.    
If the request is directly forwarding to the origin server, then the path in the **GET** request will be a path without domain name. 
```HTTP
GET /images/pic.jpg HTTP/1.1
Host: www.example.com
```
If the request is forwarding to the proxy server, then the path in the **GET** request will be a path with the domain name. 

```HTTP
GET www.example.com/images/pic.jpg HTTP/1.1
Host: www.example.com
``` 

> Note: in all cases, the Host header is included to indicate the domain which will satisfy the client's request. 

`query`   
optional. Preceeded by `?` mark in the form of `key=value` pairs. 

### Example
The following GET request asks for the resource at example.com/contact:

```HTTP
GET /contact HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
``` 

and the response:   
```HTTP
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Date: Fri, 21 Jun 2024 14:18:33 GMT
Last-Modified: Thu, 17 Oct 2019 07:18:26 GMT
Content-Length: 1234

<!doctype html>
<!-- HTML content follows -->
```

### Testing HTTP Requests

`Telnet`   
It is a character-based protocol. 

> Steps

1. enabled the telnet client from windows features on off options
2. in the cmd, telnet 127.0.0.1 3000 (built TCP connection with the server)
3. 

