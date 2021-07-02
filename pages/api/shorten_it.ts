import { connectToDatabase } from "./_connector";
import shortid  from 'shortid'

export default async (req, res) => {
    const db = await connectToDatabase();

    if (req.body !== '' && req.body.link !== undefined && req.body.link !== '') {
        let id= shortid.generate()
        const entry = await db.db('links_db').collection('links_collection').insertOne({ link: req.body.link, id:id });
        const link = "https://shortnner.tech"
        res.statusCode = 201;
        return res.json({ short_link: `${link}/${id}` });
    }

    res.statusCode = 409;
    res.json({ error: 'no_link_found', error_description: 'No link found'})
}
