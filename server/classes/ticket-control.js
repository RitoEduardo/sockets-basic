const fs = require('fs');

class TicketControl {

    constructor() {
        this.last = 0;
        this.today = new Date().getDate();
        let data = require('../data.json');

        if (data.day === this.data) {

        } else {

        }
    }

    resetCount() {

        let jsonData = {
            last: this.last,
            today: this.today
        }

        let jsonDataString = JSON.stringify(jsonData);


    }




}

module.exports = {
    TicketControl
};