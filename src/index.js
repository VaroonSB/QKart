const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");


let server;

//  Create Mongo connection and get the express app to listen on config.port
mongoose.connect(config.mongoose.url).then(() => {
    console.log("Connected to MongoDB");
});
  
// Start the Node server
app.listen(config.port, () => {
    console.log(`App is running on port ${config.port}`);
});
