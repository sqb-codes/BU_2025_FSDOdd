function playSong() {
    let track_id = this.title;
    let track_obj = json_response.filter(track => track.id == track_id)[0];
    console.log("Track Obj:", track_obj);
    let audio_url = track_obj.audio;
    let audio_player = document.querySelector("#audio-player");
    let source = audio_player.querySelector("source");
    source.src = audio_url;
    audio_player.load();
    audio_player.play();
}