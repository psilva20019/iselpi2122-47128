"use strict"

const gameFinder = require("./gameFinder1")

/**
 * Creates a json file with the name and URL of the games which id is presented in the text file "./ids.txt"
 * */
gameFinder.CreateFile("./ids.txt")
