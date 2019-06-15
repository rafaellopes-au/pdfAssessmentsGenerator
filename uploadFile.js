var express = require('express');
var busboy = require('connect-busboy');
var path = require('path');
var fs = require('fs-extra');

var app = express();

app.use(busboy());
app.use(express.static(path.join(__dirname, 'public')));


app.route('/JSA')
    .post(function (request, response, next) {

        timestamp =  Date.now();

        var fstream;
        var data = {};
        var listOfImages = [];

        request.pipe(request.busboy);

        function ondata(name, val){
            if (Array.isArray(data[name])) {
              data[name].push(val);
            } else if (data[name]) {
              data[name] = [data[name], val];
            } else {
              data[name] = val;
            }
        }

        request.busboy.on('field', function(name, val){
          ondata(name, val);
        });



          var i = 0
          var listOfImages = [];
          request.busboy.on('file', function (fieldname, file, filename) {

              console.log("Uploading: " + filename);
              var fileExtension = filename.split(".")[1]
              var newFilename = `image-${timestamp}-${++i}.${fileExtension}`
              //Path where image will be uploaded
              fstream = fs.createWriteStream(__dirname + '/img/'  + newFilename);
              file.pipe(fstream);
              fstream.on('close', function () {
                  //console.log("Upload Finished of " + newFilename);
                  listOfImages.push(newFilename);

              })
          })


            setTimeout(function() {
              console.log("last one")
              console.log(data)
              console.log(listOfImages)
            }, 1000)






    });

var server = app.listen(8080, function() {
    console.log('Listening on port %d', server.address().port);
});
