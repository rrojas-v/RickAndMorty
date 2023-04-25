const http = require('http');
//const url = require("url");
const dotenv = require('dotenv');

// en el back es require
// en el from es import

//const { number } = require('prop-types');
const data = require('../utils/data.js');

dotenv.config();

//const httpPort = 3002;
const NAMESERVER = process.env.REACT_APP_NAMESERVER; //'localhost';
const PORT = parseInt(process.env.REACT_APP_PORT);

console.log('Starting server on: ', NAMESERVER, ':', PORT);

const httpServer = http.createServer((req, res)=>{

    res.setHeader('Access-Control-Allow-Origin', '*');

    //if (arrUrl[1] === 'rickandmorty' && arrUrl[2] === 'character' && typeof (arrUrl[arrUrl.length-1]*1) === "number") {
    if (req.url.includes('rickandmorty/character') && typeof (req.url.split('/')[req.url.split('/').length-1]*1) === "number") {
        let strId = req.url.split('/')[req.url.split('/').length-1];
        const character = data.find(c=>c.id === Number(strId));
        res.writeHead(200, { 'Content-Type':'application/json' });
        res.end(JSON.stringify(character));
        console.log(character);
        return;
    }

    console.log(404);
    res.writeHead(404, { 'Content-Type':'text/plain' });
    res.end("Route not found");    

}).listen(PORT, NAMESERVER);
module.exports = httpServer;