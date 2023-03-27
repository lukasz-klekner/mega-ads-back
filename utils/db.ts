import { MongoClient } from "mongodb";

const URL = 'mongodb://localhost:27017';
const DB_NAME = 'mega_ads'

const client = new MongoClient(URL)
client.connect()
const db = client.db(DB_NAME)
