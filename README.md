ShoppingList Aplication using MongoDB, ExpressJS, AngularJS and NodeJS

CRUD application using the MEAN stack.

MongoDB can be run from anywhere in the command line by typing the command 'mongod' and hitting enter.

The node express server on the backend can be run by opening the command line and going to the server folder and typing 'node server.js'.

the angular frontend can be run by opening another command line and going to the client folder and typing 'ng serve'.

The URL for the application on localhost is: http://localhost:3000. The port can be changed in the server.js file.

The connecting port for the server to the mongoDB database can be gotten when mongoDB is initialised. Update the line below in the server.js file
"mongodb://localhost:XXXXX/shoppinglist".
Replace XXXXX with the port number the database is waiting for connection on.
