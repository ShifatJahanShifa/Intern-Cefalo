>Off-Day (08/03/2025)   

# HTTP Headers
## Introduction 
In HTTP/1.X, the name of the header is case-insensitive. After name, there is a colon, then optional whitespace and then value. Such as, `Allow: POST`    
In HTTP/2 and above, the name is in lowercase when we view it in the dev tool. Such as, `accept: */*`  Also For a special group of psedu-headers, the name is prefixed with a colon. Such as, `:status: 200`  

For custome headers, previously we could use with `X-` prefix. But now this is depricated. Now we can use it in the following format:   
```HTTP
My-Custom-Header: *
``` 
> 🔖 Note: write the name in Pascal-Case.  

Headers can be grouped into four categories.   
1. Rquest Headers
2. Response Headers
3. Representation Headers
4. Payload Headers

Headers can be grouped according to how proxies handle them.    
1. End-to-end headers
2. Hop by hop headers  
   

## Headers for Authentication
`WWW-Authenticate`   

This is a response header. 