// Changing the icon of the mobile version of the site on hover
let mobile_version_btn = document.getElementById("mobile__version-link");

let svgImage = mobile_version_btn.querySelector(".mobile-version-icon");

let mobile_version_icon_statick = "Media/svg/mobile-version-icon.svg";
let mobile_version_icon_hover = "Media/svg/mobile-version-icon-hover.svg";

mobile_version_btn.addEventListener("mouseover", function () {
    svgImage.src = mobile_version_icon_hover;
});

mobile_version_btn.addEventListener("mouseout", function () {
    svgImage.src = mobile_version_icon_statick;
});

// Open QR Code Window
let mobileVersion_btn = document.getElementById("mobile__version-link");
let open_QrCodeWindow = document.getElementById("qr__code__open");
let close_QR_Code = document.getElementById("close__QRCode__window");
let body_aboutMe = document.getElementById("aboutMe__home__page");

mobileVersion_btn.addEventListener("click", function () {
    open_QrCodeWindow.style.opacity = "1";
    open_QrCodeWindow.style.display = "flex";
    open_QrCodeWindow.style.transform = "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
    body_aboutMe.style.overflow = "hidden";
});

close_QR_Code.addEventListener("click", closeQRCodeWindow);

function closeQRCodeWindow() {
    open_QrCodeWindow.style.display = "flex";
    open_QrCodeWindow.style.opacity = "0";
    open_QrCodeWindow.style.transform = "translate3d(0px, 0px, 0px) scale3d(0, 0, 1)";
    body_aboutMe.style.overflowY = "scroll";
}

// Event listener for ESC key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeQRCodeWindow();
    }
});

// Music player
let playIcon = "Media/svg/music-control-panel-elements/Play-song-icon.svg";
let stopIcon = "Media/svg/music-control-panel-elements/Stop-song-icon.svg";
let previoustIcon = "Media/svg/music-control-panel-elements/Previous-song-icon.svg";
let nextIcon = "Media/svg/music-control-panel-elements/Next-song-icon.svg";
let volumeOnIcon = "Media/svg/music-control-panel-elements/player-volume-icon.svg";
let volumeOffIcon = "Media/svg/music-control-panel-elements/player-mute-icon.svg";

let audioPlayer = document.getElementById("audio-player");

let playBTN = document.getElementById("play-btn");
let previousBTN = document.getElementById("previous-song-btn");
let nextBTN = document.getElementById("next-song-btn");
let volumeBTN = document.getElementById("player-volume-btn");

let songCover = document.getElementById("song-cover");
let artistName = document.getElementById("artist-name");
let songName = document.getElementById("song-name");

let currentSongIndex = 0;
let isPlaying = false;
let isMuted = false;

function playSong() {
    const song = playlistSong[currentSongIndex];
    audioPlayer.src = song.song_src;
    audioPlayer.play();
    isPlaying = true;
    playBTN.src = stopIcon;
}

playBTN.addEventListener("click", function () {
    isPlaying = !isPlaying;
    playBTN.src = isPlaying ? stopIcon : playIcon;
    if (isPlaying) {
        if (!audioPlayer.src) {
            playSong();
        } else {
            audioPlayer.play();
        }
    } else {
        audioPlayer.pause();
    }
});

volumeBTN.addEventListener("click", function () {
    isMuted = !isMuted;
    audioPlayer.muted = isMuted;
    volumeBTN.src = isMuted ? volumeOffIcon : volumeOnIcon;
});

previousBTN.addEventListener("click", function () {
    if (currentSongIndex > 0) {
        currentSongIndex--;
    } else {
        currentSongIndex = playlistSong.length - 1;
    }
    updateSongInfo();
    if (isPlaying) playSong();
});

nextBTN.addEventListener("click", function () {
    if (currentSongIndex < playlistSong.length - 1) {
        currentSongIndex++;
    } else {
        currentSongIndex = 0;
    }
    updateSongInfo();
    if (isPlaying) playSong();
});

function updateSongInfo() {
    const song = playlistSong[currentSongIndex];
    songCover.src = song.cover_src;
    artistName.textContent = song.name_artist;
    songName.textContent = song.name_song;
}

audioPlayer.addEventListener("ended", function () {
    currentSongIndex = (currentSongIndex + 1) % playlistSong.length;
    updateSongInfo();
    if (isPlaying) playSong();
});

