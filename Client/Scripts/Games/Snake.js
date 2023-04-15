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
    Display.SetCanvasSize(750, 750);
    
    server = new Server(window.location.origin, OnServerConnect, OnServerDisconnect);

    console.log("Initialized");
}

function Draw(){
    Display.DrawRect("black", 0, 0, 800, 800);
}

function Update(){
    Display.Update();
    server.Tick();

    Display.CenterCanvas();
    Draw();
}

function CleanUp(){
    server.Disconnect();
}

SetCallbacks();