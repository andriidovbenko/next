const openDB = require('../../openDB')

export default async function addNewPerson(req, res) {
    const db = await openDB();
    console.log(req.body);
    const { body } = req.body
    if(req.method === 'POST') {
        try {
            await db.run('INSERT INTO Person (name, email) values(?, ?)', [req.body.name, req.body.email]);
        } catch(err) {
            console.log('errr', err)
        }
        
    }

    const people = await db.all('select * from person');
    res.json(people);
}