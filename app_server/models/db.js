require("./locations");
var mongoose = require("mongoose");
var gracefulShutdown;
var dbURI = "mongodb://localhost.Loc8r";
if (process.env.NODE_ENV === "production") {
  process.env.MONGOLAB_URI;
}

//Depreciation Warnings -- UnifiedTopology
mongoose.set("useUnifiedTopology", true);

//Connection and Responses && Depreciation warning URL Parser
mongoose.connect(dbURI, { useNewUrlParser: true });

mongoose.connection.on("connected", function () {
  console.log("Mongoose connected to " + dbURI);
});

mongoose.connection.on("error", function (err) {
  console.log("Mongoose connection error: " + err);
});

mongoose.connection.on("disconnected", function () {
  console.log("Mongoose disconnected");
});

//Shutdown Function
gracefulShutdown = function (msg, callback) {
  mongoose.connection.close(function () {
    console.log("Mongoose disconnected through " + msg);
    callback();
  });
};

//Disconnection Listeners
process.once("SIGUSR2", function () {
  gracefulShutdown("nodemon restart", function () {
    process.kill(process.pid, "SIGUSR2");
  });
});

process.on("SIGINT", function () {
  gracefulShutdown("app termination", function () {
    process.exit(0);
  });
});

process.on("SIGTERM", function () {
  gracefulShutdown("Heroku app shutdown", function () {
    process.exit(0);
  });
});
