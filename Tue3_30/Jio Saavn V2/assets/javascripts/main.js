// window - global object in JS
// Event binding - bind load event with a function
// the callback function will execute when event will be triggered
// window.addEventListener("load", () => {
//     console.log(document.querySelector("#create-playlist-btn"));
// });

// console.log(document.querySelector("#create-playlist-btn"));

document.querySelector("#create-playlist-btn").addEventListener("click", createPlaylist);

let playListData = [];

function createPlaylist() {
    let playlistName = document.querySelector("#playlist-name");
    playListData.push(playlistName.value);

    let ul = document.querySelector("#playlist-list");
    ul.innerHTML = "";
    
    for(let i = 0; i < playListData.length; i++) {
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.innerText = playListData[i];
        li.appendChild(span);
        ul.appendChild(li);
        playlistName.value = "";

        setTimeout(() => {
            li.style.transform = "translateX(0%)";
        }, 100);
    }
}