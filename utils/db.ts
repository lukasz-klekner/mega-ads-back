import { MongoClient } from "mongodb";

const URL = 'mongodb://localhost:27017';
const DB_NAME = 'mega_ads'
const AD_COLLECTION = 'ads'

const client = new MongoClient(URL)
client.connect()
const db = client.db(DB_NAME)

export const adsCollection = db.collection(AD_COLLECTION)
