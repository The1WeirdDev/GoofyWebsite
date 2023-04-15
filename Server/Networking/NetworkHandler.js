const OutputHandler = require("./../Util/OutputHandler.js");
const PacketTypes = require("./PacketTypes.js");
const Player = require("./../Player/Player.js");

module.exports = class NetworkHandler {
    static server = null;

    static players = [];

    static Init(server) {
        NetworkHandler.server = server;

        server.on(PacketTypes.connect, (socket) => {
            //Creating Player Object
            var player = new Player(socket);
            NetworkHandler.players.push(player);
            
            NetworkHandler.SetSocketPacketHandlers(player, socket);
            NetworkHandler.OnConnected(player);
        });
    }

    static GetPlayerFromSocketId(socket_id) {
        for (var i = 0; i < NetworkHandler.players.length; i++) {
            if (NetworkHandler.players[i].socket_id == socket_id)
                return NetworkHandler.players[i];
        }
        
        return null;
    }

    static SendPacket(socket, type, data) {
        if (socket) {
            socket.emit(type, data);
        }
    }

    static BroadcastPacket(type, data) {
        NetworkHandler.server.sockets.emit(type, data);
    }

    static BroadcastPacketToAllExept(player, type, data) {
        for (var i = 0; i < NetworkHandler.players.length; i++) {
            if (NetworkHandler.players.socket_id != player.socket_id)
                NetworkHandler.players[i].socket.emit(type, data);
        }
    }

    static SetSocketPacketHandlers(player, socket) {
        socket.on(PacketTypes.disconnect, () => {
            NetworkHandler.OnDisconnected(player);
        });

        socket.on(PacketTypes.retrieve_new_user_data, () =>{
            var data = {user_id: player.user_id, name: player.username};
            player.SendPacket(PacketTypes.set_new_user_data, data); 
        });

        socket.on(PacketTypes.get_chunk_data, (data)=>{
            console.log("Requesting Chunk Data :" + data);
        });
    }

    static OnConnected(player) {
        var ip = player.socket.handshake.address;
        OutputHandler.Log(`${player.username} Connected.`);
    }

    static OnDisconnected(player) {
        OutputHandler.Log(`${player.username} Disconnected.`);
    }

    static OnPartyCreateRequest(player, data) {
        //The data send with the packet is useless for now
        //PartyManager.CreateParty(player);
    }
}