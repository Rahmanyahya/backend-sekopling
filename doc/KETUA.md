# KETUA END POINT & FEATURE
ketua has a highest position, so ketua can create all entity and used all feature

# FEATURE 1: CREATE ENTITY
Endpoint: CREATE /api/ketua/entity/

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
    "jabatan": "SISWA",
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
# FEATURE 2: UPDATE ENTITY
Endpoint: PUT /api/ketua/entity/:id

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
    "jabatan": "SISWA",
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
    "jabatan": "SISWA",
    "no_telp": "user phone number",
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
# FEATURE 3: DELETE ENTITY
Endpoint: DELETE /api/ketua/entity/:id

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
# FEATURE 4: GET ENTITY 
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
    "jabatan": "SISWA",
    "createdAt": 15-03-2023,
    "updatedAt": 15-03-2024
  }
    ]
}
```
# OTHER FEATURE
 GET  /api/ketua/kas

- GET /api/ketua/event

- GET /api/ketua/tugas

- GET /api/ketua/profile

- GET /api/ketua/mapel

- PUT /api/ketua/

- POST /api/ketua/Guru

- PUT /api/ketua/Guru/:id

- DELETE /api/ketua/Guru/:id

- POST /api/ketua/event

- PUT /api/ketua/event/:id

- DELETE /api/ketua/event/:id

- POST /api/ketua/jadwal

- PUT /api/ketua/jadwal/:id

- DELETE /api/ketua/jadwal/:id

- POST /api/ketua/tugas

- PUT /api/ketua/tugas/:id

- DELETE /api/ketua/tugas/:id

- POST /api/ketua/siswa

- PUT /api/ketua/siswa/:id

- DELETE /api/ketua/siswa/:id

- GET /api/ketua/siswa

- POST /api/ketua/pengumuman

- PUT /api/ketua/pengumuman/:id

- DELETE /api/ketua/pengumuman/:id

- CREATE /api/ketua/bendahara/

- PUT /api/ketua/bendahara/:id

- DELETE /api/ketua/bendahara/:id

- GET /api/ketua/bendahara/getAllSiswa

-  GET /api/ketua/bendahara/filter