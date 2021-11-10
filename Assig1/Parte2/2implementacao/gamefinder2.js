"use strict"
const fetch = require("node-fetch")
const fs = require("fs/promises")

module.exports = {CreateFile}
const ATLAS_HOST = "https://api.boardgameatlas.com/api/"
const ATLAS_ID = process.env.ATLAS_CLIENT_ID



 /**
 * Create a json file named "games.json", based on the String representative of the given text file
 *@param {String} FileName Name of the text file wich has the IDs of the games.
 */
 async function CreateFile(FileName){
     try{
        const jsonArray =await getGameInfo(FileName)
        return await fs.writeFile(("./games.json"), jsonArray)
     }catch(err){console.log(err)}
}



 /**
 * For each ID in the text file, returns a String representation of an array of objects 
 * containing information(URL and name) about the games which id were in the text file
 *@param {String} FileName Name of the text file wich has the IDs of the games.
 */
async function getGameInfo(FileName){
    try{
        const fileBuffer = await fs.readFile(FileName)
        const ob = fileBuffer.toString().split("\r\n")
        const a = ob.map(person => { return idSearcher(person) })
        const arr = await Promise.all(a)
        return JSON.stringify(arr)
    }catch(err){console.log(err)}
 }  



 /**
 * Given an ID, returns an object with the information about that game name and URL 
 *@param {String} id ID for a specific board game.
 */
async function idSearcher(id){
    try{
        const response = await fetch(ATLAS_HOST + "search?ids=" + id + "&client_id=" + ATLAS_ID)
        const obj = await response.json()
        return ({ game: obj["games"]["0"]["name"], url: obj["games"]["0"]["url"] })
    }catch(err){console.log(err)}
}
