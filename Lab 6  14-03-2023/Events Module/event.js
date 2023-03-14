// @ts-nocheck
const events = require("events")
const myEmitter = new events.EventEmitter()

myEmitter.on("TEST_EVENT", msg => {
    console.log(msg)
})

myEmitter.emit("TEST_EVENT","Event Triggered")