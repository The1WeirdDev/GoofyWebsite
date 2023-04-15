const { v4: uuidv4 } = require('uuid');

module.exports = class Player {
    socket = null;
    socket_id = null;

    user_id = null;
    username = null;

    constructor(socket) {
        this.socket = socket;
        this.socket_id = socket.id;

        this.CreateUserId();
        this.CreateRandomUsername();
    }

    IsConnected(){
        if(!this.socket)
            return false;
        if(!this.socket.connected)
            return false;

        return true;
    }

    CreateUserId() {
        this.user_id = uuidv4();
    }

    CreateRandomUsername() {
        this.username = "Player" + (Math.floor(Math.random() * 10000).toString());
    }

    SendPacket(type, data){
        if(this.IsConnected()){
            this.socket.emit(type, data);
        }
    }

    Update() { }
}