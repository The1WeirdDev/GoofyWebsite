/*var gl = null;
const desired_frame_rate = 60;

var server = null;
var shader = null;
var mesh = null;

function SetCallbacks(){
    window.onload = StartGame;
    window.onbeforeunload = CleanUp;
}
function StartGame(){
    SetCallbacks();
    Init();
    setInterval(Update, desired_frame_rate);
}

function OnServerConnect(server){
    console.log(`Connected To Server With Id of ${server.id}`);

    server.socket.on(PacketTypes.set_new_user_data, (data)=>{
        console.log(data);
    });

    server.AddPacketToQue(PacketTypes.retrieve_new_user_data);
}
function OnServerDisconnect(server){
    console.log(`Disconnected from Server With Id of ${server.id}`);
}

function Init(){
    Display.Init();
    Display.LoadWebGL();
    Display.SetBackgroundColor("blue");

    server = new Server(window.location.origin, OnServerConnect, OnServerDisconnect);

    shader = new ShaderTexturelessShape();

    mesh = new MeshPlain3D();
    mesh.CreateMesh([[0, 0, 0, 1, 1, 0, 1, 1], [0, 1, 2, 2, 1, 3]]);

    console.log("Initialized");
}

function Update(){
    Display.Update();
    server.Tick();

    shader.Start();
    mesh.Draw();
    shader.Stop();
}

function CleanUp(){
    mesh.CleanUp();
    shader.CleanUp();
    Display.CleanUp();

    console.log("Cleaned Up");
}

SetCallbacks();
*/












/*
var gl = null;
const desired_frame_rate = 60;

var server = null;

function SetCallbacks(){
    window.onload = StartGame;
    window.onbeforeunload = CleanUp;
}
function StartGame(){
    SetCallbacks();
    Init();
    setInterval(Update, desired_frame_rate);
}

function OnServerConnect(server){
    console.log(`Connected To Server With Id of ${server.id}`);

    server.socket.on(PacketTypes.set_new_user_data, (data)=>{
        console.log(data);
    });

    server.AddPacketToQue(PacketTypes.retrieve_new_user_data);
}
function OnServerDisconnect(server){
    console.log(`Disconnected from Server With Id of ${server.id}`);
}

function Init(){
    Display.Init();
    Display.LoadWeb2D();

    server = new Server(window.location.origin, OnServerConnect, OnServerDisconnect);

    console.log("Initialized");
}

function Draw(){

}

function Update(){
    Display.Update();
    server.Tick();
}

function CleanUp(){
    server.Disconnect();
}

SetCallbacks();
*/