const openDB = require('../../openDB')

export default async function getPeople(req, res) {
    const db = await openDB();
    const people = await db.all('select * from person');
    res.json(people);
}