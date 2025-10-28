// window.addEventListener("load", () => {
//     console.log(document.querySelector("#create-btn"));
// })

// console.log(document.querySelector("#create-btn"));

// Event binding
document.querySelector("#show-playlist-btn").addEventListener("click", createPlaylistPopup);
document.querySelector("#create-playlist-btn").addEventListener("click", createPlaylist);
let playlistData = [];

function createPlaylistPopup() {
    // console.log("Button Clicked...");
    let playlistPopup = document.querySelector(".create-playlist-popup");
    // playlistPopup.style.transform = "translateX(0%)";
    playlistPopup.classList.toggle("open-playlist");
}

function createPlaylist() {
    let playlistName = document.querySelector("#playlist-name");
    playlistData.push(playlistName.value);
    let ul = document.querySelector("#user-playlist");
    ul.innerHTML = "";
    for(var i = 0; i < playlistData.length; i++) {
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.innerText = playlistData[i];
        li.appendChild(span);
        ul.appendChild(li);
    }
    playlistName.value = "";
}