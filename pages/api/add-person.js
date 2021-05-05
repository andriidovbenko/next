const openDB = require('../../openDB')

export default async function addNewPerson(req, res) {
    const db = await openDB();
    console.log(req.body);
    if(req.method === 'POST') {
        try {
            const { lastID: personID } = await db.run('INSERT INTO Person (name, email) values(?, ?)', [req.body.name, req.body.email]);
            await db.run('INSERT INTO Project (title, description, ownerId) values ' + req.body.projects.map(project => `('${project.title}', '${project.description}', ${personID})`).join(', '));
        } catch(error) {
            console.log('error', error)
        }
        
    }

    const people = await db.all('select * from person');
    console.log('people', people)
    res.json(people);
}