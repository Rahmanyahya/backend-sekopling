#  CEK JWT

Request token from coookie:

``` json 

{
    "token": "user token"
}

```

Respon body (user without token) :

``` Json 

{
    "message" : "Please log in to your account"
}

```
Response body (user token wrong secret key and token expired) :

``` json 

{
    "message" : "Acces denied"
}

```
Response body (programs doesn't reachable token cookie) :

``` json 

{
   "message" : "internal error token cookies is not reachable"
}

```

Response (if token authenticated), this response have decode token to continues user request:

``` json 

{
    "User" : [
        {"id": 1},
        {"Role": "user role"}
    ]
}

```