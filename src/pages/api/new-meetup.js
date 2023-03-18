//import { MongoClient } from 'mongodb';
import { connectDatabase, insertDocument } from "../../helpers/db-util";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        // add data validation here

        let client;

    try {
        client = await connectDatabase();
    }   catch (error) {
        res.status(500).json({ message: 'Connecting to database failed!' })
        return;
    }

    try {
        await insertDocument(client, 'meetups', data);
        client.close();
    }   catch (error) {
        res.status(500).json({ message: 'Inserting data failed!' });
        return;
    }

    res.status(201).json({ message: 'Meetups inserted!' });
    }
}

export default handler;