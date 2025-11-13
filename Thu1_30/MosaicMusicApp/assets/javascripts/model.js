// Function as a constructor
// function Task(title, description, startDate, dueDate) {
//     this.title = title;
//     this.description = description;
//     this.startDate = startDate;
//     this.dueDate = dueDate;
// }

class Song {
    constructor(trackId, title, albumImage) {
        this.trackId = trackId;
        this.title = title;
        this.albumImage = albumImage;
    }
}

let playListObj = {
    playList: [],
    songId: 0,
    addSong: function(trackId, title, albumImage) {
        let newSong = new Song(trackId, title, albumImage);
        this.playList.push(newSong);
        console.log(this.playList);
    },

    deleteSong: function(songId) {
        this.playList = this.playList.filter(song => {
            return song.trackId != songId;
        })
    }
}