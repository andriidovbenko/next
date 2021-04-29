const openDB = require('../../openDB')

export default async function getProjects(req, res) {
    const db = await openDB();
    const projects = await db.all('select * from project');
    res.json(projects);
}


