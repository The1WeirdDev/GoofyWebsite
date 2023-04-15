class Server{
    location = null;
    socket = null;
    id = null;
    packet_que = [];

    on_connected = null;
    on_disconnected = null;

    constructor(location, connect_callback, disconnect_callback){
        this.on_connected = connect_callback;
        this.on_disconnected = disconnect_callback;

        this.Connect(location);
    }

    Connect(location){
        this.location = location;
        this.socket = io(location);

        this.socket.on("connect", ()=>{
            this.id = this.socket.id;

            if(this.on_connected)
                this.on_connected(this);
        });
        
        this.socket.on("disconnect", ()=>{
            if(this.on_disconnected)
                this.on_disconnected(this);

            this.Disconnect();
        });
    }
    
    Disconnect() {
        this.socket.disconnect();

        this.location = null;
        this.socket = null;
        this.id = null;
    }

    Tick(){
        if(this.IsConnected() == false)
            return;

        while (this.packet_que.length > 0) {
            var packet = this.packet_que[0];
            this.SendPacket(packet[0], packet[1]);
            this.packet_que.shift();
        }
    }

    IsConnected(){
        if (!this.socket)
            return false;

        if (!this.socket.connected)
            return false;

        return true;
    }

    AddPacketToQue(type, data){
        this.packet_que.push([type, data]);
    }

    SendPacket(type, data){
        if(this.IsConnected()){
            this.socket.emit(type, data);
        }
    }
}