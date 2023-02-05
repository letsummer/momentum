const songlist = [
    {
        title: "⚾기를 높여라⚾",
        link: "music/기를 높여라.mp3",
    },
    {
        title: "⚾꿈이여 하나가 되자⚾",
        link: "music/꿈이여 하나가 되자.mp3",
    },
    {
        title: "⚾사랑한다 키움⚾",
        link: "music/사랑한다 키움.mp3",
    },
    {
        title: "⚾승리가⚾",
        link: "music/승리가.mp3",
    },
    {
        title: "⚾승리를 위하여⚾",
        link: "music/승리를 위하여.mp3",
    },
    {
        title: "📣승리를 위한 함성📣",
        link: "music/승리를 위한 함성.mp3",
    },
    {
        title: "🦸‍♂️영웅출정가🦸‍♂️",
        link: "music/영웅출정가.mp3",
    },
    {
        title: "⚾우리가 승리한다⚾",
        link: "music/우리가 승리한다.mp3",
    },
    {
        title: "🤳하늘 끝까지🤳",
        link: "music/하늘 끝까지.mp3",
    },
];

const songTitle = document.getElementById("playlist__title");

const musicFile = document.getElementById("playlist__song");
const playBtn = document.querySelector("#btn__play>img");
const nextBtn = document.querySelector("#btn__next>img");

function playMusic(){
    const playState = playBtn.style.animationPlayState;
    if(playState === "paused"){
        playBtn.style.animationPlayState = "running";
        musicFile.play();
    } else {
        playBtn.style.animationPlayState = "paused";
        musicFile.pause();
    }
}

function nextMusic(){
    const random = Math.floor(Math.random()*songlist.length);
    const randomSongTitle = songlist[random].title;
    const randomSongFile = songlist[random].link;

    musicFile.src = randomSongFile;
    console.log(songTitle);
    musicFile.setAttribute('src', randomSongFile);
    
    songTitle.innerText = `🔥🔥${randomSongTitle}🔥🔥`;
}

playBtn.addEventListener("click", playMusic);
nextBtn.addEventListener("click", nextMusic);



// 보류 //

// http://jsfiddle.net/surendraVsingh/djd6V/ 참고하기

// const audioOnly = [
//     "https://www.youtube.com/embed/7p2U-yr-clQ?autoplay=1&loop=1",
// "https://www.youtube.com/embed/DqiP4UvS7CQ?autoplay=1&loop=1",
// "https://www.youtube.com/embed/antR6UYqZKk?autoplay=1&loop=1",
// "https://www.youtube.com/embed/PvqICHL1hl8?autoplay=1&loop=1",
// "https://www.youtube.com/embed/4YNAvO63mVA?autoplay=1&loop=1",
// "https://www.youtube.com/embed/jFkiL_xb5aU?autoplay=1&loop=1",
// "https://www.youtube.com/embed/d286l0nk0ZE?autoplay=1&loop=1",
// "https://www.youtube.com/embed/az3CX8V2Qis?autoplay=1&loop=1",
// "https://www.youtube.com/embed/DF3xCg-v4mY?autoplay=1&loop=1",
// "https://www.youtube.com/embed/XMKxxzy9XA0?autoplay=1&loop=1",
// "https://www.youtube.com/embed/tE6BPR9kXc0?autoplay=1&loop=1",    
// ];

// songTitle.innerText = randomSongTitle;
// console.log("랜덤: ", randomSongTitle);
