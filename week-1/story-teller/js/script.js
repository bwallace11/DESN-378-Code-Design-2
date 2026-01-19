document.addEventListener('DOMContentLoaded', () => {

    const storyData = [
        { image: "./assets/images/M&NVD1.jpg", text: "As the sun dipped low, the lake glowed with soft pink and gold light..." },
        { image: "./assets/images/M&NVD2.jpg", text: "They moved slowly along the lake’s edge, side by side..." },
        { image: "./assets/images/M&NVD3.jpg", text: "As the sun faded into the hills, Mothman lifted his wings..." },
        { image: "./assets/images/M&NVD4.jpg", text: "The sky filled with soft, glowing hearts..." },
        { image: "./assets/images/M&NVD5.jpg", text: "Mothman wrapped his wings around Nessie..." }
    ];

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

    let step = 0;
    let userName = "Mysterious Traveler";
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
        if (step >= storyData.length) {
            showFinale();
            return;
        }

        storyImage.src = storyData[step].image;
        typeWriter(storyData[step].text);
        updateDots();
    }

    function createDots() {
        dotsContainer.innerHTML = "";
        storyData.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.className = "dot" + (i === step ? " active" : "");
            dot.onclick = () => {
                step = i;
                save();
                showScene();
            };
            dotsContainer.appendChild(dot);
        });
    }

    function updateDots() {
        document.querySelectorAll('.dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === step);
        });
    }

    function save() {
        localStorage.setItem('fog_name', userName);
        localStorage.setItem('fog_step', step);
    }

    function start() {
        userName = nameInput.value.trim() || userName;
        intro.classList.add('hidden');
        story.classList.remove('hidden');
        save();
        showScene();
    }

    function next() {
        step++;
        save();
        showScene();
    }

    function showFinale() {
        story.classList.add('hidden');
        finale.classList.remove('hidden');
        finalMessage.textContent = `Happy Valentine's Day, ${userName}!`;

        neonSound.volume = 0.05;
        neonSound.play().catch(() => {});
    }

    function reset() {
        localStorage.clear();
        location.reload();
    }

    function createDecorations() {
        for (let i = 0; i < 10; i++) {
            const img = document.createElement('img');
            img.src = "./assets/images/Heart.png";
            img.className = "floating-element heart-anim";
            img.style.left = Math.random() * 100 + "vw";
            img.style.width = "40px";
            decorationContainer.appendChild(img);
        }
    }

    startBtn.onclick = start;
    storyImage.onclick = next;
    storyText.onclick = next;
    resetBtn.onclick = reset;

    createDots();
    createDecorations();

    const savedName = localStorage.getItem('fog_name');
    const savedStep = localStorage.getItem('fog_step');

    if (savedName) {
        userName = savedName;
        step = Number(savedStep) || 0;
        intro.classList.add('hidden');
        story.classList.remove('hidden');
        showScene();
    }
});
