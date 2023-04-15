module.exports = class PacketTypes {
    /*
        Could save some lines of code with removing some of these and combining them for client and server
        But i like this system
    */

    //Server connections
    static connect = "connect";
    static reconnect = "reconnect";
    static disconnect = "disconnect";
    
    //Players
    static retrieve_new_user_data = "retrieve_new_user_data";
    static set_new_user_data = "set_new_user_data";
    
    //World
    static get_chunk_data = "get_chunk_data";
    static set_chunk_data = "set_chunk_data";
}