var Client = require('ftp');
var fs = require('fs');


var srcFTP = {    

    host     : 'sweetftp.swisher.com',
    port     : 921,
    user     : 'ftpadmin',
    password : 'dsCpLKDV3e'

}

var c = new Client();
c.on('ready', function() {
  c.put('email.csv', '/vPower/Products.csv', function(err) {
    if (err) throw err;
    c.end();
  });
});
// connect to localhost:21 as anonymous
c.connect(srcFTP);

/*
Hostname: sweetftp.swisher.com
Port: 921
User ID: ftpadmin
Password: dsCpLKDV3e
*/
