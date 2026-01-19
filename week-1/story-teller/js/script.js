document.addEventListener('DOMContentLoaded', () => {

    const storyData = [
        { image: "./assets/images/M&NVD1.jpg", text: "As the sun dipped low, the lake glowed with soft pink and gold light. Heart-shaped lanterns flickered overhead while steam rose gently from two cups of tea. Mothman sat nervously by the water, holding a small Valentine close to his chest. From the lake, Nessie drifted nearer, her smile warm and curious. The night had just begun." },
        { image: "./assets/images/M&NVD2.jpg", text: "They moved slowly along the lake’s edge, side by side. Mothman walked where the water met the shore, while Nessie swam close beside him, her head just above the surface. The sky deepened into purples and golds as small glowing lights drifted around them. Neither felt alone anymore." },
        { image: "./assets/images/M&NVD3.jpg", text: "As the sun faded into the hills, Mothman lifted his wings and gently wrapped them around Nessie. The lake shimmered with the last of the daylight, warm and calm. For the first time that night, they felt completely at home." },
        { image: "./assets/images/M&NVD4.jpg", text: "The sky filled with soft, glowing hearts as the evening grew darker. Nessie looked up at Mothman, her eyes shining with quiet joy. He gazed back, his red eyes gentle and warm. In the stillness of the lake, they knew this moment would stay with them." },
        { image: "./assets/images/M&NVD5.jpg", text: "Mothman wrapped his wings around Nessie, holding her close as the lake shimmered beside them. Nessie smiled with her eyes closed, peaceful and content. In that quiet embrace, the world felt smaller, softer, and perfectly still." }
    ];

   
    let appState = {
        userName: "Mysterious Traveler",
        step: 0
    };

    const intro = document.getElementById('intro-section');
    const story = document.getElementById('story-section');
    const finale = document.getElementById('finale-section');

    const startBtn = document.getElementById('start-btn');
    const resetBtn = document.getElementById('reset-btn');
    const nameInput = document.getElementById('username');

    const storyImage = document.getElementById('story-image');
    const storyText = document.getElementById('story-text');
    const dotsContainer = document.getElementById('progress-container');
    const finalMessage = document.getElementById('final-message');

    const sparkleSound = document.getElementById('sparkle-sound');
    const neonSound = document.getElementById('neon-sound');
    const decorationContainer = document.getElementById('decoration-container');

    let typingInterval;

    function typeWriter(text) {
        clearInterval(typingInterval);
        storyText.textContent = "";
        let i = 0;

        typingInterval = setInterval(() => {
            storyText.textContent += text.charAt(i);
            i++;
            if (i >= text.length) clearInterval(typingInterval);
        }, 25);
    }

    function showScene() {
        if (appState.step >= storyData.length) {
            showFinale();
            return;
        }

        storyImage.src = storyData[appState.step].image;
        typeWriter(storyData[appState.step].text);
        updateDots();
    }

    function createDots() {
        dotsContainer.innerHTML = "";
        storyData.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.className = "dot" + (i === appState.step ? " active" : "");
            dot.onclick = () => {
                appState.step = i;
                showScene();
            };
            dotsContainer.appendChild(dot);
        });
    }

    function updateDots() {
        document.querySelectorAll('.dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === appState.step);
        });
    }

    function start() {
        appState.userName = nameInput.value.trim() || appState.userName;
        intro.classList.add('hidden');
        story.classList.remove('hidden');
        showScene();
    }

    function next() {
        appState.step++;
        showScene();
    }

    function showFinale() {
        story.classList.add('hidden');
        finale.classList.remove('hidden');
        finalMessage.textContent = `Happy Valentine's Day, ${appState.userName}!`;

        neonSound.volume = 0.05;
        neonSound.play().catch(() => {});
    }

    function reset() {
        appState = {
            userName: "Mysterious Traveler",
            step: 0
        };
        intro.classList.remove('hidden');
        story.classList.add('hidden');
        finale.classList.add('hidden');
        nameInput.value = '';
    }

    function createDecorations() {
        for (let i = 0; i < 10; i++) {
            const img = document.createElement('img');
            img.src = "./assets/images/Heart.png";
            img.className = "floating-element heart-anim";
            img.style.left = Math.random() * 100 + "vw";
            img.style.width = "40px";
            img.style.animationDelay = Math.random() * 5 + "s";
            decorationContainer.appendChild(img);
        }
    }

    startBtn.onclick = start;
    storyImage.onclick = next;
    storyText.onclick = next;
    resetBtn.onclick = reset;

    createDots();
    createDecorations();
});