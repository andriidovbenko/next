const openDB = require('../../../openDB')

export default async function(req, res) {
    const db = await openDB();
    if(req.method === 'DELETE') {
        await db.run(`DELETE from Project WHERE id = ${req.query.id}`);
    }
    const project = await db.get('select * from project where id = ?', [req.query.id]);
    res.json(project);
}