import { MongoClient } from 'mongodb';

export async function connectDatabase() {
    const client = await MongoClient.connect(
        'mongodb+srv://meetupuser:RKbhVj8zhkbjivJy@cluster0.fzf8u3l.mongodb.net/meetups_db?retryWrites=true&w=majority'
    );

    return client;
}

export async function insertDocument(client, collection, document) {
    const db = client.db();

    const result = await db.collection(collection).insertOne(document);

    return result;
}

export async function getAllDocuments(client, collection, sort, filter = {}) {
    const db = client.db();

    const documents = await db.collection(collection).find(filter).sort(sort).toArray();

    return documents;
}

export async function getDocumentIdList(client, collection) {
    const db = client.db();
    const idList = await db.collection(collection).find({}, { _id: 1 }).toArray();

    return idList;
}

export async function getOneDocument(client, collection, filter = {}) {
    const db = client.db();

    const document = await db.collection(collection).findOne(filter);

    return document;
}


