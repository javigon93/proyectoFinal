const { MongoClient } = require('mongodb');
const config = require('./config.json');
const { connectionURL, DB } = config.database;

let client;
let db;

module.exports = {
    db: () => db,
    connect: async () => {
        console.log('Attempting connection');
        client = await MongoClient.connect(connectionURL).catch(err => {
            console.log(err);
        });;
        db = client.db(DB);
        console.log('Connection Opened');
    },
    close: async () => {
        if (client) {
            await client.close().catch(err => {
                console.log(err);
            });;
            console.log('Conection Closed');
        }
    },
};