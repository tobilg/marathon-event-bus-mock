"use strict";

const crypto = require("crypto");

const express = require("express");
const SSE = require("sse");

/**
 * MarathonEventBusMock server.
 */
class MarathonEventBusMockServer {

    constructor(port, boolLegacyEvents) {

        if (boolLegacyEvents) {
            this.exampleEvents = require("./exampleEvents");
        } else {
            this.exampleEvents = require("./exampleEvents-1.4");
        }

        this.port = port || 8080;
        this.connectionCache = {};

        this.app = express();

        let self = this;

        this.server = this.app.listen(this.port, function (err) {
            if (err) throw err;
            console.log("Marathon EventBus Mock SSE server ready on http://localhost:" + self.port)
        });

        this.sse = new SSE(this.server, { path: "/v2/events" });

        //
        this.sse.on("connection", function (connection) {
            let connectionId = crypto.randomBytes(16).toString("hex");

            // Store connection in connectionCache
            self.connectionCache[connectionId] = connection;

            self.connectionCache[connectionId].send({
                event: "connectionId",
                data: JSON.stringify(connectionId)
            });

            console.log("new connection with id "+ connectionId);

            self.connectionCache[connectionId].on("close", function () {
                console.log("Closed connection " + connectionId);
            });
        });

    }

    listen() {
        console.log("Listening for SSE requests on port " + this.port);
        this.server.listen(this.port);
    }

    close() {
        this.server.close();
    }

    closeConnection(connectionId) {
        if (this.connectionCache.hasOwnProperty(connectionId)) {
            console.log("Closing connectionId " + connectionId);
            this.connectionCache[connectionId].close();
        } else {
            console.log("Connection with connectionId " + connectionId + " doesn't exist!");
        }
    }

    requestEvent(eventType) {
        let self = this;
        if (self.exampleEvents.hasOwnProperty(eventType)) {
            console.log("Sent '" + eventType + "' event to " + Object.getOwnPropertyNames(self.connectionCache).length + " clients");
            Object.getOwnPropertyNames(this.connectionCache).forEach(function (connectionId) {
                self.connectionCache[connectionId].send({
                    event: eventType,
                    data: JSON.stringify(self.exampleEvents[eventType])
                });
            });
        }
    }

    sendEvents(millisecondsBetweenEvents) {
        let self = this;
        const eventTypes = Object.getOwnPropertyNames(self.exampleEvents);
        let interval = setInterval(function () {
            self.requestEvent(eventTypes[Math.floor(Math.random()*eventTypes.length)]);
        }, millisecondsBetweenEvents);
    }
}

module.exports = MarathonEventBusMockServer;
