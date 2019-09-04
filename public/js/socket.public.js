window.onload = function() {

    var socket = io();

    var lbl1 = $('#lblTicket1');

    var lbl2 = $('#lblTicket2');
    var lbl3 = $('#lblTicket3');
    var lbl4 = $('#lblTicket4');

    var lbldesk1 = $('#lblEscritorio1');

    var lbldesk2 = $('#lblEscritorio2');
    var lbldesk3 = $('#lblEscritorio3');
    var lbldesk4 = $('#lblEscritorio4');


    var arrayLbls = [lbl1, lbl2, lbl3, lbl4];
    var arrayLblDesks = [lbldesk1, lbldesk2, lbldesk3, lbldesk4];

    socket.on('stateTicket', function(rsp) {
        console.log("Init", rsp);

        var audio = new Audio('audio/new-ticket.mp3');
        console.log(audio);
        audio.play();

        if (rsp && rsp.lastFour) {

            rsp.lastFour.forEach((item, i) => {
                arrayLbls[i].text("Ticket " + item.number);
                arrayLblDesks[i].text("Escritorio " + item.desk);
            })

        }
    });

};