require('dotenv').config() //process.env.
var fs = require('fs');
var fetch = require('isomorphic-fetch'); // or another library of choice.
var Dropbox = require('dropbox').Dropbox;
var dbx = new Dropbox({ accessToken: process.env.dropboxToken, fetch: fetch });

exports.upload = function(filepath, fileName){

    fs.readFile("./" + filepath+"/"+fileName, function(err, contents) {
    var options = {
        path: "/"+fileName,
        contents: contents
    };
    dbx.filesUpload(options)
        .then(function(response) {
          //  console.log(response);
        })
        .catch(function(err) {
            console.log(err);
        });
});
}
