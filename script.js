// Define an array of writing prompts
const prompts = [
    "Write about a character who discovers a mysterious letter addressed to them.",
    "Describe a memorable encounter with a stranger on a train.",
    "Imagine a world where everyone has a superpower, except for one person.",
    "Write a story that takes place entirely in a single room.",
    "Describe the view from the top of a mountain.",
    "Write about a secret garden hidden behind an old abandoned house.",
    "Imagine a conversation between two characters who speak different languages.",
    "Write a letter to your future self.",
    "Describe the sensation of flying for the first time.",
    "Write about a character who can time-travel but is stuck in the wrong era.",
    "Describe a vivid dream you once had.",
    "Write about a character who finds a map leading to buried treasure.",
    "Imagine a world where everyone's emotions are visible as colors.",
    "Write a story about a character who wakes up one morning and can't remember anything.",
    "Describe the feeling of standing on a beach during a storm.",
    "Write about a character who discovers they have a long-lost twin.",
    "Imagine a world where books are banned, and reading is illegal.",
    "Write a story that takes place in a post-apocalyptic world.",
    "Describe the sound of rain falling on a tin roof.",
    "Write about a character who can talk to animals.",
    "Imagine a conversation between a person and their reflection in the mirror.",
    "Write about a character who discovers a hidden underground city.",
    "Describe the taste of your favorite food.",
    "Write a letter to someone you've lost touch with.",
    "Imagine a world where dreams can be bought and sold.",
    "Write about a character who can see into the future but can't change it.",
    "Describe the feeling of standing on the edge of a cliff.",
    "Write a story about a character who is afraid of the dark.",
    "Imagine a conversation between a child and their imaginary friend.",
    "Write about a character who receives a mysterious package in the mail.",
    "Describe the sensation of falling in love.",
    "Write a letter to your favorite fictional character.",
    "Imagine a world where music has the power to heal.",
    "Write about a character who is stranded on a deserted island.",
    "Describe the smell of fresh-baked bread.",
    "Write a story about a character who can teleport anywhere in the world.",
    "Imagine a conversation between two ghosts haunting an old house.",
    "Write about a character who discovers they have magical powers on their 18th birthday.",
    "Describe the feeling of walking through a haunted forest at night.",
    "Write a letter to your younger self.",
    "Imagine a world where everyone wears masks to hide their true identity.",
    "Write about a character who can communicate with plants.",
    "Describe the taste of victory.",
    "Write a story about a character who can hear other people's thoughts.",
    "Imagine a conversation between two objects in a room.",
    "Write about a character who finds a portal to another dimension in their backyard.",
    "Describe the sensation of falling asleep under the stars.",
    "Write a letter to someone you admire.",
    "Imagine a world where time is a physical object that can be manipulated.",
    "Write about a character who discovers they are the chosen one destined to save the world.",
];

let lastGeneratedPrompt = null;

// Function to generate a random prompt (ensuring it's different from the last one)
function generateRandomPrompt() {
    let randomPrompt = null;
    do {
        const randomIndex = Math.floor(Math.random() * prompts.length);
        randomPrompt = prompts[randomIndex];
    } while (randomPrompt === lastGeneratedPrompt);
    
    lastGeneratedPrompt = randomPrompt;
    return randomPrompt;
}

// Function to display the randomly generated prompt
function displayRandomPrompt() {
    const promptsContainer = document.getElementById("prompts-container");
    promptsContainer.innerHTML = ""; // Clear previous prompt

    const randomPrompt = generateRandomPrompt();
    const promptElement = document.createElement("p");
    promptElement.textContent = randomPrompt;
    promptsContainer.appendChild(promptElement);
}

// Event listener for the button click
const generatePromptsButton = document.getElementById("generate-prompts-btn");
generatePromptsButton.addEventListener("click", displayRandomPrompt);

// Nav Menu

function toggleNav() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}