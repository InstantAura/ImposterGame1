
let gameData = {
    categories: {}, 
    availableWords: []
};

let gameState = {
    playerNames: [],
    imposters: 1,
    mode: 'word',
    category: 'all'
};

const starContainer = document.getElementById('star-container');
for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.width = `${Math.random() * 3 + 1}px`;
    star.style.height = `${Math.random() * 3 + 1}px`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    starContainer.appendChild(star);
}

// --- 3. Load Data from JSON ---
async function loadGameData() {
    const selectEl = document.getElementById('category-select');
    
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error("File not found");
        const data = await response.json();
        
        for (const [key, value] of Object.entries(data)) {
            if (key !== "__TUTORIAL__") {
                gameData.categories[key] = value;
            }
        }
        console.log("Loaded external data");
    } catch (error) {
        console.warn("Could not load data.json. Using fallback data.", error);
        gameData.categories = {
            "Animals": ["Dog", "Cat", "Lion", "Tiger", "Elephant"],
            "Food": ["Pizza", "Burger", "Sushi", "Pasta"],
            "Movies": ["Avatar", "Titanic", "Matrix"],
            "Places": ["Beach", "Park", "Hospital"]
        };
    }

    // Populate Dropdown
    selectEl.innerHTML = ''; 
    for (const category in gameData.categories) {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        selectEl.appendChild(option);
    }
    
    const firstCategory = Object.keys(gameData.categories)[0];
    if(firstCategory) {
        selectEl.value = firstCategory;
        gameState.category = firstCategory;
    }
}

loadGameData();

// --- 4. Image Fallback ---
const heroImg = document.getElementById('hero-image');
const fallbackSvg = document.getElementById('fallback-svg');
if(heroImg.getAttribute('src') && heroImg.getAttribute('src').trim() !== "") {
    fallbackSvg.style.display = 'none';
} else {
    heroImg.style.display = 'none';
}

// --- 5. Navigation ---
function switchScreen(screenName) {
    if (screenName === 'settings') {
        document.getElementById('menu-screen').classList.add('hidden');
        document.getElementById('settings-screen').classList.remove('hidden');
    } else if (screenName === 'menu') {
        document.getElementById('settings-screen').classList.add('hidden');
        document.getElementById('menu-screen').classList.remove('hidden');
    }
}
document.getElementById('btn-go-settings').addEventListener('click', () => switchScreen('settings'));
document.getElementById('btn-back-menu').addEventListener('click', () => switchScreen('menu'));

// --- 6. Player Logic ---
const inputField = document.getElementById('player-input');
const playerListEl = document.getElementById('player-list');
const countDisplay = document.getElementById('count-display');
const valImposters = document.getElementById('val-imposters');

function renderPlayers() {
    playerListEl.innerHTML = '';
    gameState.playerNames.forEach((name, index) => {
        const tag = document.createElement('div');
        tag.className = 'player-tag';
        tag.innerHTML = `<span>${name}</span><button class="delete-x" onclick="removePlayer(${index})">✕</button>`;
        playerListEl.appendChild(tag);
    });
    countDisplay.innerText = gameState.playerNames.length;
    validateImposterLimit();
}

function addPlayer() {
    const name = inputField.value.trim();
    if (name) {
        gameState.playerNames.push(name);
        inputField.value = '';
        renderPlayers();
        inputField.focus();
    }
}

window.removePlayer = function(index) {
    gameState.playerNames.splice(index, 1);
    renderPlayers();
}

inputField.addEventListener('keypress', (e) => { if (e.key === 'Enter') addPlayer(); });
document.getElementById('btn-add-player').addEventListener('click', addPlayer);

// --- 7. Imposter Logic ---
window.updateImposter = function(change) {
    let newCount = gameState.imposters + change;
    if (newCount < 1) newCount = 1;
    if (newCount < gameState.playerNames.length) {
        gameState.imposters = newCount;
    } else if (gameState.playerNames.length > 1) {
        gameState.imposters = gameState.playerNames.length - 1;
    }
    valImposters.innerText = gameState.imposters;
}

window.randomizeImposter = function() {
    if (gameState.playerNames.length < 2) return;
    const randomVal = Math.floor(Math.random() * (gameState.playerNames.length - 1)) + 1;
    gameState.imposters = randomVal;
    valImposters.innerText = gameState.imposters;
}

function validateImposterLimit() {
    if (gameState.imposters >= gameState.playerNames.length && gameState.playerNames.length > 0) {
        gameState.imposters = Math.max(1, gameState.playerNames.length - 1);
        valImposters.innerText = gameState.imposters;
    }
}

// --- 8. Mode & Category & Start ---
window.setMode = function(mode) {
    gameState.mode = mode;
    document.getElementById('mode-word').classList.remove('active');
    document.getElementById('mode-question').classList.remove('active');
    document.getElementById(`mode-${mode}`).classList.add('active');
};

document.getElementById('category-select').addEventListener('change', (e) => {
    gameState.category = e.target.value;
});

document.getElementById('btn-final-start').addEventListener('click', () => {
    if (gameState.playerNames.length < 3) {
        alert("Please add at least 3 players!");
        return;
    }

    // --- RANDOM WORD SELECTION LOGIC ---
    // 1. Get the list of words for the currently selected category
    const wordsList = gameData.categories[gameState.category];
    
    // 2. Validate that the category exists and has words
    if (!wordsList || wordsList.length === 0) {
        alert(`Error: No words found in category "${gameState.category}".`);
        return;
    }

    // 3. Pick a random word from the list
    const randomIndex = Math.floor(Math.random() * wordsList.length);
    const chosenWord = wordsList[randomIndex];

    // 4. Save the chosen word to gameState
    gameState.chosenWord = chosenWord;
    // ----------------------------------

    console.log('Starting Game:', gameState);

    // --- NEW: SAVE DATA TO LOCAL STORAGE ---
    // We turn the gameState object into a string and save it in the browser
    localStorage.setItem('imposterGameData', JSON.stringify(gameState));

    // --- NEW: REDIRECT TO NEW PAGE ---
    window.location.href = 'game.html';
});

// --- 9. Modal Logic ---
const btnRules = document.getElementById('btn-rules');
const modal = document.getElementById('rules-modal');
const btnCloseModal = document.getElementById('btn-close-modal');

btnRules.addEventListener('click', () => modal.classList.add('active'));
btnCloseModal.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });