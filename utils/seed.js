const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomIndex, getRandomArrItem, getRandomNum, getRandomUsername, getRandomThought, getRandomThoughts, getRandomReactions } = require('./data');

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

    for (let i = 0; i < 10; i++) {
        const username = getRandomUsername();
        const email = `${username}@social.com`;

        users.push({
            username,
            email,
        });
    }
    
    const usersData = await User.create(users);

    const thoughts = [];

    for (let i = 0; i < 35; i++) {
        const reactions = getRandomReactions(getRandomNum(1, 3));
        const thoughtText = getRandomThought();
        const username = usersData[getRandomIndex(usersData)].username;

        thoughts.push({
            thoughtText,
            reactions,
            username,
        });
    }

    const thoughtData = await Thought.create(thoughts);

    for (let user of usersData) {
        user.thoughts = thoughtData
        .filter(thought => thought.username === user.username)
        .map(thought => thought._id);
        await user.save();
    }

    for (let user of usersData) {
        const friends = [];
        const friendCount = getRandomNum(1, 3);

        while (friends.length < friendCount) {
            const randomUser = usersData[getRandomIndex(usersData)];
            if (randomUser._id.toString() !== user._id.toString() && !friends.includes(randomUser._id)) {
                friends.push(randomUser._id);
            }
        }
        user.friends = friends;
        await user.save();
    }

    console.table(users);
    console.table(thoughts);
    console.log('Seeding complete! 🌱');
    process.exit(0);
});