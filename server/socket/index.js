const { io } = require('../server');

io.on('connection', (client) => {

    console.log("User conect");

    const msgClient = {
        user: "Fulanito",
        message: "Bienvenido a mi aplicación, espero sea de tu agrado"
    }

    //client.emit("sendMsgServer", msgClient);

    client.on('disconnect', () => {
        console.log("Bye User");
    });

    //Escuchar cliente
    client.on('sendMessage', (msg) => {
        console.log("recibiendo", msg)
    });

    //Escuchar y hacer algo con esa informacion
    client.on('recordInfo', (msg, callBack) => {
        console.log("Listening", msg)
        setTimeout(() => {
            callBack({ success: true, message: "Recorded OK!!!" });
        }, 5000);

    });

    //Recibir brodcast
    client.on('brodcastMsgServer', (msg) => {
        console.log("brodcast data", msg);
        client.broadcast.emit("brodcastMsgServer", msg);
    });
});