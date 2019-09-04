const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');

const ticketCtrl = new TicketControl();

io.on('connection', (client) => {

    client.emit('stateTicket', {
        now: ticketCtrl.getLastTicket(),
        lastFour: ticketCtrl.fnGetLastFour()
    });
    client.on('nextTicket', callback => callback(ticketCtrl.next()));

    client.on('attendTicket', (data, callback) => {
        if (!data.desk) {
            return callback({
                success: false,
                message: "The desk is necesary"
            });
        }
        client.emit('stateTicket', {
            lastFour: ticketCtrl.fnGetLastFour()
        });
        callback(ticketCtrl.attendTicket(data.desk));
        //Actualizar o notificar que se modificaron los últimos cuatro
    })

});