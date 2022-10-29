const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// user name : dbUser1
// password : 4dYdqEzb5OQW8RzU



const uri = "mongodb+srv://dbUser1:4dYdqEzb5OQW8RzU@cluster0.lezxbrx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const userCollection = client.db('nodeMongoCrud').collection('users');
        app.post('/users', async(req, res) => {
            const user = req.body;
            console.log(user);
            const result = await userCollection.insertOne(user)
            res.send(result)
        })
    }
    finally {

    }
}
run().catch(error => console.log(error));


app.get('/', (req, res) => {
    res.send('Hello from node mongo crud server')
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})