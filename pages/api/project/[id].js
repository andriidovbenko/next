const openDB = require('../../../openDB')

export default async function getProjectById(req, res) {
    const db = await openDB();
    const project = await db.get('select * from project where id = ?', [req.query.id]);
    res.json(project);
}