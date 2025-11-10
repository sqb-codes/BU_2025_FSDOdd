// AJAX - Asynchronous JavaScript and XML
// API Call
// JS is a single threaded language

const URL = "https://api.jamendo.com/v3.0/users/tracks/?client_id=a64da5d4&format=jsonpretty&limit=10&order=rating_desc+updatedate_desc&id=972174";

let tracks;

fetch(URL)
.then(response => {
    if(!response.ok){
        throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
})
.then(data => {
    console.log(data);
    tracks = data.results[0].tracks;
    let ul = document.querySelector("#songs-new-release");
    tracks.forEach(track => {
        let li = document.createElement("li");
        let span = document.createElement("span");
        let img = document.createElement("img");
        let button = document.createElement("button");

        span.innerText = track.name;
        img.src = track.album_image;
        button.innerText = "Add to playlist";

        img.title = track.id;
        img.addEventListener("click", playSong);

        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(button);
        ul.appendChild(li);

    })
});

function playSong() {
    let songId = this.title;
    let currentSong = tracks.filter(track => track.id == songId)[0];
    let audio_url = currentSong.audio;
    let audioPlayer = document.querySelector("#audio");
    audioPlayer.querySelector("source").src = audio_url;
    audioPlayer.load();
    audioPlayer.play();
}