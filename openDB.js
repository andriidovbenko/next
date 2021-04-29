const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

module.exports = sqlite.open.bind(null, {
    filename: './database.db',
    driver: sqlite3.Database,
});