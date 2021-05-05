const openDB = require('../../../../openDB')

export default async function getPersonById(req, res) {
    const db = await openDB();
    console.log(req.body)
    if(req.method === 'PUT') {
        const statement = await db.prepare(
            'UPDATE person SET name = ?, email = ? where id = ?'
        );
        await statement.run(
            req.body.name,
            req.body.email,
            req.query.id
        );
        

        // TODO: rewright to single query
        req.body.projects.forEach(async (project) => {
            const statement = await db.prepare('UPDATE project SET title = ?, description = ? where id = ?')
            await statement.run(
                project.title,
                project.description,
                project.id
            );
        });
    }

    if(req.method === 'DELETE') {
        await db.run(`DELETE from Project WHERE ownerId = ${req.query.id}`);
        await db.run(`DELETE from Person WHERE id = ${req.query.id}`);
    }

    const person = await db.get('select * from person where id = ?', [req.query.id]);
    console.log(person)
    res.json(person);
}