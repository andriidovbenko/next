const openDB = require('./openDB')

async function setup() {
    const db = await openDB();
    await db.migrate({migrationsPath: './migrations'})

    const people = await db.all('SELECT * FROM person');
    console.log('ALL PEOPLE', JSON.stringify(people, null, 2));

    const projects = await db.all('SELECT * FROM project');
    console.log('ALL PROJECTS', JSON.stringify(projects, null, 2));
}

setup();