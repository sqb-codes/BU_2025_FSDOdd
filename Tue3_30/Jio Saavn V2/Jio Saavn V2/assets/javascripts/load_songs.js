let json_response;

// IIFE - Immediate Invoke Function Expression
(function() {
    // const URL = "https://api.jamendo.com/v3.0/albums/tracks/?client_id=a64da5d4&format=jsonpretty&limit=1&artist_name=we+are+fm&type=album+single";
    const URL = "https://api.jamendo.com/v3.0/users/tracks/?client_id=a64da5d4&format=jsonpretty&limit=7&order=rating_desc+updatedate_desc&id=972174";
    fetch(URL)
    .then(response => {
        if(!response.ok) {
            throw new Error("Failed to get response...");
        }
        return response.json();
    })
    .then((data) => {
        console.log("Data:",data);
        let tracks = data.results[0].tracks;
        json_response = tracks;
        let ul = document.querySelector("#trending-list");
        tracks.forEach(track => {
            let li = document.createElement("li");
            let span = document.createElement("span");
            let img = document.createElement("img");
            let button = document.createElement("button");
            button.innerText = "Add to Playlist";
            span.innerText = track.name;
            img.src = track.album_image;
            // img.alt = track.audio;
            img.title = track.id;
            img.addEventListener("click", playSong);
            button.addEventListener("click", addToPlaylistPopup);

            li.appendChild(img);
            li.appendChild(span);
            li.appendChild(button);
            ul.appendChild(li);
        });

    })
    .catch(error => {
        console.log("Error while calling API :",error);
    });
})();

