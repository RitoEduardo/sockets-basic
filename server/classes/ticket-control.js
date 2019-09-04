const fs = require('fs');

class Ticket {

    constructor(number, desk) {

        this.number = number;
        this.desk = desk;

    }
}


class TicketControl {

    constructor() {

        this.last = 0;
        this.today = new Date().getDate();
        this.tickets = [];


        let data = require('../data.json');

        if (data.today === this.today) {
            this.last = data.last;
            this.tickets = data.tickets;
            //this.lastFour = this.fnGetLastFour();
        } else {
            this.resetCount();
        }
    }

    resetCount() {
        this.last = 0;
        this.tickets = [];
        this.savedFile();
    }

    next() {
        this.last += 1;

        let ticket = new Ticket(this.last, null);
        this.tickets.push(ticket);

        this.savedFile();
        return this.last;
    }

    getLastTicket() {
        return this.last;
    }

    attendTicket(desk) {
        if (this.tickets.length == 0) {
            return {
                succes: true,
                msg: "Finish Tickets"
            }
        }

        let tempTicket = this.tickets.shift();

        if (!tempTicket || !tempTicket.number) {
            return {
                succes: false,
                msg: "Ticket no found"
            }
        }

        let ticket = new Ticket(tempTicket.number, desk);

        console.log("Ultimos cuatro", this.fnGetLastFour());


        //this.lastFour.unshift(ticket);

        //if (this.lastFour.length > 4) {
        //    this.lastFour.pop();
        //}

        this.savedFile();
        return ticket;

    }

    fnGetLastFour() {
        var newArr = [];
        this.tickets.some((item, i) => {
            if (4 > i) {
                newArr.push(
                    new Ticket(item.number, item.desk ? item.desk : null)
                );
            } else {
                return true;
            }
        });
        return newArr;
    }

    savedFile() {

        let jsonData = {
            last: this.last,
            today: this.today,
            tickets: this.tickets
        }

        let jsonDataString = JSON.stringify(jsonData);
        fs.writeFileSync('./server/data.json', jsonDataString);
        console.log('Saved system');

    }


}

module.exports = {
    TicketControl
};