const playlistSong = [
    {
        cover_src: "Media/images/song-cover-images/Tyler-the-Creator.jpg",
        name_artist: "Tyler, the Creator",
        name_song: "See You Again",
        song_src: "Media/audio/music-playlist/See-You-Again.mp3",
    },
    {
        cover_src: "Media/images/song-cover-images/Bo-Burnham.jpg",
        name_artist: "Bo Burnham",
        name_song: "All Eyes On Me",
        song_src: "Media/audio/music-playlist/All-Eyes-On-Me.mp3",
    },
    {
        cover_src: "Media/images/song-cover-images/Drake.jpg",
        name_artist: "Drake",
        name_song: "The Motion",
        song_src: "Media/audio/music-playlist/The-Motion.mp3",
    },
    {
        cover_src: "Media/images/song-cover-images/The-Weeknd.jpg",
        name_artist: "The Weeknd",
        name_song: "Moth To A Flame",
        song_src: "Media/audio/music-playlist/Moth-To-A-Flame.mp3",
    },
    {
        cover_src: "Media/images/song-cover-images/Pouya.png",
        name_artist: "Pouya",
        name_song: "Forever Waiting For Yo...",
        song_src: "Media/audio/music-playlist/Forever-Waiting-For-You-At-My-Window.mp3",
    },
    {
        cover_src: "Media/images/song-cover-images/earfquake.png",
        name_artist: "Tyler, the Creator",
        name_song: "EARFQUAKE",
        song_src: "Media/audio/music-playlist/EARFQUAKE.mp3",
    },
];

document.addEventListener("DOMContentLoaded", updateSongInfo);

// Infinite scroll animation
function cloneIcons() {
    const leftContainer = document.querySelector(".left-container");
    const rightContainer = document.querySelector(".right-container");

    leftContainer.innerHTML += leftContainer.innerHTML;
    rightContainer.innerHTML += rightContainer.innerHTML;
}

cloneIcons();

const leftContainer = document.querySelector(".left-container");
const rightContainer = document.querySelector(".right-container");

leftContainer.addEventListener("animationiteration", () => {
    leftContainer.style.animation = "none";
    requestAnimationFrame(() => {
        leftContainer.style.animation = "";
    });
});

document.addEventListener(
    "animationiteration",
    (event) => {
        if (event.target.classList.contains("right-container")) {
            event.target.style.animation = "none";
            requestAnimationFrame(() => {
                event.target.style.animation = "";
            });
        }
    },
    true
);

// Quotes about programming
const listQuotations = [
    {
        quote: "In theory, theory and practice are the same. In practice, they are not.",
        author: "Yogi Berra",
    },
    {
        quote: "If you give a man a program, you occupy him for a day. If you teach a man to program, you occupy him for a lifetime.",
        author: "Waseem Latif",
    },
    {
        quote: "There is no end point in learning to program. Every project teaches you something new.",
        author: "Kathleen Dollard",
    },
    {
        quote: "There are only two kinds of programming languages: those people always complain about and those nobody uses.",
        author: "Bjarne Stroustrup",
    },
    { quote: "Code is harder to read than to write.", author: "Joel Spolsky" },
    {
        quote: "There are only two hard problems in computer science – cache invalidation and naming things.",
        author: "Phil Karlton",
    },
    { quote: "If it works, don't touch it.", author: "Any programmer" },
];

let currentIndex = 0;

function updateQuote() {
    const quoteTitle = document.getElementById("quote-title");
    const quoteAuthor = document.getElementById("quote-author");

    quoteTitle.style.opacity = "0";
    quoteAuthor.style.opacity = "0";

    setTimeout(() => {
        const selectedQuote = listQuotations[currentIndex];

        quoteTitle.innerText = selectedQuote.quote;
        quoteAuthor.innerText = selectedQuote.author;

        quoteTitle.style.opacity = "1";
        quoteAuthor.style.opacity = "1";

        currentIndex = (currentIndex + 1) % listQuotations.length;
    }, 500);
}

updateQuote();

setInterval(updateQuote, 10500);

let currentQuoteIndex = 1;

function updateQuoteStyle() {
    for (let i = 1; i <= 5; i++) {
        document.querySelector(`.quote-${i}`).classList.remove("quote-final");
        document.querySelector(`.quote-${i}`).classList.add("quote-initial");
    }

    const currentElement = document.querySelector(`.quote-${currentQuoteIndex}`);
    if (currentElement) {
        currentElement.classList.remove("quote-initial");
        currentElement.classList.add("quote-final");
    }

    currentQuoteIndex = currentQuoteIndex >= 5 ? 1 : currentQuoteIndex + 1;
}

setInterval(updateQuoteStyle, 10550);

updateQuoteStyle();
