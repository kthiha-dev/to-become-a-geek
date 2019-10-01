'use strict';
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

    const server = http.createServer(function(req, res) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        get();
        res.end('Hello World\n');
    });

    const get = () => {
        var massArray = ["Apple","Apple","Orange","Bananna","Bananna","StarFruit"],
        duplicateList = [],
        uniqueList = [];
        // Loop through array values
        for(var value of massArray){
            if(uniqueList.includes(value)){
                if(duplicateList.indexOf(value) == -1) duplicateList.push(value)
              } else {
                if(uniqueList.indexOf(value) == -1) uniqueList.push(value)
            }
        }
        console.log(duplicateList);
        console.log(uniqueList);
    }

server.listen(port, hostname, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');
});
