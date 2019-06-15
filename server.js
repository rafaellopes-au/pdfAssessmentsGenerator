const formData = require("express-form-data");
const express = require('express')
const os = require("os");
const app = express()
const myParser = require("body-parser");
const dropbox = require("./dropbox.js")
var busboy = require('connect-busboy');
var path = require('path');
const port = 8080

// Define font files
var fonts = {
  Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
    bold: 'fonts/Roboto-Medium.ttf',
    italics: 'fonts/Roboto-Italic.ttf',
    bolditalics: 'fonts/Roboto-MediumItalic.ttf'
  }
};

var PdfPrinter = require('pdfmake'); // >> http://pdfmake.org/
var riskAssessmentModel = require('./riskAssessmentModel.js');
var jsaModel = require('./jsaModel.js');
var printer = new PdfPrinter(fonts);
var fs = require('fs');

app.use(myParser.urlencoded({extended : true}));

app.post("/RiskAssessment", function(request, response) {

      var docDefinition = riskAssessmentModel.show(request.body);
      var options = {}

      var pdfDoc = printer.createPdfKitDocument(docDefinition, options);

      var dateNow = Date.now();

      var filePath=`./risk-assessment/`
      var fileName=`RiskAssessment-${request.body.date}-${request.body.name.replace(/[^a-zA-Z0-9]/g, "")}-${request.body.pilot.replace(/[^a-zA-Z0-9]/g, "")}-${dateNow}.pdf`

      const createPDF = async () => {
      await pdfDoc.pipe(fs.createWriteStream(filePath + fileName))
      pdfDoc.end();

      return "done"
      }

      createPDF().then((result) => {
        setTimeout(function() {
        dropbox.upload("risk-assessment", fileName)},100)
      })



      response.send("RiskAssessment!");

});

app.use(busboy());
app.use(express.static(path.join(__dirname, 'public')));

app.post("/JSA", function(request, response) {

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

console.log("1")
        var docDefinition = jsaModel.show(data, listOfImages);
        var options = {}
console.log("2")
        var pdfDoc = printer.createPdfKitDocument(docDefinition, options);
console.log("3")
        var dateNow = Date.now();
console.log("4")
        var filePath=`./jsa/`
        var fileName=`JSA-${timestamp}.pdf`
console.log("5")
        const createPDF = async () => {
        await pdfDoc.pipe(fs.createWriteStream(filePath + fileName))
        pdfDoc.end();
console.log("6")
        return "done"
        }

        createPDF().then((result) => {
          setTimeout(function() {
          dropbox.upload("risk-assessment", fileName)},100)
        })


      }, 1000)


})
app.listen(port);
