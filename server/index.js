// // server.js
const express = require('express');
const { MongoClient } = require("mongodb");
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());


// Replace the uri string with your connection string.
const url = 'mongodb://0.0.0.0:27017/mydb';
const client = new MongoClient(url);


async function run() {
    try {
      // Connect to the "insertDB" database and access its "haiku" collection
      const database = client.db("carrer-connect");
      const haiku = database.collection("user");
      
      // Create a document to insert
      const doc = {
        title: "Record of a Shriveled Datum",
        content: "No bytes, no problem. Just insert a document, in MongoDB",
      }
      // Insert the defined document into the "haiku" collection
      const result = await haiku.insertOne(doc);
      // Print the ID of the inserted document
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
       // Close the MongoDB client connection
      await client.close();
    }
  }
  // Run the function and handle any errors
run().catch(console.dir);

client.connect().then(() => {
    console.log("Connected to MongoDB");
  
}).catch((e) => {
    console.log("Error connecting to MongoDB", e);
})

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
