var socket = io();

socket.on('connect', function() {
    console.log("Connect to server");
});

socket.on('discconect', function() {
    console.log('Disconnect to server');
});

window.onload = function() {

    console.log("El principio básico");

    var label = $("#lblNuevoTicket");

    $('button').on('click', function(e) {

        console.log("Cliked");

        //e.preventDefault();

        socket.emit('nextTicket', function(resp) {
            console.log("Next Tikect ", resp);
            label.text("Siguiente Ticket " + resp);
        });

    });

    socket.on('stateTicket', function(rsp) {
        console.log("Init", rsp);
        label.text("Siguiente Ticket " + rsp.now);
    });

};