const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users');
    }
    
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
        await connection.dropCollection('thoughts');
    }

    const users = [];
    const thoughts = getRandomThoughts(15);

    for (let i = 0; i < 20; i++) {
        const username = getRandomUsername();
        const email = ;
        const thoughts = ;
        const friends = ;

        users.push({
            username,
            email,
            thoughts,
            friends,
        });
    }

    await User.insertMany(users);
    await Thought.insertMany(thoughts);

    console.table(users);
    console.table(thoughts);
    console.into('Seeding complete! 🌱');
    process.exit(0);
});