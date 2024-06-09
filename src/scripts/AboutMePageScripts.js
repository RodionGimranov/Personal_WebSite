let mobileVersion_btn = document.getElementById("mobile_version-link");
let open_QrCodeWindow = document.getElementById("qr_code_open");
let close_QR_Code = document.getElementById("close_QRCode_window");
let body_aboutMe = document.getElementById("aboutMe_home_page");

mobileVersion_btn.addEventListener("click", function () {
  open_QrCodeWindow.style.opacity = "1";
  open_QrCodeWindow.style.display = "flex";
  open_QrCodeWindow.style.transform =
    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
  body_aboutMe.style.overflow = "hidden";
});

close_QR_Code.addEventListener("click", closeQRCodeWindow);

function closeQRCodeWindow() {
  open_QrCodeWindow.style.display = "flex";
  open_QrCodeWindow.style.opacity = "0";
  open_QrCodeWindow.style.transform =
    "translate3d(0px, 0px, 0px) scale3d(0, 0, 1)";
  body_aboutMe.style.overflowY = "scroll";
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeQRCodeWindow();
  }
});

let playIcon =
  "../assets/images/svg/music-control-panel-elements/Play-song-icon.svg";
let stopIcon =
  "../assets/images/svg/music-control-panel-elements/Stop-song-icon.svg";
let previousIcon =
  "../assets/images/svg/music-control-panel-elements/Previous-song-icon.svg";
let nextIcon =
  "../assets/images/svg/music-control-panel-elements/Next-song-icon.svg";
let volumeOnIcon =
  "../assets/images/svg/music-control-panel-elements/player-volume-icon.svg";
let volumeOffIcon =
  "../assets/images/svg/music-control-panel-elements/player-mute-icon.svg";

let audioPlayer = document.getElementById("audio-player");
let playBTN = document.getElementById("play-btn");
let previousBTN = document.getElementById("previous-song-btn");
let nextBTN = document.getElementById("next-song-btn");
let volumeBTN = document.getElementById("player-volume-btn");
let songCover = document.getElementById("song-cover");
let artistName = document.getElementById("artist-name");
let songName = document.getElementById("song-name");

const playlistSong = [
  {
    cover_src: "../assets/images/webp/song-cover-images/Tyler-the-Creator.webp",
    name_artist: "Tyler, the Creator",
    name_song: "See You Again",
    song_src: "../assets/audio/See-You-Again.mp3",
  },
  {
    cover_src: "../assets/images/webp/song-cover-images/Bo-Burnham.webp",
    name_artist: "Bo Burnham",
    name_song: "All Eyes On Me",
    song_src: "../assets/audio/All-Eyes-On-Me.mp3",
  },
  {
    cover_src: "../assets/images/webp/song-cover-images/Drake.webp",
    name_artist: "Drake",
    name_song: "The Motion",
    song_src: "../assets/audio/The-Motion.mp3",
  },
  {
    cover_src: "../assets/images/webp/song-cover-images/The-Weeknd.webp",
    name_artist: "The Weeknd",
    name_song: "Moth To A Flame",
    song_src: "../assets/audio/Moth-To-A-Flame.mp3",
  },
  {
    cover_src: "../assets/images/webp/song-cover-images/Pouya.webp",
    name_artist: "Pouya",
    name_song: "Forever Waiting For Yo...",
    song_src: "../assets/audio/Forever-Waiting-For-You-At-My-Window.mp3",
  },
  {
    cover_src: "../assets/images/webp/song-cover-images/earfquake.webp",
    name_artist: "Tyler, the Creator",
    name_song: "EARFQUAKE",
    song_src: "../assets/audio/EARFQUAKE.mp3",
  },
];

let currentSongIndex = 0;
let isPlaying = false;
let isMuted = false;

function loadSong(songIndex) {
  const song = playlistSong[songIndex];
  audioPlayer.src = song.song_src;
  songCover.src = song.cover_src;
  artistName.textContent = song.name_artist;
  songName.textContent = song.name_song;
}

function togglePlay() {
  if (isPlaying) {
    audioPlayer.pause();
  } else {
    audioPlayer.play();
  }
  isPlaying = !isPlaying;
  updatePlayButton();
}

function updatePlayButton() {
  playBTN.src = isPlaying ? stopIcon : playIcon;
}

function previousSong() {
  currentSongIndex =
    (currentSongIndex - 1 + playlistSong.length) % playlistSong.length;
  loadSong(currentSongIndex);
  if (isPlaying) {
    audioPlayer.play();
  }
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % playlistSong.length;
  loadSong(currentSongIndex);
  if (isPlaying) {
    audioPlayer.play();
  }
}

function toggleVolume() {
  audioPlayer.muted = !audioPlayer.muted;
  isMuted = audioPlayer.muted;
  volumeBTN.src = isMuted ? volumeOffIcon : volumeOnIcon;
}

playBTN.addEventListener("click", togglePlay);
previousBTN.addEventListener("click", previousSong);
nextBTN.addEventListener("click", nextSong);
volumeBTN.addEventListener("click", toggleVolume);
audioPlayer.addEventListener("ended", nextSong);

loadSong(currentSongIndex);

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
  true,
);

const listQuotations = [
  {
    quote:
      "If you give a man a program, you occupy him for a day. If you teach a man to program, you occupy him for a lifetime.",
    author: "Waseem Latif",
  },
  {
    quote:
      "There is no end point in learning to program. Every project teaches you something new.",
    author: "Kathleen Dollard",
  },
  {
    quote:
      "There are only two kinds of programming languages: those people always complain about and those nobody uses.",
    author: "Bjarne Stroustrup",
  },
  { quote: "Code is harder to read than to write.", author: "Joel Spolsky" },
  {
    quote:
      "There are only two hard problems in computer science – cache invalidation and naming things.",
    author: "Phil Karlton",
  },
];

let currentIndex = 0;

function updateQuote(index) {
  const quoteTitle = document.getElementById("quote-title");
  const quoteAuthor = document.getElementById("quote-author");

  const selectedQuote = listQuotations[index];

  quoteTitle.style.opacity = "0";
  quoteAuthor.style.opacity = "0";

  setTimeout(() => {
    quoteTitle.innerText = selectedQuote.quote;
    quoteAuthor.innerText = selectedQuote.author;

    quoteTitle.style.opacity = "1";
    quoteAuthor.style.opacity = "1";
  }, 200);
}

function updateQuoteStyle() {
  for (let i = 1; i <= 5; i++) {
    document.querySelector(`.quote-${i}`).classList.remove("quote-final");
    document.querySelector(`.quote-${i}`).classList.add("quote-initial");
  }

  let currentElementIndex = currentIndex + 1;
  if (currentElementIndex === listQuotations.length) {
    currentElementIndex = 0;
  }
  document
    .querySelector(`.quote-${currentElementIndex + 1}`)
    .classList.remove("quote-initial");
  document
    .querySelector(`.quote-${currentElementIndex + 1}`)
    .classList.add("quote-final");
}

function showNextQuote() {
  currentIndex = (currentIndex + 1) % listQuotations.length;
  updateQuote(currentIndex);
  updateQuoteStyle();
}

function showPreviousQuote() {
  currentIndex =
    (currentIndex - 1 + listQuotations.length) % listQuotations.length;
  updateQuote(currentIndex);
  updateQuoteStyle();
}

document
  .getElementById("next-quote-btn")
  .addEventListener("click", showNextQuote);
document
  .getElementById("previous-quote-btn")
  .addEventListener("click", showPreviousQuote);

updateQuote(currentIndex);
updateQuoteStyle();
