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
  }
}
// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
var printPlaylist = function (playlistId) {
  var playListOne = Object.values(library.playlists[playlistId]);
  var playlist = playListOne[0] + ": " + playListOne[1] + " - " + playListOne[2].length + " tracks";
  var trackNumber = library.playlists[playlistId].tracks;
  for (var i = 0; i < trackNumber.length; i++) {
    var details = Object.values(library.tracks[trackNumber[i]]);
    console.log(details[0] + ": " + details[1] + " by " + details[2] + "(" + details[3] + ")");
  }
}
// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
var printTracks = function () {
  var trackDetails = Object.keys(library.tracks);
  for (var i = 0; i < trackDetails.length; i++) {
    var bar = Object.values(library.tracks[trackDetails[i]]);
    console.log(bar[0] + ": " + bar[1] + " by " + bar[2] + " (" + bar[3] + ")")
  }
}
// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
var printPlaylists = function () {
  var playListDetails = Object.keys(library.playlists); //[p01, p02]
  for (var i = 0; i < playListDetails.length; i++) {
    var fullDetails = Object.values(library.playlists[playListDetails[i]]);
    console.log(fullDetails[0] + ": " + fullDetails[1] + " - " + fullDetails[2].length + " tracks");
  }
}
// adds an existing track to an existing playlist
var addTrackToPlaylist = function (trackId, playlistId) {
  // var existingTrack = Object.values(library.tracks[trackId])
  // var newTrackId = existingTrack[0];
  var toThePlayList = Object.values(library.playlists[playlistId].tracks);
  toThePlayList.push(trackId);
  return toThePlayList;
}
// generates a unique id
// (use this for addTrack and addPlaylist)
var uid = function () {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
// adds a track to the library
var addTrack = function (name, artist, album) {
  var strr = uid();
  library.tracks["t0" + strr] = {
    id: "t0" + strr,
    name: name,
    artist: artist,
    album: album
  }
}
// adds a playlist to the library
var randomTrackGenerator = function () {
  var randomNumber = Math.round(Math.random() * 5) + 1
  var trackAmount = []
  for (var i = 1; i <= randomNumber; i++) {
    trackAmount.push("t0" + i);
  }
  return trackAmount
}
var addPlaylist = function (name) {
  var newTracks = randomTrackGenerator();
  var strr = uid();
  library.playlists["p0" + strr] = {
    id: "p0" + strr,
    name: name,
    tracks: newTracks
  }
}
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
var printSearchResults = function (query) {
}