 var library = {
   tracks: {
     t01: {
       id: "t01",
       name: "Code Monkey",
       artist: "Jonathan Coulton",
       album: "Thing a Week Three"
     },
     t02: {
       id: "t02",
       name: "Model View Controller",
       artist: "James Dempsey",
       album: "WWDC 2003"
     },
     t03: {
       id: "t03",
       name: "Four Thirty-Three",
       artist: "John Cage",
       album: "Woodstock 1952"
     }
   },
   playlists: {
     p01: {
       id: "p01",
       name: "Coding Music",
       tracks: ["t01", "t02"]
     },
     p02: {
       id: "p02",
       name: "Other Playlist",
       tracks: ["t03"]
     }
   },
   printPlayList1: function (printId) {
     return printId + ": " + this.playlists[printId].name + " - " + this.playlists[printId].tracks.length + " tracks";
   },
   printAllPlaylists: function () {
     var playlistdetials = Object.keys(this.playlists)
     for (i = 0; i < playlistdetials.length; i++) {
       var bar = Object.values(this.playlists[playlistdetials[i]])
       console.log(bar[0] + ": " + bar[1] + " - " + bar[2].length + " tracks")
     }
   },
   printAllTracks: function () {
     var allTracks = Object.keys(this.tracks)
     for (i = 0; i < allTracks.length; i++) {
       var tracks = Object.values(this.tracks[allTracks[i]])
       console.log(tracks[0] + ": " + tracks[1] + " by " + tracks[2] + " (" + tracks[3] + ")")
     }
   },
   addTrackToPlayList: function (trackID, playListId) {
     var toThePlayList = Object.values(this.playlists[playListId].tracks)
     toThePlayList.push(trackID);
     return toThePlayList
   },
   addTrack: function (name, artist, album) {
     var strr = this.uid();
     this.tracks["t0" + strr] = {
       id: "t0" + strr,
       name: name,
       artist: artist,
       album: album
     }
   },
   uid: function () {
     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
   },
   randomTrackGenerator: function () {
     var randomNumber = Math.round(Math.random() * 5) + 1
     var trackAmount = []
     for (var i = 1; i <= randomNumber; i++) {
       trackAmount.push("t0" + i);
     }
     return this.trackAmount
   },
   addPlaylist: function (name) {
     var newTracks = this.randomTrackGenerator();
     var strr = this.uid();
     this.playlists["p0" + strr] = {
       id: "p0" + strr,
       name: name,
       tracks: newTracks
     }
   }
 }