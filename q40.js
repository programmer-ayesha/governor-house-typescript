// Define the make_album function with an optional parameter for the number of tracks
function make_album(artist, title, tracks) {
    // Create an object describing the music album
    var album = {
        "artist": artist,
        "title": title
    };
    // If the number of tracks is provided, add it to the album object
    if (tracks !== undefined) {
        album["tracks"] = tracks;
    }
    // Return the album object
    return album;
}
// Make three dictionaries representing different albums and print each return value
console.log(make_album("Artist1", "Album1"));
console.log(make_album("Artist2", "Album2", 12));
console.log(make_album("Artist3", "Album3", 8));
