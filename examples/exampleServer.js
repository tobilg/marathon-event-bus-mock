"use strict";

// Use MarathonEventBusMockServer
const MarathonEventBusMockServer = require("../lib/MarathonEventBusMockServer");

// Instantiate MarathonEventBusMockServer on port 8080
const server = new MarathonEventBusMockServer(8080);

// Send random events every 2000ms
server.sendEvents(2000);
