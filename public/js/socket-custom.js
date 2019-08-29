var socket = io();

//ON escuchar información
socket.on('connect', function() {
    console.log("Connect to Server")
});

socket.on('disconnect', function() {
    console.log("Dead server")
});

//Enivar informacion al servidor
var obj = {
    user_name: "Juan",
    message: "Hola desde el browser"
};
socket.emit('sendMessage', obj);

//Escuchando informacion del server
socket.on('sendMsgServer', function(msg) {
    console.log("server msg", msg);
});

//Escuchando mensaje de brodcast
socket.on('brodcastMsgServer', function(msg) {
    console.log("Alguien envío", msg);
});

//Enivar informacion al servidor para guardar ( con collback )
document.getElementById('myBtnRecord').addEventListener("click", function() {

    var objSaved = {
        user: "Luis Perez",
        age: 25,
    };

    console.log("Cliked send server", objSaved);

    socket.emit('recordInfo', objSaved, function(resp) {
        console.log(resp);
    });
});