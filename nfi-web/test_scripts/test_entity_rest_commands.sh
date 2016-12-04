curl -H "Content-Type: application/json" -X POST -d '{"firstName": "Glen", "lastName": "Filson"}' http://localhost:8080/testEntities
curl -H "Content-Type: application/json" -X GET http://localhost:8080/testEntities/1
curl -H "Content-Type: application/json" -X POST -d '{"id": "1", "firstName": "Glenn"}' http://localhost:8080/testEntities
curl -H "Content-Type: application/json" -X GET http://localhost:8080/testEntities/1

