# SEKERTARIS FEATURE & ENDPOINT
sekertaris is child class from siswa, so sekertaris can used siswa feature

# HOW TO USE SISWA FEATURE & ENDPOINT
- GET  /api/sekertaris/kas

- GET /api/sekertaris/event

- GET /api/sekertaris/tugas

- GET /api/sekertaris/profile

- GET /api/sekertaris/mapel

- PUT /api/sekertaris/

# FEATURE 1: ADD TUGAS
Endpoint: POST /api/sekertaris/tugas

Request Cookie:
- X-API-TOKEN: token
- X-API-ROLE: role (decode token)

Request Body: 
``` json 
{
    "judul": "home work title",
    "description" : "description",
    "deadline": 10-09-2024,
    "guruID": 5
}
```

Response body (tugas already exist)
``` json 
{
    "message": "Tugas already exist"
}
```

Response body (succes):
``` json
{
   "message": "succes ad tugas",
   "result": {
     "id": 4,
    "guru": "guru name",
    "mapel": "mapel",
    "judul": "homme work title",
    "description": "home work description",
    "deadline": 10-09-2024,
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

# FEATURE 2: UPDATE TUGAS
Endpoint: PUT /api/sekertaris/tugas/:id

Request Cookie:
- X-API-Token: token
- X-API-role: decode token

Request params: 
- id

Request body (optional value):
``` json
{
    "id": 4,
    "guru": "guru name",
    "mapel": "mapel",
    "judul": "homme work title",
    "description": "home work description",
    "deadline": 10-09-2024,
}
```
Response body (succes):
``` json 
{
     "message": "Tugas updated",
    "result": {
        "id": 4,
    "guru": "guru name",
    "mapel": "mapel",
    "judul": "homme work title",
    "description": "home work description",
    "deadline": 10-09-2024,
    }
}
```
Response body (failed):
``` json 
{
    "message": "Your data is not exist"
}
```
Response body (error):
``` json 
{
      "message": "internal server error, something wwnt wrong",
    "error": "error details"
}
```
# FEATURE 3: DELETE TUGAS
Endpoint: DELETE /api/tugas/:id

Request Cookie:
- X-API-TOKEN: token
- X-API-ROLE: decode token

Request Params:
- id

Response body (succes): 
``` json 
{
    "message": "succes deleted tugas" 
}
```

Response body (failde): 
```json
{
    "message": "data not found"
}
```
Response body (error):
``` json 
{
      "message": "internal server error, something wwnt wrong",
    "error": "error details"
}
```

# FEATURE 4: ADD EVENT
Endpoint: POST /api/sekertaris/event

Request Cookie:
- X-API-TOKEAN: token
- X-API-ROLE: role

Request Body:
``` json 
{
    "judul": "event tittle",
    "descripton": "event escription",
    "pelasanaan": 10-03-2024
}
```

Response body (succes):
``` json 
{
    "message": "Succes add event",
    "result": {
        "id": 1,
        "judul": "title event",
        "descripton": "event description",
        "pelasanaan": 10-03-2024
    }
}
```

Response body (failed):
``` json 
{
    "message": "event is exist",
     "result": {
        "id": 1,
        "judul": "title event",
        "descripton": "event description",
        "pelasanaan": 10-03-2024
    }
}
```
Response body (error):
``` json 
{
      "message": "internal server error, something wwnt wrong",
    "error": "error details"
}
```
# FEATURE 5: EDIT EVENT
Endpoint : PUT /api/sekertaris/event/;id

Request Cookie:
- X-API-TOKEN: Token
- X-API-ROLE: decode token

Request Params: 
- id

Request body (optional choise):
``` json
{
     "judul": "event tittle",
    "descripton": "event escription",
    "pelasanaan": 10-03-2024
}
```

Response body (failed):
``` json 
{
    "message": "event is not exist"
}
```
Response body (error):
``` json 
{
      "message": "internal server error, something wwnt wrong",
    "error": "error details"
}
```
# FEATURE 6: DELETE EVENT:
Endpoint: DELETE /api/sekertaris/event/:id

Request Cookie:
- X-API-TOKEN: token
- X-API-ROLE: decode token

Request Params:
- id

Response body (succes):
``` json 
{
    "message": "Succes deleted event"
}
```

Response body (failed):
``` json 
{
    "message": "data not found"
}
```

Response body (error):
``` json 
{
      "message": "internal server error, something wwnt wrong",
    "error": "error details"
}
```

# FEATURE 7: ADD GURU
Endpoint: POST /api/sekertaris/guru

Request Cookie:
- X-API-TOKEN: token
- X-API-ROLE: decode token

Request body:
``` json
{
    "nama": "teacher name",
    "mapel": "pelajaran"
}
```

Response body (failed):
``` json 
{
    "message": "guru is exist"
}
```

Response body (succes):
``` json
{
    "message": "succes add guru",
    "result": {
        "id": 1,
        "name": "teacher name",
        "mapel": "pelajaran",
        "createdAt": 25-09-2024,
        "updatedAt": 25-09-2024
    }
}
```
Response body (error):
``` json 
{
      "message": "internal server error, something wwnt wrong",
    "error": "error details"
}
```
# FEATURE 8: UPDATED GURU
Endpoint: PUT /api/guru/:id

Request cookie: 
- X-API-TOKEN: token
- X-API-ROLE: decode token

Request Params:
- id

Request body (optional value):
``` json 
{
    "name": "teacher name",
    "mapel": "pelajaran"
}
```

Response body (failed):
``` json 
{
    "message": "guru is exist"
}
```

Response body (succes)
``` json 
{
    "message": "guru updated",
    "result": {
        "id": 1,
        "name": "teacher name",
        "mapel": "pelajaran",
        "createdAt": 25-09-2024,
        "updatedAt": 26-09-2024
    }
}
```

# FEATURE 9: DELETE GURU
Endpoint: DELETE /api/sekertaris/guru/:id

Request Cookie:
- X-API-TOKEN: token
- X-API-role: decode token

Request Params:
- id

Response body (failed): 
``` json 
{
    "message": "data not found"
}
```

Response body (succes): 
``` json 
{
    "message": "succes deleted guru"
}
```
Response body (error):
``` json 
{
      "message": "internal server error, something went wrong",
    "error": "error details"
}
```
# FEATURE 10: ADD JADWAL
Endpoint: POST /api/sekertaris/jadwal/

Request Cookie:
- X-API-TOKEN: token
- X-API-Role: decode token

Request Body:
``` json 
{
    "hari": "saturday",
    "idGuru": 1
}
```

Response body (failed):
``` json 
{
    "message": "jadwal is exist"
}
```

Response body (succes):
``` json 
{
    "message": "succes add jadwal",
    "result": {
        "id": 1,
        "hari": "saturday",
        "guru": "teacher name",
        "mapel": "pelajaran"
    }
}
```
Response body (error):
``` json 
{
      "message": "internal server error, something went wrong",
    "error": "error details"
}
```
# FEATURE 11: UPDATE JADWAL
Endpoint: PUT /api/sekertaris/jadwal/:id

Request Cookie:
- X-API-TOKEN: token
- X-API-ROLE: decode token

Request Params:
- Id

Request body (optional value):
``` json 
{
    "hari": "thrusday",
    "guruID": 5
}
```
Response body (failed):
``` json 
{
    "message": "data not found"
}
```
Response body (success):
``` json 
{
    "message": "jadwal updated",
     "result": {
        "id": 5,
        "hari": "thursday",
        "guru": "teacher name",
        "mapel": "pelajaran"
    }
}
```
Response body (error):
``` json 
{
      "message": "internal server error, something went wrong",
    "error": "error details"
}
```
# FEATURE 12: DELETE JADWAL
Endpoint: DELETE /api/sekertaris/jadwal/:id

Request Cookie:
- X-API-TOKEN: token
- X-API-ROLE: decode token

Request Params:
- id

Response body (failed) :
``` json 
{
    "message": "data not found"
}
```
Response body (succes):
``` json 
{
    "message": "succes deleted jadwwal"
}
```
Response body (error):
``` json 
{
      "message": "internal server error, something went wrong",
    "error": "error details"
}
```
# FEATURE 13: CREATE SISWA
Endpoint: CREATE /api/sekertaris/siswa

Request Cookie:
- X-API-TOKEN: token
- X-API-ROLE: role

Request Body:
``` json 
{
    "email": "user email",
    "password": "user password",
    "nama": "user name",
    "no_telp": "user phone number",
    "absen": "user presension"
}
```

Response body (succes): 
``` json 
{
    "message": "user successfully created",
    "result": {
        "id": 1,
        "nama": "user name",
        "absen": 20,
        "email": "user email",
        "jabatan": "SISWA",
        "no_telp": "user phone number"
    }
}
```
Response body (failed):
``` json 
{
    "message": "user is exist",
}
```
Response body (error):
``` json 
{
      "message": "internal server error, something went wrong",
    "error": "error details"
}
```
# FEATURE 14: UPDATE SISWA
Endpoint: PUT /api/sekertaris/siswa/:id

Request Cookie:
- X-API-TOKEN: token
- X-API-ROLE: role

Request Params: 
- id

Request body (optional value):
``` json 
{
    "email": "user email",
    "password": "user password",
    "nama": "user name",
    "no_telp": "user phone number",
    "absen": "user presension"
}
```

Response body (failed):
``` json 
{
    "message": "user not found"
}
```

Response body (succes):
``` json 
{
    "message": "siswa updated",
    "result": {
         "email": "user email",
    "password": "user password",
    "nama": "user name",
    "no_telp": "user phone number",
    "jabatan": "SISWA",
    "absen": "user presension"
    }
}
```
Response body (error):
``` json 
{
      "message": "internal server error, something went wrong",
    "error": "error details"
}
```
# FEATURE 15: DELETE SISWA
Endpoint: DELETE /api/sekertaris/siswa/:Id

Request Cookie:
- X-API-TOKEN: token
- X-API-ROLE: role

Request Params: 
- id

Response body (failed):
``` json 
{
    "message": "data not found"
}
```

Response body (succes): 
``` json 
{
    "message": "user deleted"
}
```
Response body (error):
``` json 
{
      "message": "internal server error, something went wrong",
    "error": "error details"
}
```
# FEATURE 16: GET SISWA 
Endpoint: GET /api/sekertaris/siswa/

Request Cookie:
- X-API-TOKEN: token
- X-API-ROLE: role

Response body (failed):
``` json 
{
    "message": "no siswa added"
}
```
Response body (succes): 
``` json 
{
    "message": "success get all siswa",
    "result": [
        {
    "id": 1,
    "email": "user email",
    "password": "user password",
    "nama": "user name",
    "no_telp": "user phone number",
    "absen": "user presension",
    "jabatan": "SISWA",
    "createdAt": 15-03-2023,
    "updatedAt": 15-03-2024
  },
  {
      "id": 2,
    "email": "user email",
    "password": "user password",
    "nama": "user name",
    "no_telp": "user phone number",
    "absen": "user presension",
    "jabatan": "BENDAHARA",
    "createdAt": 15-03-2023,
    "updatedAt": 15-03-2024
  }
    ]
}
```

# FEATURE 17: CREATE PENGUMUMAN
Endpoint: POST /api/sekertaris/pengumuman/

Request Cookie:
- X-API-TOKEN: token
- X-API-ROLE: role

Request body:
``` json 
{
    "description": "description announcment"
}
```

Response body (failed):
``` json 
{
    "message": "internal server error",
    "error": "error description"
}
```

Response body (succces):
``` json 
{
    "message": "succes add pengumuman",
    "result": {
        "id": 1,
        "description": "annoucment description",
        "createdAt": 25-12-2024,
        "updatedAt": 25-12-2024
    }
}
```
# FEATURE 18: UPDATE PENGUMUMAN
Endpoint: PUT /api/sekertaris/pengumuman/:id

Request Cookie:
- X-API-TOKEN: token
- X-API-ROLE: decode token

Request Params:
- id

Request body (optional value):
``` json 
{
    "description": "annoucment description"
}
```

Response body (failed):
``` json 
{
    "message": "internal server error",
    "error": "error description"
}
```
# FEATURE 19: DELETE PENGUMAN
Endpoint: DELETE /api/sekertaris/pengumuman/:id

Request Cookie:
- X-API-TOKEN: token
- X-API-ROLE: decode token

Request Params:
- id

Request body (optional value):
``` json 
{
    "messsage": "annoucment deleted"
}
```

Response body (failed):
``` json 
{
    "message": "internal server error",
    "error": "error description"
}