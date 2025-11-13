// window - global object in JS
// Event binding - bind load event with a function
// the callback function will execute when event will be triggered
// window.addEventListener("load", () => {
//     console.log(document.querySelector("#create-playlist-btn"));
// });

// console.log(document.querySelector("#create-playlist-btn"));

document.querySelector("#create-playlist-btn").addEventListener("click", createPlaylist);
document.querySelector("#close-playlist-popup").addEventListener("click", closePopup);

// let playListData = [];

function createPlaylist() {
    let playlistName = document.querySelector("#playlist-name");
    // playListData.push(playlistName.value);

    playListObj.createPlaylist(playlistName.value);
    showPlaylists();
    playlistName.value = "";
}

function showPlaylists() {
    let ul = document.querySelector("#playlist-list");
    ul.innerHTML = "";
    
    playListObj.playList.forEach(playlist => {
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.innerText = playlist.playlistName;
        li.appendChild(span);
        ul.appendChild(li);

    });
}

function closePopup() {
    document.querySelector("#playlist-popup").style.display = "none";
}

function addToPlaylistPopup() {
    document.querySelector("#playlist-popup").style.display = "block";
    let ul = document.querySelector("#playlist-popup-list");
    ul.innerHTML = "";
    if(playListObj.playList.length > 0) {
        playListObj.playList.forEach(playlist => {
            let li = document.createElement("li");
            let span = document.createElement("span");
            span.innerText = playlist.playlistName;
            console.log("Playlist Span:", span);

            li.addEventListener("click", addSongToPlaylist);

            li.appendChild(span);
            ul.appendChild(li);
        });
    }
}

function addSongToPlaylist() {
    playListObj.addSongToPlaylist();
}