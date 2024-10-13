# SISWA FEATURE AND ENDPOINT
end point siswa as parrent class for other entity

# Feature 1 : Get All Home Work
Endpoint: GET /api/siswa/tugas

Request Cookie (for authorization):
- X-API-Token: token

Response Body (no assigment):
``` json 

{
    "message": "No home work now"
}

```

Response body (Have a assigment):

``` json

{
    "message": "Succes getTugas",
    "Tugas" : [
        {
            "id": 1,
            "mapel": "PKN",
            "judul": "Tugas  Kelompok PKN",
            "description": "Membuat resume sejarah kemerdekaan",
            "deadLine": 25-10-2024,
            "guru": "teacher_name"
        },
         {
            "id": 2,
            "mapel": "PAI",
            "judul": "Tugas  Kelompok PAI",
            "description": "Praktek Nikah",
            "deadLine": 25-11-2024,
            "guru": "teacher_name"
        }
    ]
}

```

Response body (error):
``` json 

{
    "message": "internal server eror, something went wrong",
    "error": "erorr description"
}

```

# Feature 2: Get User kas
Endpoint GET /api/siswa/kas

Request Cookie (for authorization):
- X-API-Token: token
- X-USER-ID : userID (from decode token)

Response Body (if you dont paid kas this month):
``` json 

{
    "message": "this month you dont paid kas",
}

```

Response Body (if you paid cash and have several condition):
``` json 

{
    "message": "Succes Get Kas",
    "listKas": [
        {
            "id": 1,
           "nama": "username",
           "jumlah": 5000,
           "bulan": "July",
           "Minggu": "Satu",
           "Status": "Lunas",
           "tgl_pembayaran": 25-07-2023
        },
         {
            "id": 2,
           "name": "username",
           "jumlah": 2000,
           "bulan": "July",
           "Minggu": "Dua",
           "Status": "Kurang",
           "tgl_pembayaran": 11-07-2023 
        },
        {
            "id": 3,
           "name": "username",
           "jumlah": 0,
           "bulan": "July",
           "Minggu": "Tiga",
           "Status": "Belum_Bayar",
           "tgl_pembayaran": 15-07-2023 
        }
    ]
}
```

Response body (error):
``` json 

{
    "message": "internal server eror, something went wrong",
    "error": "error description"
}

```

# Feature 3: Get All Events
Endpoint GET /api/siswa/event

Request Cookie (for authorization):
- X-API-Token: token

Response body (School is not have event in this month)
``` json 

{
    "message": "No event this month",
}
```
Response body (if an event in this month):
```json

{
    "message": "Succes get event",
    "Event": [
        {
            "id": 1,
            "pelaksanaan": 25-11-2024,
            "judul": "Drama Bulan Bahasa",
            "Deskripsi": "Job desk:
            no 1 - perleng'
            "
        }
    ]
}
```
Response body (error):
``` json 

{
    "message": "internal server eror, something went wrong"
}

```
# Feature 4: Get Mapel
Endpoint: GET /api/siswa/mapel

Request Cookie (for authorization):
- X-API-Token: token

Response body (Succes):
``` json 

{
    "message": "Succes get mapel",
    "listMapel": [
        {
            "id": 1,
            "hari": "senin",
            "guru": "teacher_name",
            "mapel": "Rekayasa Perangkat Lunak"
        },
         {
            "id": 2,
            "hari": "senin",
            "guru": "teacher_name",
            "mapel": "Pendidikan Agama Islam"
        },

    ]
}
```
Response body (if admin change jadwal):
``` json 

{
    "message": "under maintanance"
}

```
Response body (error):
``` json 

{
    "message": "internal server eror, something went wrong"
}

```
# Feature 5: Get profile
Endpoint GET /api/siswa/profile

Request Cookie (for authorization):
- X-API-Token: token
- X-USER-ID : userID (from decode token)

Response body (Sucess):
``` json 

{
    "photo": "https://anonymous.com",
    "email": "username_32rpl@student.smktelkom-mlg.sch",
    "no_telp": "0812345678"
}

``` 
Response body (Failed) :
``` json 

{
    "message": "profile not found"
}

```
Response body (error):
``` json 
{
    "message": "internal server eror, something went wrong"
}
```

# Feature 6: Edit Profile
Endpoint PUT /api/siswa/

Request Cookie (for authorization):
- X-API-Token: token
- X-USER-ID : userID (from decode token)

Request body, photo and no_telp has optional character you can add value either or both:
``` json

{
    "photo": "https://anonymous.com",
    "no_telp": "0812345678"
}

```
Response body (Failed) (if your profile not exist) :
``` json 
{
    "message": "Siswa not found"
}
```
Response body (Success): 
``` json 

{
    "id": 1,
    "email": "username_32rpl@student.smktelkom-mlg.sch",
    "no_telp": "0812345678",
    "photo_Profile": "http://anonymous.com"
}

```
# Feature 7: GET PENGUMUMAN
Endpoint: GET /api/siswa/pengumuman

Request Cookie:
- X-API-TOKEN: token

Response body (succes): 
``` json 
{
    "message": "succes get pengumuman",
    "pwngumuman" : {
        "id": 1,
        "description": "announcment description",
        "createAt": 25-04-2024,
        "updatedAt": 25-04-2024
    }
}
```

Response body :
``` json 
{
    "message": "no pengumuman this month"
}
```
Response body (error):
``` json 
{
    "message": "internal server eror, something went wrong"
}
```