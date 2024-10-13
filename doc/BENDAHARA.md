# BENDAHARA FEATURE & ENDPOINT
bendara is child class from siswa, so bendahara can used siswa feature

# HOW TO USE SISWA FEATURE & ENDPOINT
- GET  /api/bendahara/kas

- GET /api/bendahara/event

- GET /api/bendahara/tugas

- GET /api/bendahara/profile

- GET /api/bendahara/mapel

- PUT /api/bendahara/

# FEATURE 1: CREATE KAS TRANSACTION
Endpoint: POST /api/bendahara/kas

Request Cookie (for authorization):
- X-API-token: token
- X-role : decode token

Request Body:
``` json 
{
    "siswaId": 1,
    "price": 5000,
    "bulan": "July",
    "minggu": "Satu"
}
```
Response Body (if bendahara enters multiple transaction):
``` json 
{
    "message": "Transaction is exist"
}
```
Response Body (Success):
``` json 

{
    "message": "succes saved transaction",
    "data": {
        "siswa": "siswa_name",
        "price": 5000,
        "bulan": "July",
        "minggu": "Satu",
        "status": "Lunas"
    }
}
```
Response body (error): 
```json
{
    "message": "internal server error, something wwnt wrong",
    "error": "error details"
}
```
# FEATURE 2: UPDATE KAS TRANSACTION
Endpoint: PUT /api/bendahara/kas/:id

Request Cookie (for authorization):
- X-API-token: token
- X-role : decode token

Request Params:
- id

Request body (this request has optional character so you can enter value or not) : 
```json
{
    "price": 5000,
    "bulan": "July",
    "minggu": "Dua",
    "status": "Lunas"
}
```

Response body (if id transaction is wrong):
```json

{
    "message": "data not found"
}

```

Response Body (Success):
``` json 
{
    "message": "Data Transaction Succes Updated",
    "data": {
        "siswa": "siswa_name",
        "price": 5000,
        "bulan": "July",
        "minggu": "Dua",
        "status": "Lunas"
    }
}
```
Response body (error): 
```json
{
    "message": "internal server error, something wwnt wrong",
    "error": "error details"
}
```
# FEATURE 3: DELETE TRANSACTION
Endpoint: DELETE /api/bendahara/kas/:id

Request Cookie (for authorization):
- X-API-token: token
- X-role : decode token

Request Params:
- id

Response body (if transaction id is not exist):
``` json 
{
    "message": "Data not found"
}
```
Response body (succes):
``` json
{
    "message": "Data transaction succes deleted"
}
```
Response body (error): 
```json
{
    "message": "internal server error, something wwnt wrong",
    "error": "error details"
}
```
# FEATURE 4: READ ALL TRANSACTION
Endpoint: GET /api/bendahara/kas/filter?

Request Cookie (for authorization):
- X-API-token: token
- X-role : decode token

Request Query:
- bulan
- minggu

noted:
if you dont enter filter this endpoint will get all data without filtering, if your just add month this endpoint will get data based on month (ascending) and also the week

Response body (if data transaction is empty):
``` json 
{
 "message": "Data is empty",
}
```
Response body (success):
```json
{
    "message": "succes get kas",
     "data": {
        "siswa": "siswa_name",
        "price": 5000,
        "bulan": "July",
        "minggu": "Satu",
        "status": "Lunas"
    }
}
```