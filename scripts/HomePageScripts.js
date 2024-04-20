// Typing text animation
const text = document.querySelector(".typing_text");

const words = [
    "pages.",
    "design.",
    "graphics.",
    "services.",
    "platforms.",
    "interfaces.",
    "UX/UI.",
    "products.",
    "elements.",
    "styles.",
    "content.",
];

let wordTypeInterval;

function setTyper(element, words) {
    const LETTER_TYPE_DELAY = 75;
    const WORD_STAY_DELAY = 2000;

    const DIRECTION_FORWARDS = 0;
    const DIRECTION_BACKWARDS = 1;

    var direction = DIRECTION_FORWARDS;
    var wordIndex = 7;
    var letterIndex = 0;

    if (window.innerWidth < 730) {
        clearInterval(wordTypeInterval);
        element.textContent = words[wordIndex];
    } else {
        startTyping();
    }

    function startTyping() {
        if (wordTypeInterval) clearInterval(wordTypeInterval);
        wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
    }

    function typeLetter() {
        const word = words[wordIndex];

        if (direction === DIRECTION_FORWARDS) {
            letterIndex++;

            if (letterIndex === word.length) {
                direction = DIRECTION_BACKWARDS;
                clearInterval(wordTypeInterval);
                setTimeout(startTyping, WORD_STAY_DELAY);
            }
        } else if (direction === DIRECTION_BACKWARDS) {
            letterIndex--;

            if (letterIndex === 0) {
                nextWord();
            }
        }

        const textToType = word.substring(0, letterIndex);
        element.textContent = textToType;
    }

    function nextWord() {
        letterIndex = 0;
        direction = DIRECTION_FORWARDS;
        wordIndex++;

        if (wordIndex === words.length) {
            wordIndex = 0;
        }
    }
}

setTyper(text, words);

window.addEventListener("resize", function () {
    setTyper(text, words);
});

// Change color botton
let colorBTN = document.getElementById("change-color-btn");

const colorArr = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F833FF",
    "#FF8333",
    "#33FFF8",
    "#F8FF33",
    "#8333FF",
    "#33F8FF",
    "#8C33FF",
    "#4B0082",
    "#FF69B4",
    "#00FFFF",
    "#7FFF00",
    "#FF4500",
    "#6A5ACD",
    "#FFD700",
    "#FF00FF",
    "#800080",
    "#008080",
];

let clickCount = 0;

function colorBTNPressed() {
    clickCount++;
    colorBTN.textContent = "Click " + clickCount;
    colorBTN.style.backgroundColor = colorArr[clickCount % colorArr.length];
}

colorBTN.addEventListener("click", colorBTNPressed);

// Animation of text filling in the "About Me" section when scrolling
gsap.registerPlugin(ScrollTrigger);

let aboutMeTextAnimation;

function runAnimation() {
    aboutMeTextAnimation = gsap.to(".aboutMe_text span", {
        scrollTrigger: {
            trigger: ".aboutMe_container",
            start: "top 35%",
            end: "bottom 0.5%",
            scrub: 1,
            pin: true,
            pinSpacing: true,
            toggleActions: "play none none restart",
        },
        backgroundSize: "100% 100%",
        ease: "none",
        immediateRender: true,
    });
}

// Disable text fill animation when scrolling for the "About Me" text for devices with a screen width of less than 1250px
function killAnimation() {
    if (aboutMeTextAnimation) {
        aboutMeTextAnimation.scrollTrigger.kill();
        aboutMeTextAnimation.kill();
        aboutMeTextAnimation = null;
    }
}

if (window.matchMedia("(min-width: 1251px)").matches) {
    runAnimation();
}

window.addEventListener("resize", function () {
    if (window.innerWidth < 1251) {
        killAnimation();
    } else {
        if (!aboutMeTextAnimation) {
            runAnimation();
        }
    }
});

// Animate the appearance of elements when scrolling
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".animatable").forEach((item) => {
    gsap.from(item, {
        duration: 0.3,
        opacity: 0.1,
        y: 35,
        scale: 0.8,
        ease: "linear",
        clearProps: "all",
        scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none none",
        },
    });
});

// Animation of increasing text in the Intro section
function runMainTextAnimation() {
    introMainText = gsap.to("#text_enlargement_animation", {
        scrollTrigger: {
            trigger: "#text_enlargement_animation",
            start: "top 30%",
            end: "bottom top",
            scrub: true,
            pin: true,
        },
        scale: 2,
        autoAlpha: 0,
    });
}

// Disable text magnification animation
function killMainTextAnimation() {
    if (introMainText) {
        introMainText.scrollTrigger.kill();
        introMainText.kill();
        introMainText = null;
    }
}

if (window.matchMedia("(min-width: 1251px)").matches) {
    runMainTextAnimation();
}

window.addEventListener("resize", function () {
    if (window.innerWidth < 1251) {
        killMainTextAnimation();
    } else if (!introMainText) {
        runMainTextAnimation();
    }
});
