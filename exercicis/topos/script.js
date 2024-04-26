const moles = document.querySelectorAll('.container img');
const scoreDisplay = document.getElementById('score');
let score = 0;

function showMole(mole) {
    mole.src = 'img/topoSi.png';
}

function hideMole(mole) {
    mole.src = 'img/topoNo.png';
}

function hitMole(mole) {
    if (mole.src.includes('topoSi')) {
        score += 10;
        scoreDisplay.textContent = score;
        mole.src = 'img/topoPam.png'; // Cambia la imagen del topo a la imagen de golpeado
        playSound('img/boing.mp3');
        setTimeout(() => hideMole(mole), 500); // Oculta el topo después de 500ms
    }
}

function getRandomMole() {
    const randomIndex = Math.floor(Math.random() * moles.length);
    return moles[randomIndex];
}

function playSound(soundFile) {
    var audio = new Audio(soundFile);
    audio.play();
}

function startGame() {
    setInterval(() => {
        const moleToShow = getRandomMole();
        if (Math.random() < 0.5) {
            showMole(moleToShow); 
            setTimeout(() => hideMole(moleToShow), 1000); 
        } else {
            hideMole(moleToShow); 
        }
    }, 2000);
}


moles.forEach((mole) => {
    mole.addEventListener('click', () => hitMole(mole));
});

startGame();
