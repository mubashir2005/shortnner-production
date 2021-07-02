import { connectToDatabase } from "./_connector";

export default async (req, res) => {
    const db = await connectToDatabase();

    const entry = await db.db('links_db').collection('links_collection').findOne({ id: req.query.id });

    if (entry !== null) {
        return res.redirect(301, entry.link);
    }

    return res.redirect(301, '/');
}

