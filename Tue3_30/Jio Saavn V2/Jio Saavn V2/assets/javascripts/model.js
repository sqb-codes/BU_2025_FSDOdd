// Function as a constructor
// function Task(title, description, startDate, dueDate) {
//     this.title = title;
//     this.description = description;
//     this.startDate = startDate;
//     this.dueDate = dueDate;
// }

// [
//     {
//         playListId: 1,
//         playListName: "My Favorites",
//         songs: [
//             {
//                 trackId: 12345,
//                 songName: "Song One",
//                 albumImage: "https://example.com/image1.jpg"
//             },
//             {
//                 trackId: 67890,
//                 songName: "Song Two",
//                 albumImage: "https://example.com/image2.jpg"
//             }
//         ]
//     }
// ]


class Playlist {
    constructor(playlistName) {
        this.playlistName = playlistName;
        this.songs = [];
    }
}

class Song {
    constructor(trackId, songName, albumImage) {
        this.trackId = trackId;
        this.songName = songName;
        this.albumImage = albumImage;
    }
}

let playListObj = {
    playList: [],
    playListId: 0,
    createPlaylist: function(playlistName) {
        this.playListId++;
        let newPlaylist = new Playlist(playlistName);
        // this.playList.push(newPlaylist);
        // Spread Operator for adding playList Id dynamically
        this.playList = [...this.playList, {...newPlaylist, playListId: this.playListId}];
        console.log("PlayList:", this.playList);
    },

    addSongToPlaylist: function() {

    }
}