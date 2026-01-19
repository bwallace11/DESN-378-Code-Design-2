document.addEventListener('DOMContentLoaded', () => {

    // --- DATA ---

    const storyData = [
        {
            image: "/week-1/story-teller/assets/images/M&NVD1.jpg",
            text: "As the sun dipped low, the lake glowed with soft pink and gold light. Heart-shaped lanterns flickered overhead while steam rose gently from two cups of tea. Mothman sat nervously by the water, holding a small Valentine close to his chest. From the lake, Nessie drifted nearer, her smile warm and curious. The night had just begun."
        },
        {
            image: "/week-1/story-teller/assets/images/M&NVD2.jpg",
            text: "They moved slowly along the lake’s edge, side by side. Mothman walked where the water met the shore, while Nessie swam close beside him, her head just above the surface. The sky deepened into purples and golds as small glowing lights drifted around them. Neither felt alone anymore."
        },
        {
            image: "/week-1/story-teller/assets/images/M&NVD3.jpg", 
            text: "As the sun faded into the hills, Mothman lifted his wings and gently wrapped them around Nessie. The lake shimmered with the last of the daylight, warm and calm. For the first time that night, they felt completely at home."
        },
        {
            image: "/week-1/story-teller/assets/images/M&NVD4.jpg",
            text: "The sky filled with soft, glowing hearts as the evening grew darker. Nessie looked up at Mothman, her eyes shining with quiet joy. He gazed back, his red eyes gentle and warm. In the stillness of the lake, they knew this moment would stay with them."
        },
        {
            image: "/week-1/story-teller/assets/images/M&NVD5.jpg",
            text: "Mothman wrapped his wings around Nessie, holding her close as the lake shimmered beside them. Nessie smiled with her eyes closed, peaceful and content. In that quiet embrace, the world felt smaller, softer, and perfectly still."
        }
    ];

    // --- DOM ELEMENTS ---
    const introSection = document.querySelector('#intro-section');
    const storySection = document.querySelector('#story-section');
    const finaleSection = document.querySelector('#finale-section');
    
    const nameInput = document.querySelector('#username');
    const startBtn = document.querySelector('#start-btn');
    const resetBtn = document.querySelector('#reset-btn');
    
    const storyImage = document.querySelector('#story-image');
    const storyText = document.querySelector('#story-text');
    const progressContainer = document.querySelector('#progress-container');
    const finalMessage = document.querySelector('#final-message');
    
 
    const clickSound = document.querySelector('#pop-sound');
    const sparkleSound = document.querySelector('#sparkle-sound');
    const neonSound = document.querySelector('#neon-sound');
    const decorationContainer = document.querySelector('#decoration-container');

    // --- STATE ---
    let currentStep = 0;
    let userName = "";
    let isTransitioning = false;
    let typeInterval; 

    // --- INITIALIZATION ---
    function init() {
        if (decorationContainer) generateDecorations();

        const savedName = localStorage.getItem('loveInFog_Name');
        const savedStep = localStorage.getItem('loveInFog_Step');

        if (savedName) {
            userName = savedName;
            currentStep = savedStep ? parseInt(savedStep, 10) : 0;
            
            if (currentStep >= storyData.length) {
                showFinale();
            } else {
                createProgressDots();
                startStory(true);
            }
        } else {
            createProgressDots();
        }
    }

    // --- TYPEWRITER FUNCTION ---
    function typeWriter(text, element, speed = 30) {
        if (typeInterval) clearInterval(typeInterval);

        element.textContent = ""; 
        element.classList.add('typing-cursor'); 

        let i = 0;
        
        typeInterval = setInterval(() => {
            element.textContent += text.charAt(i);
            i++;

            if (i >= text.length) {
                clearInterval(typeInterval);
                element.classList.remove('typing-cursor');
            }
        }, speed);
    }

    // --- DECORATION LOGIC ---
    function generateDecorations() {
        for (let i = 0; i < 15; i++) {
            createFloatingElement('/week-1/story-teller/assets/images/Heart.png', 'heart-anim', 30, 80);
        }
        for (let i = 0; i < 15; i++) {
            const sparkle = createFloatingElement('/week-1/story-teller/assets/images/sparkle3.png', 'sparkle-anim', 20, 60);
            
            sparkle.addEventListener('click', () => {
                if(sparkleSound) {
                    sparkleSound.currentTime = 0;
                    sparkleSound.play().catch(e => console.log('Audio blocked', e));
                }
                sparkle.style.transform = "scale(2)";
                setTimeout(() => sparkle.style.transform = "scale(1)", 200);
            });
        }
    }

    function createFloatingElement(src, animClass, minSize, maxSize) {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('floating-element', animClass);
        img.alt = ""; // Decorative
        
        const size = Math.random() * (maxSize - minSize) + minSize;
        img.style.width = `${size}px`;
        img.style.left = `${Math.random() * 100}vw`;
        img.style.top = `${Math.random() * 100}vh`;
        
        img.style.animationDelay = `${Math.random() * 5}s`;
        img.style.animationDuration = `${Math.random() * 10 + 10}s`;

        if (decorationContainer) decorationContainer.appendChild(img);
        return img;
    }

    // --- CORE FUNCTIONS ---
    function createProgressDots() {
        if (!progressContainer) return;
        progressContainer.innerHTML = '';
        storyData.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === currentStep) dot.classList.add('active');
            
            dot.addEventListener('click', () => {
                
                if(isTransitioning || index === currentStep) return; 
                currentStep = index;
                saveProgress();
                transitionScene();
            });

            progressContainer.appendChild(dot);
        });
    }

    function updateProgressDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === currentStep) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function saveProgress() {
        localStorage.setItem('loveInFog_Name', userName);
        localStorage.setItem('loveInFog_Step', currentStep);
    }

    function startStory(skipIntro = false) {
        if (!skipIntro) {
            if(nameInput) userName = nameInput.value.trim() || "Mysterious Traveler";
            saveProgress();
        }

        if (skipIntro) {
            if(introSection) {
                introSection.classList.remove('active');
                introSection.classList.add('hidden');
            }
            if(storySection) {
                storySection.classList.remove('hidden');
                storySection.classList.add('active');
            }
            
            const scene = storyData[currentStep];
            if(storyImage) storyImage.src = scene.image;
          
            if(storyText) typeWriter(scene.text, storyText, 10); 
            updateProgressDots();
        } else {
            if(introSection) introSection.style.opacity = 0;
            
            setTimeout(() => {
                if(introSection) {
                    introSection.classList.remove('active');
                    introSection.classList.add('hidden');
                }
                
                if(storySection) {
                    storySection.classList.remove('hidden');
                    
                    void storySection.offsetWidth; 
                    storySection.classList.add('active');
                }
                
                transitionScene(true);
            }, 800);
        }
    }

    function transitionScene(immediate = false) {
        if (currentStep >= storyData.length) {
            showFinale();
            return;
        }

        const scene = storyData[currentStep];

        if (immediate) {
            if(storyImage) storyImage.src = scene.image;
            if(storyText) typeWriter(scene.text, storyText);
            updateProgressDots();
            return;
        }

        isTransitioning = true;
   
       
        if(storyImage) storyImage.classList.add('fade-out-transition');
        if(storyText) storyText.textContent = "";

      
        setTimeout(() => {
         
            const imgPreloader = new Image();
            imgPreloader.src = scene.image;

            imgPreloader.onload = () => {
                if(storyImage) {
                    storyImage.src = scene.image;
                    storyImage.classList.remove('fade-out-transition');
                }
                
                if(storyText) typeWriter(scene.text, storyText);
                updateProgressDots();
                isTransitioning = false;
            };
            
          
            imgPreloader.onerror = () => {
                isTransitioning = false; 
                if(storyImage) storyImage.classList.remove('fade-out-transition');
            }

        }, 500); 
    }

    function handleInteraction() {
        if (isTransitioning) return;
        if(clickSound) clickSound.play().catch(e => {});

        currentStep++;
        saveProgress();

        if (currentStep < storyData.length) {
            transitionScene();
        } else {
            showFinale();
        }
    }

    function showFinale() {
        
        if (storySection && !storySection.classList.contains('hidden')) {
            storySection.style.opacity = 0;
            setTimeout(() => {
                storySection.classList.remove('active');
                storySection.classList.add('hidden');
                renderFinale();
            }, 500);
        } else {
            if(introSection) {
                introSection.classList.remove('active');
                introSection.classList.add('hidden');
            }
            renderFinale();
        }
    }

    function renderFinale() {
    if(finalMessage) finalMessage.textContent = `Happy Valentine's Day, ${userName}!`;
    
    if(finaleSection) {
        finaleSection.classList.remove('hidden');
        void finaleSection.offsetWidth;
        finaleSection.classList.add('active');
    }

 
    if (neonSound) {
        neonSound.volume = 0.05; 
        neonSound.currentTime = 0;
        
      
        neonSound.play().catch(e => console.log("Autoplay blocked", e));
    }
}

   function resetStory() {
   
    if (neonSound) {
        neonSound.pause();
        neonSound.currentTime = 0;
    }
    

    localStorage.removeItem('loveInFog_Name');
    localStorage.removeItem('loveInFog_Step');
    location.reload();
}

    // --- LISTENERS ---
    if(startBtn) startBtn.addEventListener('click', () => startStory(false));
    
    if(nameInput) {
        nameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') startStory(false);
        });
    }

    
    if(storyImage) storyImage.addEventListener('click', handleInteraction);
    if(storyText) storyText.addEventListener('click', handleInteraction);

    if(resetBtn) resetBtn.addEventListener('click', resetStory);

    // Run
    init();
});
