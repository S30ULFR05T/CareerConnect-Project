// // server.js
const express = require('express');
const { MongoClient, ObjectId } = require("mongodb");
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());


// Replace the uri string with your connection string.
const url = 'mongodb://0.0.0.0:27017/';
const client = new MongoClient(url);


// async function run() {
//     try {
//       // Connect to the "insertDB" database and access its "haiku" collection
//       const database = client.db("carrer-connect");
//       const haiku = database.collection("user");
      
//       // Create a document to insert
//       const doc = {
//         title: "Record of a Shriveled Datum",
//         content: "No bytes, no problem. Just insert a document, in MongoDB",
//       }
//       // Insert the defined document into the "haiku" collection
//       const result = await haiku.insertOne(doc);
//       // Print the ID of the inserted document
//       console.log(`A document was inserted with the _id: ${result.insertedId}`);
//     } finally {
//        // Close the MongoDB client connection
//       await client.close();
//     }
//   }
//   // Run the function and handle any errors
// run().catch(console.dir);

client.connect().then(() => {
    console.log("Connected to MongoDB");
}).catch((e) => {
    console.log("Error connecting to MongoDB", e);
})

// Student Login email and password
async function getStudent(email, password) {
  try {   
    await client.connect();
    // Get the database and collection on which to run the operation
    const database = client.db("carrer-connect");
    const students = database.collection("student");
    
    const idToFind = '60d5f47b8d1b2c1a4c8e4d72';
    const student = await students.findOne({
      email: email,
      password: password
      });

      

    if (student) {
      console.log('student found:', student);
    } else {
      throw new Error("student not found")
      // console.log('No student matches the provided ID.');
    }
    
  } catch(Error) {
    throw Error
  }
   finally {
    await client.close();
  }
}
// Student login email and password closing

// company login email and password opening
async function getCompany(email, password) {
  try {   
    await client.connect();
    // Get the database and collection on which to run the operation
    const database = client.db("carrer-connect");
    const companys = database.collection("company");
    
    const idToFind = '60d5f47b8d1b2c1a4c8e4d72';
    const company = await companys.findOne({
      email: email,
      password: password
      });

      

    if (company) {
      console.log('company found:', company);
    } else {
      throw new Error("company not found")
      // console.log('No student matches the provided ID.');
    }
    
  } catch(Error) {
    throw Error
  }
   finally {
    await client.close();
  }
}
// company login email and password closing

// college login email and password opening
async function getCollege(email, password) {
  try {   
    await client.connect();
    // Get the database and collection on which to run the operation
    const database = client.db("carrer-connect");
    const colleges = database.collection("college");
    
    const idToFind = '60d5f47b8d1b2c1a4c8e4d72';
    const college = await colleges.findOne({
      email: email,
      password: password
      });

      

    if (college) {
      console.log('college found:', college);
    } else {
      throw new Error("college not found")
      // console.log('No student matches the provided ID.');
    }
    
  } catch(Error) {
    throw Error
  }
   finally {
    await client.close();
  }
}
// college login email and password closing

async function insertStudent(student) {
  try {
    await client.connect();
    const database = client.db("carrer-connect");
    const students = database.collection("student");
    console.log(student);
    const result = await students.insertOne(student);
    return result.insertedId;

  } finally {
    await client.close();
  }
}

async function insertCompany(company) {
  try {
    await client.connect();
    const database = client.db("carrer-connect");
    const companys = database.collection("company");
    console.log(company);
    const result = await companys.insertOne(company);
    return result.insertedId;

  } finally {
    await client.close();
  }
}

async function insertCollege(college) {
  try {
    await client.connect();
    const database = client.db("carrer-connect");
    const colleges = database.collection("college");
    console.log(college);
    const result = await colleges.insertOne(college);
    return result.insertedId;

  } finally {
    await client.close();
  }
}

async function addfield(studentId, field) {
  try {
    // Connect to the MongoDB server
    await client.connect();
    const database = client.db("carrer-connect");
    const students = database.collection("student");

    // Update the document by adding a new key-value pair
    const result = await students.updateOne(
      { _id: new ObjectId(studentId) },
      { $set: field }
    );

    if (result.matchedCount === 0) {
      console.log('No document found with the provided ID.');
    } else {
      console.log('Document updated successfully:', result.modifiedCount);
    }
  } catch (err) {
    console.error('An error occurred:', err);
  } finally {
    // Close the connection
    await client.close();
  }
}


app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.post("/student", (req, res) => {
  insertStudent(req.body).then((sid) => {
    res.send(sid);
  }).catch(err => {
    res.status(500).send(err);
  })
})

app.post("/company", (req, res) => {
  insertCompany(req.body).then((sid) => {
    res.send(sid);
  }).catch(err => {
    res.status(500).send(err);
  })
})

app.post("/college", (req, res) => {
  insertCollege(req.body).then((sid) => {
    res.send(sid);
  }).catch(err => {
    res.status(500).send(err);
  })
})

app.post("/student/:id/field/add", (req, res) => {
  const id = req.params.id
  addfield(id, req.body).then(() => {
    res.send('add successfully '+id);
  }).catch(err => {
    res.status(500).send(err);
  })
})

app.post("/login", (req, res) => {
  getStudent(req.body.email, req.body.password).then(() => {
    res.send('student found ');
  }).catch(err => {
    res.status(500).send(err);
  })
})

app.post("/company/:id/field/add", (req, res) => {
  const id = req.params.id
  addfield(id, req.body).then(() => {
    res.send('add successfully '+id);
  }).catch(err => {
    res.status(500).send(err);
  })
})

app.post("/companylogin", (req, res) => {
  getCompany(req.body.email, req.body.password).then(() => {
    res.send('company found ');
  }).catch(err => {
    res.status(500).send(err);
  })
})

app.post("/collegelogin", (req, res) => {
  getCollege(req.body.email, req.body.password).then(() => {
    res.send('college found ');
  }).catch(err => {
    res.status(500).send(err);
  })
})

app.post("/college/:id/field/add", (req, res) => {
  const id = req.params.id
  addfield(id, req.body).then(() => {
    res.send('add successfully '+id);
  }).catch(err => {
    res.status(500).send(err);
  })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
