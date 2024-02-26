# Documentation for Indonesian Administrative Regions APIs

This documentation provides information on how to use the APIs for retrieving data about provinces, cities, districts, and villages in Indonesia.

## Base URL

The base URL for accessing the APIs is `http://localhost:3000`.

## /provinsi

### GET /provinsi

#### Description

This endpoint retrieves a list of provinces in Indonesia.

#### Request

- Method: GET
- URL: `/provinsi`

#### Response

- Status Code: 200 OK
- Body:
[
{
"kode_provinsi": "01",
"nama_provinsi": "Aceh"
},
{
"kode_provinsi": "02",
"nama_provinsi": "Sumatera Utara"
},
...

]


## /kota/:kode_provinsi

### GET /kota/:kode_provinsi

#### Description

This endpoint retrieves a list of cities in Indonesia based on the province code.

#### Request

- Method: GET
- URL: `/kota/:kode_provinsi`
- Parameters:
- `kode_provinsi`: The code of the province for which cities are to be retrieved.

#### Response

- Status Code: 200 OK
- Body:
[
{
"kode_kota": "01",
"kode_provinsi": "01",
"nama_kota": "Banda Aceh"
},
{
"kode_kota": "02",
"kode_provinsi": "01",
"nama_kota": "Sabang"
},
...
]


## /kecamatan/:kode_kota

### GET /kecamatan/:kode_kota

#### Description

This endpoint retrieves a list of districts (kecamatan) in Indonesia based on the city code.

#### Request

- Method: GET
- URL: `/kecamatan/:kode_kota`
- Parameters:
- `kode_kota`: The code of the city for which districts are to be retrieved.

#### Response

- Status Code: 200 OK
- Body:
[
{
"kode_kecamatan": "01",
"kode_kota": "01",
"nama_kecamatan": "Kuta Alam"
},
{
"kode_kecamatan": "02",
"kode_kota": "01",
"nama_kecamatan": "Syiah Kuala"
},
...
]


## /desa/:kode_kecamatan

### GET /desa/:kode_kecamatan

#### Description

This endpoint retrieves a list of villages (desa) in Indonesia based on the district code.

#### Request

- Method: GET
- URL: `/desa/:kode_kecamatan`
- Parameters:
- `kode_kecamatan`: The code of the district for which villages are to be retrieved.

#### Response

- Status Code: 200 OK
- Body:
[
{
"kode_desa": "01",
"kode_kecamatan": "01",
"nama_desa": "Lamteuba"
},
{
"kode_desa": "02",
"kode_kecamatan": "01",
"nama_desa": "Meuraxa"
},
...
]


## Example Usage

### Retrieve List of Provinces

GET http://localhost:3000/provinsi


### Retrieve List of Cities in a Province

GET http://localhost:3000/kota/01


Replace `01` with the province code for which you want to retrieve data.

### Retrieve List of Districts in a City

GET http://localhost:3000/kecamatan/01


Replace `01` with the city code for which you want to retrieve data.

### Retrieve List of Villages in a District

GET http://localhost:3000/desa/01

Replace `01` with the district code for which you want to retrieve data.

Note: Pastikan untuk mengganti http://localhost:3000 dengan URL sesuai dengan tempat Anda menjalankan server API.
