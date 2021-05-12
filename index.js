const express = require('express')
const app = express()
const port = 3000
const prefix = '>';
const nothing = '';
 
app.get("/", (req, res) => {
  res.send("Activated.")
})
 
let Discord = require('discord.js')
let client = new Discord.Client();

client.login('ODM4NDkyMDg1OTkyMjkyMzUz.YI74mw.V0Z3O-GG4VDcKEwzsmlvABrlRqY')
