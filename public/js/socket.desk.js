window.onload = function() {

    var socket = io();

    var label = $("#lblNuevoTicket");

    var searchParams = new URLSearchParams(window.location.search);

    if (!searchParams.has("desk")) {
        window.location = "index.html";
        throw new Error("The desk is necesary");
    }

    var desk = searchParams.get("desk");

    $("h1").text(" Escritorio " + desk);

    var labelSmall = $("small");

    $("button").on('click', function() {

        socket.emit('attendTicket', { desk: desk }, function(resp) {
            console.log("ready ", resp);
            if (resp && resp.number) {
                labelSmall.text(resp.number)
            } else {
                alert("No hay más tickets")
            }
        });

    });

};