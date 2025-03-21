# A Brief History of CORS

- In 1989, Tim Berners-Lee wrote the first paper on web.
- TimeBL just wanted to have text with links.
- Some people in Illinois wanted to have GUI, images.
- Netscape came out
- Then they thought images, GUIs are not enough. Why dont we add a scripting language?
- Then javascript was born
- But the javascript has problem with security holes. They were tired of fixing the issues. 
- Then finally a solution that gave a relief. The solution is:    
    *"a javascript program is not allowed to read the properties of any window (or frame) or the properties of any objects within a window if the contents of that windows were loaded from a different web server than the javascript program itself"*    
    Thus, this was the birth of `same origin policy`, the core security policy. 
- By 2001, MS decided to shut down the Internet Explorer. 
- W3C thought HTML looks ugly. It is the time to convince people to rewrite their sites in `XML`. (what is this even! Xform, xhtml! good thing we dont need to do it now)
- Just before the shut down of internet explorer development, XMLHTTPRequest was proposed. XMLs were in camel case, all the HTML were in Capital word.
- The concept till now is: the `XHR` can only hit the same origin URIs. 
- So to sum up from 1989 to 2001, the 12 years: 
  - MS shut down the IE development
  - W3C is only talking about XML
  - XHR usage to make same origin URIs
- In 2004, HTML reborn and HTML5 came out.
- XHR was still in focus. They thought why can't my JS make third party site requests? Security concerns played as the factor.
- But the issue was that we can already do the things using `<img>`, `<form>`, `<script>`. But we can at most do the `GET` request. we couldn't read the response. We could just render the response.  
- Then the people writing spec decided that the response of the request with the already allowed things like `<img>`, `<form>`, `<script>` can also be read with given permission.
- They called it `CORS: Simple Request Mode`. Under which we havd `GET` and `POST`. So any `GET` request without extra headers are allowed. And `POST` request with form encoding is allowed.
- For reading response, the concept that `origin` in the request message and `Access-Control-Allow-Origin` header in the response message was established. 
- There was obviously quirks like `ACAO Quirks`. The ACAO designers wanted it to be secure by default by supporting only 1 value in the reponse (no arrays, blobs etc) Because they wanted the value to be fully correct and not to introduce any security issue. 
- This was annoying to check everytime that the origin and the ACAO value in the response are same. 
- This was kinda sad that if we have a static public site, then how we will allow it? 
- Some said that can't we use `*` to allow everyone to read response? 
- But the concern of the designers of the CORS is that `*` was already a thing on the `Flash`, cross domain request with flash. Everyone with that setting had security vulnerability issue. 
- The solution is that CORS: ACAO * with no `Access-Control-Allow-Credentials`. That means that `ACAO: *` will only work if no cookie or credential is sent along with the request as it is a public site. (xhr.withCredentials=False). Using `*` and `withCredential` are network error.   
- `ACAO *` is the most secure setting or one of the safest HTTP headers.
- What if we want to make a more complex request? we can't. the site might not want us to.
- Why don't we let the site decide? But will the site be ready even for the request that ask? 
- The solution is `Preflight Requests`.
- We perform the preflight request for the methods which are not simple.  
- we first request with `OPTIONS` method. We put what the js is trying to do. Like we request with `Access-Control-Allow-Request-Headers` or `Access-Control-Request-Method`.
- But the complex request was a disaster. Because 
  - it adds a complicated roundtrip before each request.
  - The preflight request was capped at 10 min originally. The cache is tied to the URI.
  - a change in URI ( even query params) will mean a new preflight
