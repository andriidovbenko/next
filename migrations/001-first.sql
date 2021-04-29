-- Up
CREATE TABLE Person (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
);

CREATE TABLE Project (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    description TEXT,
    ownerId INTEGER INTEGER REFERENCES Person(id)
);

INSERT INTO Person (name, email) values ('andrii', 'dar@bigmir.net');
INSERT INTO Person (name, email) values ('volody', 'volody@bigmir.net');

INSERT INTO Project (title, description, ownerId) values ('weather app', 'forecast application', 1);
INSERT INTO Project (title, description, ownerId) values ('tarder api', 'node js application', 2);

-- Down
DROP TABLE Person;
DROP TABLE Project;