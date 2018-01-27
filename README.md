# marathon-event-bus-mock

[![Package version](https://img.shields.io/npm/v/marathon-event-bus-mock.svg)](https://www.npmjs.com/package/marathon-event-bus-mock) [![Package downloads](https://img.shields.io/npm/dt/marathon-event-bus-mock.svg)](https://www.npmjs.com/package/marathon-event-bus-mock) [![Package license](https://img.shields.io/npm/l/marathon-event-bus-mock.svg)](https://www.npmjs.com/package/marathon-event-bus-mock) [![Build Status](https://travis-ci.org/tobilg/marathon-event-bus-mock.svg?branch=master)](https://travis-ci.org/tobilg/marathon-event-bus-mock)

A server to mock Marathon's (Server Sent) Event Bus.

## Installation

Install as a dependency like this:

```bash
npm install marathon-event-bus-mock --save
```

## Usage

To launch a `MarathonEventBusMockServer` on port `8080`, you can do the following:

```javascript
"use strict";

// Use MarathonEventBusMockServer
const MarathonEventBusMockServer = require("marathon-event-bus-mock");

// Instantiate MarathonEventBusMockServer on port 8080
const server = new MarathonEventBusMockServer(8080);

// Send random events every 2000ms
server.sendEvents(2000);
```

By default, it will publish Marathon >=v1.4 events. As those differ from former versions, you can use

```javascript
const server = new MarathonEventBusMockServer(8080, true);
```

to enable the legacy events.