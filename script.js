// ===================================
// HIBA LOVE WEBSITE - JAVASCRIPT
// ===================================


// PAGE NAVIGATION

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Start typing letter when letter page opens
    if (pageId === "letter") {
        startTypingLetter();
    }
}


// WELCOME HEART BUTTON

function enterSite() {
    showPage("home");
    createGoldenParticles();
    createHeartBurst();
}


// BACKGROUND MUSIC

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

let musicPlaying = false;

function toggleMusic() {

    if (!musicPlaying) {

        music.play().then(() => {
            musicPlaying = true;
            musicButton.textContent = "🎵 Music: ON";
        }).catch(() => {
            musicButton.textContent = "🎵 Tap Again";
        });

    } else {

        music.pause();
        musicPlaying = false;
        musicButton.textContent = "🎵 Music: OFF";

    }
}


// LOVE LETTER TYPING EFFECT

const loveLetter = `You are one of the most beautiful parts of my life.

I may not have the perfect words to explain how special you are to me, but I want you to know that you bring happiness to my heart.

Your smile makes my day brighter. Your happiness means so much to me.

I wish to create countless beautiful memories with you, support your dreams, respect your feelings and make you smile whenever I can.

No matter what life brings, I hope we always choose kindness, understanding and love.

You are truly special to me, Hiba.

Always remember that you deserve happiness, care and all the beautiful things in this world.

I made this little website just to remind you how precious you are to me. ❤️`;

let typingStarted = false;
let typingTimer = null;

function startTypingLetter() {

    const letterElement = document.getElementById("letterText");

    if (typingStarted) {
        return;
    }

    typingStarted = true;

    let index = 0;

    letterElement.textContent = "";

    typingTimer = setInterval(() => {

        letterElement.textContent += loveLetter.charAt(index);

        index++;

        if (index >= loveLetter.length) {
            clearInterval(typingTimer);
        }

    }, 35);
}


// GIFT BOX OPENING

let giftOpened = false;

function openGift() {

    if (giftOpened) {
        return;
    }

    giftOpened = true;

    const giftBox = document.getElementById("giftBox");
    const giftHint = document.getElementById("giftHint");
    const catMessage = document.getElementById("catMessage");
    const giftMessage = document.getElementById("giftMessage");

    giftBox.classList.add("opened");

    giftHint.textContent = "Your little surprise is here! ❤️";

    // Golden particles
    createGoldenParticles();

    // Show kitten message
    setTimeout(() => {
        catMessage.classList.add("show");
        createHeartBurst();
    }, 1300);

    // Show final gift message
    setTimeout(() => {
        giftMessage.classList.add("show");
    }, 2400);

}


// GOLDEN PARTICLES

function createGoldenParticles() {

    const particleArea = document.getElementById("particleArea");

    const symbols = ["✨", "💖", "🌟", "⭐", "💛"];

    for (let i = 0; i < 35; i++) {

        const particle = document.createElement("div");

        particle.className = "golden-particle";

        particle.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        const x = 20 + Math.random() * 60;
        const y = 35 + Math.random() * 30;

        const moveX = (Math.random() - 0.5) * 500;
        const moveY = (Math.random() - 0.5) * 500;

        particle.style.setProperty("--x", x + "vw");
        particle.style.setProperty("--y", y + "vh");

        particle.style.setProperty("--moveX", moveX + "px");
        particle.style.setProperty("--moveY", moveY + "px");

        particleArea.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 2200);

    }

}


// FLOATING HEARTS

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    const hearts = ["❤️", "💗", "💕", "💖", "💘"];

    heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    const duration = 5 + Math.random() * 5;

    heart.style.animationDuration = duration + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);

}


// HEART BURST

function createHeartBurst() {

    for (let i = 0; i < 15; i++) {

        setTimeout(() => {
            createHeart();
        }, i * 80);

    }

}


// FALLING ROSE PETALS

function createRosePetal() {

    const petal = document.createElement("div");

    petal.className = "rose-petal";
    petal.textContent = "🌹";

    petal.style.left = Math.random() * 100 + "vw";

    const duration = 6 + Math.random() * 5;

    petal.style.animationDuration = duration + "s";

    petal.style.fontSize =
        (13 + Math.random() * 15) + "px";

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, duration * 1000);

}


// PROPOSAL YES BUTTON

function sayYes() {

    const message = document.getElementById("proposalMessage");

    message.textContent =
        "You made my heart the happiest! ❤️🌹";

    createGoldenParticles();
    createHeartBurst();

}


// PROPOSAL MOMENT BUTTON

function sayNo() {

    const message = document.getElementById("proposalMessage");

    message.textContent =
        "Take all the time you need, Hiba. Your feelings matter. ❤️";

}


// START BACKGROUND EFFECTS

setInterval(createHeart, 1800);

setInterval(createRosePetal, 2500);

function checkPassword() {
    const password = document.getElementById("lovePassword").value;

    if (password === "HIBA143") {
        document.getElementById("passwordScreen").style.display = "none";
    } else {
        document.getElementById("errorMessage").textContent =
            "Wrong Password! Try Again ❤️";
    }
}