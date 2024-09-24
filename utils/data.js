const nameSegments = [
    "Star",
    "Pixel",
    "Echo",
    "Dreamer",
    "Vortex",
    "Whisper",
    "Nova",
    "Lunar",
    "Frost",
    "Chaser",
    "Wanderer",
    "Maverick",
    "Quasar",
    "Pioneer",
    "Phoenix",
    "Mystic",
    "Sapphire",
    "Nebula",
    "Rogue",
    "Voyager",
    "Blaze",
    "Horizon",
    "Comet",
    "Zephyr",
    "Bolt",
    "Clover",
    "Ember",
    "Cascade",
    "Abyss",
    "Crescent",
    "Nimbus",
    "Solstice",
    "Jade",
    "Echoes",
    "Sparrow",
    "Sundown",
    "Dusk",
    "Raven",
    "Starlight",
    "Glimmer",
    "Tide",
    "Breeze",
    "Fable",
    "Chroma",
    "Serenade",
    "Shadow",
    "Quartz",
    "Galaxy",
    "Venture",
    "Rebel",
    "Haze",
    "Flicker",
    "Voyage",
    "Cobalt",
    "Scribe",
    "Frostbite",
    "Radiant",
    "Eclipse",
    "Wisp",
    "Whirlwind",
    "Mistral",
    "Thorn",
    "Haven",
    "Sundancer",
    "Pinnacle",
    "Dynamo",
    "Talon",
    "Empress",
    "Frostfire",
    "Oracle",
    "Echoing",
    "Emberheart",
    "Starbound",
    "Vivid",
    "Mystique",
    "Fableteller",
    "Pathfinder",
    "Celestial",
    "Aurora",
    "Riptide",
    "Cascade",
    "Thrive",
    "Blizzard",
    "Crimson",
    "Drifter",
    "Glacier",
    "Fableweaver",
    "Sundance",
    "Emberlight",
    "Seraph",
    "Skyline",
    "Tranquil",
    "Zodiac",
    "Cinder",
    "Fableforge",
    "Strider",
    "Horizonwalker",
    "Tempest",
    "Shimmer",
];

const thoughts = [
    "Why does time always seem to fly when you're having fun but crawl when you're waiting for something?",
    "Coffee: because adulting is hard and I need my superpowers activated.",
    "If I had a dollar for every time I forgot what I was saying, I'd probably forget to count it.",
    "Why do we park in driveways and drive on parkways? Just one of life's little mysteries.",
    "Sometimes I wonder if I'm the main character or just an extra in everyone else's story.",
    "Isn't it funny how a random song can take you back to a moment you thought you'd forgotten?",
    "Every day may not be good, but there's something good in every day. Find it!",
    "Trying to find the balance between eating healthy and enjoying the occasional slice of pizza.",
    "Do you ever just sit back and marvel at how weird and wonderful life can be?",
    "Who decided that a round pizza should come in a square box?",
    "Some days I'm a masterpiece; other days, I'm a work in progress. Both are okay!",
    "What if our pets think we're the ones who are in charge, but really they are?",
    "I'm on a seafood diet. I see food, and I eat it.",
    "How is it that I can remember all the lyrics to a song from my childhood but can't recall where I put my keys?",
    "Just a reminder that it's okay to take a break and recharge. You're not a robot!",
    "Sometimes you just need to create your own sunshine.",
    "Why do we press harder on the remote control when we know the batteries are weak?",
    "Let's make a pact: today we'll be our own biggest cheerleaders!",
    "Isn't it wild how a simple text can change the entire course of your day?",
    "If you're looking for a sign to chase your dreams, here it is!",
    "The best way to predict the future is to create it. Let's get started!",
    "Why do we call them 'buildings' if they're already built?",
    "Don't forget to smile today—it's contagious!",
    "Just because the past is behind us doesn't mean we can't learn from it.",
    "Life is like a camera; focus on what's important, capture the good times, and if things don't work out, just take another shot!",
    "Sometimes, a little kindness can go a long way in making someone's day.",
    "The hardest step in any journey is the first one. Take it!",
    "Dream big, work hard, and stay humble.",
    "Laughter is timeless; it's the best remedy for just about anything.",
    "Every sunrise is a new opportunity to make things better.",
];

const reactions = [
    "That's such a relatable thought.",
    "I completely agree with you.",
    "This made me laugh out loud.",
    "You took the words right out of my mouth.",
    "I needed to hear this today, thank you.",
    "So true! Life is full of surprises.",
    "This is why I love social media.",
    "I've never thought about it that way.",
    "Your perspective is refreshing.",
    "This resonates with me on so many levels.",
    "I feel seen with this one.",
    "You just made my day with this thought.",
    "I appreciate your honesty here.",
    "Couldn't have said it better myself.",
    "What a unique take on things.",
    "This is so insightful, thanks for sharing.",
    "You always know how to hit the nail on the head.",
    "I'm glad someone else feels this way.",
    "This is a great reminder to cherish the little things.",
    "It's the little things that matter most.",
    "You just brightened my day with this!",
    "Your thoughts are always so inspiring.",
    "I love how you put that into words.",
    "This is a perfect example of why I follow you.",
    "You've got me thinking about this in a new light.",
    "This is such a good point.",
    "I can relate to this more than you know.",
    "Thanks for sharing this wisdom.",
    "You always know how to make me smile.",
    "This is a conversation starter for sure.",
    "I appreciate your perspective on this.",
    "Such a beautiful thought, thank you for sharing.",
];

const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomNum = (min, max) => {return Math.floor(Math.random() * (max - min + 1)) + min;};

const getRandomUsername = () => {
    const username = `${getRandomArrItem(nameSegments)}${getRandomArrItem(nameSegments)}${getRandomArrItem(nameSegments)}`;
    return username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
};

const getRandomThought = () => {
    const thought = `${getRandomArrItem(thoughts)}`;
    return thought;
}

const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtText: getRandomArrItem(thoughts),
            username: getRandomUsername(),
        });        
    }
    return results;
};

const getRandomReactions = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            reactionBody: getRandomArrItem(reactions),
            username: getRandomUsername(),
        });      
    }
    return results;
}

module.exports = { getRandomIndex, getRandomArrItem, getRandomNum, getRandomUsername, getRandomThought, getRandomThoughts, getRandomReactions }