# INTERN WRITEUP

## DAY-03

### An Overview of HTTP
HTTP is a protocol for fetching resources. It is a client-server protocol. (Client is usually a web browser, server is usually a web server, video server, ad server). 

The client and server communicate by exchanging individual messages. The message sent by the client is known as a **request**. The message sent by the server is known as a **response**. HTTP is sent over TCP or TLS-encrypted TCP connection. HTTP is an extensible protocol. Due to its extensibility, HTTP is used not only to fetch hypertext documents but also images, videos. It is used to post content to servers. It can even be used to fetch parts of documents to update the web pages on demand.

### Components of HTTP-based Systems
Between client and server, there are numerous entities known as proxies (operating at the application layers). (gateway, gateways, caches).

- **Host Header**: Value - hostname and port number.
  - A `400 Bad Request` status code may be sent to any HTTP/1.1 request message that lacks or contains more than one Host header field.
- **Forbidden Request Headers**: We cannot set or modify the header. The browser retains full control over them.
  - Example: list of forbidden request headers
  - Syntax: `Host: <host>:<port>`
  - `Host: www.google.com`
  - **Port numbers**: (https-443, http-80)

### Proxies
- **Transparent Proxy**: Does not alter the message.
- **Non-transparent Proxy**: Alters the message.

Proxies may perform numerous functions:
1. Caching
2. Filtering
3. Load balancing
4. Authentication
5. Logging

#### Details of Proxy:
- It intercepts requests, serves back responses.
- It may forward the requests, or not (when it is a cache).
- It may modify it (for example, changing its headers, at the boundary between two networks).
- There are two types of proxy servers:
  1. **Forward Proxy**.
  2. **Reverse Proxy**.

### Summary: Three Components of an HTTP-based System
- Client
- Proxy
- Server

---

### Basic Aspects of HTTP
- HTTP is **simple** (In HTTP/2, HTTP messages are encapsulated into frames).
- HTTP is **extensible** (HTTP headers make it easier to extend).
- HTTP is **stateless** but not **sessionless**. (I am not clear on this part).
- HTTP and connections: Transport layer protocol is TCP. The underlying TCP connection can be partially controlled using the **Connection** header.

---

### What Can Be Controlled by HTTP:
- Caching
- Relaxing the origin constraint
- Authentication (www-authenticate)
- Proxy and tunneling
- Sessions

---

### HTTP Flow
- To do: Inspect request and response messages.
- I have forgotten about **HTTP pipelining**. Need to recheck.

---

### HTTP Messages

- **What is multiplexing?**

#### Request Message:
- HTTP method: It can be a verb (GET, POST) or noun (OPTIONS, HEAD).
- Path: ...

#### Response Message:
- ...

---

### APIs Based on HTTP

#### Fetch API
- To make HTTP requests from JavaScript, we can use the **Fetch API**.
- Just to know, the **Fetch API** is a replacement for **XMLHttpRequest**.

#### Concepts and Usage:
The fetch API uses
- **Server-sent events**: It is a one-way service that allows a server to send events to the client, using HTTP as a transport mechanism. The client opens a connection using the **EventSource** interface and establishes event handlers. The browser converts the message into event objects and delivers it to the event handlers. If there is no type-specific event handler, then the browser passes it to the `onmessage` event handler.

