const express = require("express");
const http = require("http");
const fs = require("fs");
const socket_io = require("socket.io");

const app = express();
const server = http.createServer(app);
const io_server = socket_io(server);

const port = process.env.PORT || 80;
const NOT_FOUND = "<html><h1>error 404 page not found</h1></html>";
const pages_folder = "Client/Pages/";
const games_folder = pages_folder + "Games/";
//Classes
const NetworkHandler = require("./Networking/NetworkHandler.js");

//Variables

app.get("*", (req, res) => {
    let newUrl = req.url;

    if (newUrl.startsWith("/")) newUrl = newUrl.slice(1);

    if (newUrl == ""){
        res.redirect("/home");
        return;
    }
    if (newUrl == "home" || newUrl == "home/") newUrl = pages_folder + "Index.html";
    if(newUrl.startsWith("games")){
        if (newUrl == "games" || newUrl == "games/") newUrl = pages_folder + "Games.html";
        else{
            var game = newUrl.slice("games/".length);
            newUrl = games_folder + game + ".html";
        }
    }

    var type = "text/html";
    /*
    if (newUrl.startsWith("Shared/Modules/") || newUrl.startsWith("Client/Scripts/Core/Util/Modules/")) {
        type = "text/javascript";
    }
    */

    /*
    Using this as a way to only request for client/shared files instead of any coming to server Server folder
    */
    if ((newUrl.startsWith("Client") || newUrl.startsWith("Shared")) == false)
        newUrl = "random_location";

    //Putting it through a try/catch loop to avoid any errors crashing the server
    try {
        const headers = { "Content-Type": type };
        fs.readFile(newUrl, function(error, data) {
            if (error) {
                res.writeHead(404, headers);
                res.write(NOT_FOUND);
            } else {
                res.writeHead(200, headers);
                res.write(data);
            }
            res.end();
        });
    } catch (exception) {
        //OutputHandler.Log(exception);
        console.log(exception);
    }
});

app.use(express.static(__dirname + '/Shared'));

server.listen(port, (error, data) => {
    if (error)
        //OutputHandler.Log(`Server failed to start because of : ${data}.`);
        console.log(`Server failed to start because of : ${data}.`);
    else{
        //OutputHandler.Log(`Server started on port ${port}.`);
        console.log(`Server started on port ${port}.`);
        Init();
    }
})

function Init() {
    //PartyManager.Init();
    NetworkHandler.Init(io_server);
    //SaveHandler.LoadPlayerData();

    //world = new World("Sus");
    //world.CreateChunk(0, 0);

    //setInterval(Update, 1000 / update_rate);

    console.log("Successfully initialized");
}

function Update() {
    //Game.games.forEach((game, index)=>{
    //    game.Update();
    //});
}