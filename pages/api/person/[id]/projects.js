const openDB = require('../../../../openDB')

export default async function (req, res) {
    const db = await openDB();
    const projects = await db.all('select * from project where ownerId = ?', [req.query.id]);
    res.json(projects);
}