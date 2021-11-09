"use strict"
const fetch = require("node-fetch")
const fs = requihttps://github.com/psilva20019re("fs/promises")

module.exports = {CreateFile}
const ATLAS_HOST = "https://api.boardgameatlas.com/api/"
const ATLAS_ID = process.env.ATLAS_CLIENT_ID;



 /**
 * Create a json file named "games.json", based on the String representative of the given text file
 *@param {String} FileName Name of the text file wich has the IDs of the games.
 */
 function CreateFile(FileName){
  const jsonArray = getGameInfo(FileName)
  return jsonArray.then(json => fs.writeFile(("./games.json"),json))
}



 /**
 * For each ID in the text file, returns a String representation of an array of objects 
 * containing information(URL and name) about the games which id were in the text file
 *@param {String} FileName Name of the text file wich has the IDs of the games.
 */
function getGameInfo(FileName){
    return fs.readFile(FileName)
        .then(fileBuffer => fileBuffer.toString().split("\r\n"))
        .then(ob => ob.map(person => { return idSearcher(person) }))
        .then(a => Promise.all(a))
        .then(arr => JSON.stringify(arr))
 }  



 /**
 * Given an ID, returns an object with the information about that game name and URL 
 *@param {String} id ID for a specific board game.
 */
function idSearcher(id){
    return fetch(ATLAS_HOST + "search?ids=" + id + "&client_id=" + ATLAS_ID)
            .then(response => response.json())
            .then(obj => ({ game: obj["games"]["0"]["name"], url: obj["games"]["0"]["url"] }))
    }


