const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://amonteiro:Lq0yAJ5SVl3lDGhA@cluster0.oamuv2z.mongodb.net/test?retryWrites=true&w=majority";

    // Create a new MongoClient

    const client = new MongoClient(uri);

    try {
        // Connect the client to the server
        await client.connect();

        // Make the appropriate DB calls
        await listDatabases(client);
        console.log("Connected to MongoDB");
        // Perform operations here
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};