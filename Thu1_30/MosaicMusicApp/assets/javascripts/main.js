function addSongController() {
    let songId = this.id;
    let currentSong = tracks.filter(track => track.id == songId)[0];
    playListObj.addSong(currentSong.id, currentSong.name, currentSong.album_image);
    showPlayList();
    savePlayList();
}

function deleteSongController() {
    playListObj.deleteSong(this.id);
    showPlayList();
    savePlayList();
}

function showPlayList() {
    let ul = document.querySelector("#playList");
    console.log(ul);
    ul.innerHTML = "";
    playListObj.playList.forEach(song => {
        let li = document.createElement("li");
        let span = document.createElement("span");
        let img = document.createElement("img");
        let deleteBtn = document.createElement("button");

        span.innerText = song.title;
        img.src = song.albumImage;
        deleteBtn.innerHTML = "<i class='fa fa-trash'></i>";
        deleteBtn.setAttribute("id", song.trackId);
        deleteBtn.addEventListener("click", deleteSongController)

        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        ul.appendChild(li);
    })
}

function loadPlayList() {
    if(window.localStorage) {
        if(localStorage.getItem("playList")) {
            let data = localStorage.getItem("playList");
            playListObj.playList = JSON.parse(data);
            showPlayList();
        }
    }
    else {
        alert("Your browser does not support local storage!");
    }
}

function savePlayList() {
    if(window.localStorage) {
        let data = JSON.stringify(playListObj.playList);
        localStorage.setItem("playList", data);
    }
    else {
        alert("Your browser does not support local storage!");
    }
}

loadPlayList();