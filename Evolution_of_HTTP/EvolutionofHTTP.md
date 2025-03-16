> Date: 13/03/2025 

# Evolution of HTTP 

`HTTP`: HyperText Transfer Protocol   

>What is hypertext??   

Hypertext is a way to facilitate the retrieval of information and as a means to providing access to information. 

**HTTP** is the underlying protocol of WWW, developed by Tim Berners Lee and his team in between 1989-1991. The 4 blocks of WWW are: 
1. HTML
2. HTTP
3. browser
4. server 
   
## HTTP/0.9 - One line protocol
It is a one-line protocol. It was extremely simple. The request message consists of only possible `GET` method and the resource URI. There was no need of specifying full URL because at that time, a server was responsible for one website. So, once connected to the server, the server knew all the subsequent requests are for which **host**. That's why there was no mention of scheme, domain and port.     
Request:
```HTTP
GET /index.html
```
Response:  
```HTTP
<html>
    your response
</html>
```  

## HTTP/1.0 - Building extensibility
HTTP/0.9 was limited in nature. But later on the browser and the servers made it more versatile. The added feature in HTTP/1.0 were: 
1. HTTP version was included in both request and response message.
2. status code line was introduced.
3. HTTP headers was introduced in both request and response message.
4. Documents other than plain HTML file could be transmitted. and thanks to Content-Type header. 

Example:   
Request - Response message:
```HTTP
GET /my-page.html HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

HTTP/1.0 200 OK
Date: Tue, 15 Nov 1994 08:12:31 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/html
<HTML>
A page with an image
  <IMG SRC="/my-image.gif">
</HTML>
```  

## HTTP/1.1 - The standardized protocol
The improvements in HTTP/1.0 involved:   
1. Kepp-alive, reused connection
2. pipelining was added
3. chunked responses were also supported
4. additional cache control mechanism were inttroduced
5. content negotiation was introduced
6. Host header was introduced. 

## HTTP/2.0 - a protocol for greater performance
Much more data was transmitted over significantly more HTTP requests and this created more complexity and overhead for HTTP/1.1 connections. To account for this, google implemented `SPDY` protocol, an experimental protocol. This serves as the foundation of HTTP/2.0 protocol. It defined an increase in responsiveness and solved the problem of duplicate data transmission. It offers:  
1. it is a binary protocol
2. it is a multiplexed protocol. Parallel requests can be made over the same connection. 
3. it compresses headers. 

The rapid adoptiop of this protocol is because we only need to renew the server version and the legacy browser. 

## Post HTTP/2.0 Evolution
New extensions: 
1. Support for `Alt-Svc` 
2. The introduction of `client hints`
3. Security related prefixes in the cookie header

## HTTP/3.0 -  HTTP over QUIC 
HTTP uses QUIC over TCP for Transport layer portion. In HTTP/2.0, even if it is a multiplexed protocol, failure detection and retransmission can block all other streams. But in the QUIc, it runs multiple streams over UDP and packet loss detection and retransmission in a stream is independent of other streams. So it  does not block other streams. 

