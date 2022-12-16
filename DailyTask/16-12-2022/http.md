# HTTP

## DNS Lookup

- Domain Name System
    - http://www.gascgobi.ac.in/ ==> http://182.50.132.56/

        2 options
    1. Your ISP provide the DNS resolver
    2. You manually provide the DNS
        - Common DNS (eg:) 1.1.1.1 , 8.8.8.8 and 8.8.4.4


## HTTProtocol
- Plain text protocol

    Status code

    100 Information responses
        - 101 Switching protocol(using in Web socket)

    200 Success responses
        - 200 OK
    
    300 Redirection responses
        - 301 Moved Permanently
        - 304 Not Modified
        - 307 Internal Redirection

    400 Client Error responses
        - 400 Bad Request
        - 402 Payment required
        - 403 Forbidden
        - 404 Page Not Found

    500 Server Error responses
        - 500 Internal Server Error
        - 504 Gateway Timeout


## Port number

http port 80
https port 443


## Methods

GET

POST(Is TOP, It Support GET,PUT,DELETE because its use body)

PUT

PATCH

DELETE

