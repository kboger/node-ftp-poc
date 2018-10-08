var multer = require('multer')
var sftpStorage = require('multer-sftp')
/*
Hostname: sweetftp.swisher.com
Port: 921
User ID: ftpadmin
Password: dsCpLKDV3e
*/
 
exports.newFileUpload =  function(req , res , next){

    // sftp settings     
     var storage = sftpStorage({
       sftp: {
         host: 'sweetftp.swisher.com',
         port: 921,
         username: 'ftpadmin',
         password: 'dsCpLKDV3e'
 
       },
       destination: function (req, file, cb) {
         cb(null, '/vPower/Products') // designation folder in host
       },
       filename: function (req, file, cb) {
         // file name settings
         cb(null, file.fieldname + '-' + Date.now())
       }
     })
 
     var upload = multer({ storage: storage }).array('file');
 
     upload(req,res,function(err){
         logger.debug(JSON.stringify(req.body));
               logger.debug(JSON.stringify(req.files));
           if(err){
                logger.debug("Error Occured", JSON.stringify(err));
                res.json({error_code:1,err_desc:err});
           } else{
                logger.debug("Files uploaded successfully");
               res.json({error_code:0,err_desc:null});
           }
       });
 }