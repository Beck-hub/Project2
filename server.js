// server.js
// where your node app starts
// I can get:
  // the IP address, 
  // preferred languages (from header Accept-Language)  
  // system infos (from header User-Agent) for my device.

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/whoami", (req, res, next) => {
    // use request headers to get the majority of this information
  // A Request Header: 
  // is an HTTP header that can be used in an HTTP request, and 
  // that doesn't relate to the content of the message

  // HTTP headers let the client and the server pass additional 
  // information with an HTTP request or response. An HTTP header 
  // consists of its case-insensitive name followed by a colon (:), 
  // then by its value. Whitespace before the value is ignored.
  const ipAddress = req.ip
  const language = req.headers["accept-language"]
  const software = req.headers["user-agent"]
  console.log(ipAddress)
  console.log(language)
  res.json({
    ipaddress: ipAddress,
    language: language,
    software: software
  
  });
});




// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
