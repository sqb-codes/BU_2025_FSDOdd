let json_response;
// IIFE - Immediate Invoke Function Expression
(function() {
    // const URL = "https://api.jamendo.com/v3.0/albums/tracks/?client_id=a64da5d4&format=jsonpretty&limit=1&artist_name=we+are+fm&type=album+single";
    const URL = "https://api.jamendo.com/v3.0/users/tracks/?client_id=a64da5d4&format=jsonpretty&limit=20&order=rating_desc+updatedate_desc&id=972174"
    fetch(URL)
    .then(response => {
        if(!response.ok) {
            throw new Error("Failed to get response",response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log('Fetching data:',data);
        json_response = data;
        let ul = document.querySelector("#songs-collection");
        let tracks = data.results[0].tracks;
        tracks.forEach((track) => {
            let li = document.createElement("li");
            let img = document.createElement("img");
            img.src = track.album_image;
            
            let span = document.createElement("span");
            span.innerText = track.name;

            let track_url = track.audio;
            img.alt = track_url;
            img.addEventListener("click", playSong);

            let playListBtn = document.createElement("button");
            playListBtn.innerText = "Add to Playlist";
            
            li.appendChild(img);
            li.appendChild(span);
            li.appendChild(playListBtn);
            ul.appendChild(li);
        })
    })
    .catch(error => {
        console.error("Failed to load data",error);
    })
})();

function playSong() {
    let audio_source = document.querySelector("#audio-player audio source");
    audio_source.src = this.alt;
    let audio_player = document.querySelector("#audio-player audio");
    audio_player.load();
    audio_player.play();
}