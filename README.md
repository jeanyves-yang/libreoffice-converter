# libreoffice-converter

This is an express wrapper over the libreoffice-convert module. It can also be used as a container of the app.

## Installation

Requirements:
- NodeJS
- Yarn

Optional:
- Docker

### Run locally
```bash
y && y start
```
### Run as docker container
```bash
docker build -t libreoffice-converter .
docker run -p 3693:3693 -d libreoffice-converter
```

### Usage example
```bash
curl --location 'http://localhost:3693/convert' \
--header 'Content-Type: application/json' \
--data '{
    "data": "INSERT BASE64 OF A DOCX FILE"
}'
```
