# LOGIN

Endpoint: POST /api/login

Body Request:
- Email: string, format your school email 32rpl@student.smktelkom-mlg.sch.id

- Password: string, 8 Character

Request Body:

``` json 

{
    "email": "your_email_32rpl@student.smktelkom-mlg.sch",
    "password": "12345678"
}

```

Response Body: 

if your email is not registered:

``` json

{
    "message": "Your email is not registered"
}

```
if your password is worng: 

``` json 

{
    "message": "Your password is wrong"
}

```
if your succes login in your account:

``` json 

{
    "message": "Login successful",
    "token": "jwt token user"
}

```

Response Cookie:

``` json

{
    "token": "jwt token user"
}

```

# Note
token expired in 24 hours and token automatically save in your cookie, if your token is expired your account will be automatically logout