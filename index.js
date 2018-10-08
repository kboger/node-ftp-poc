var sftp = require('./multer-sftp')


let fileLocation = '/Users/kevinboger/swisher-services/si-ftp-service/files/email.csv';

let ftpd = sftp.newFileUpload(fileLocation);

console.log(ftpd);