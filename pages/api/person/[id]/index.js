const openDB = require('../../../../openDB')

export default async function getPersonById(req, res) {
    const db = await openDB();

    if(req.method === 'PUT') {
        const statement = await db.prepare(
            'UPDATE person SET name = ?, email = ? where id = ?'
        );
        await statement.run(
            req.body.name,
            req.body.email,
            req.query.id
        );
    }

    const person = await db.get('select * from person where id = ?', [req.query.id]);
    res.json(person);
}