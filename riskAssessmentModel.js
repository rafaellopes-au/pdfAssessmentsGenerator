exports.show = function(formData){
  //console.log(formData)
  //This data must came from the website form
  var jobDate= formData.date
  var jobTime= formData.time
  var clientName = formData.name

  var pilotInCommand = formData.pilot
  var shootAddress = ""

  //Risk #1
  var operationalRisk = [
    [formData.opRisk11,formData.opRisk12,formData.opRisk13],
    [formData.opRisk21,formData.opRisk22,formData.opRisk23],
    [formData.opRisk31,formData.opRisk32,formData.opRisk33],
    [formData.opRisk41,formData.opRisk42,formData.opRisk43],
    [formData.opRisk51,formData.opRisk52,formData.opRisk53]
  ]
  var controlMeasure = [
    [formData.cm11,formData.cm12,formData.cm13],
    [formData.cm21,formData.cm22,formData.cm23],
    [formData.cm31,formData.cm32,formData.cm33],
    [formData.cm41,formData.cm42,formData.cm43],
    [formData.cm51,formData.cm52,formData.cm53]
  ]


  var content = {
  // a string or { width: number, height: number }
  pageSize: 'A4',
  // by default we use portrait, you can change it to landscape if you wish
  pageOrientation: 'portrait',

  content: [
      {
      style: 'table',
      table: {
        widths: [90,'*'],
        body: [
          [{
            border: [false, false, false, false],
            image: 'layout-imgs/CASA-logo-stacked.png',
            width: 90
          }, {border: [false, false, false, false], text:`\nRISK ASSESSMENT - ${clientName} - ${jobDate}`, style:'header', alignment:'center' }]
        ]
      }
    },
      {
        text:`\n`,
        alignment: 'center',
        style: 'header'
      },
      {
      table: {
        widths: ['*'],
        body: [
          [{border: [true, true, true, false], text:'RISK CALCULATION SHEET', alignment: 'center', style: 'tableHeader'}]
        ]
      }
    },
    //RISK #1
      {
      style: 'table',
      table: {
        widths: [250, '*', '*', '*'],
        body: [
          [{text:'Undesired Outcome', style: 'tableHeader'}, {text:'Severity', style: 'tableHeader'}, {text:'Likelihood', style: 'tableHeader'}, {text:'Risk Factor', style: 'tableHeader'}],
          [{text:[ {text: `Risk #1`, bold:true,color:'red'},{text: `\n\n Operational Risk:`,bold: true},`\nSystem failure resulting in emergency landing \n- Engine \n- Mechanical \n- Data link \n- Eletrical\n\n`]}, {text: operationalRisk[0][0], bold:true,color:'red'},{text: operationalRisk[0][1], bold:true,color:'red'},{text: operationalRisk[0][2], bold:true,color:'red'}],
          [{text:[ {text: `Control Measure:`,bold: true},`\n\n Engine Failure and Data Link Loss:\nAircraft Failsafe’s ensure aircraft is recoverable in the event of single engine failure and data link loss.\n\nElectrical and Mechanical Failure:\nPROFLIGHT Maintenance program and pre and post flight checks before every flight ensure the integrity of the aircrafts electrical and mechanical systems.\n\nElectrical:\nFlight battery levels are checked before launch. The Aircraft displays a Low voltage LED warning if the flight battery is low during flight.`]}, [{text:`Final\n\n`},{text: controlMeasure[0][0], bold:true,color:'red'}],[{text:`Final\n\n`},{text: controlMeasure[0][1], bold:true,color:'red'}],[{text:`Final\n\n`},{text: controlMeasure[0][2], bold:true,color:'red'}]],
        ]
      }
    },
    //RISK #2
    {text: '\n\n'},
      {
      style: 'table',
      table: {
        widths: [250, '*', '*', '*'],
        body: [
          [{text:[ {text: `Risk #2`, bold:true,color:'red'},{text: `\n\n Operational Risk:`,bold: true},`\n\nAircraft flying outside of operational area \n\n`]}, {text: operationalRisk[1][0], bold:true,color:'red'},{text: operationalRisk[1][1], bold:true,color:'red'},{text: operationalRisk[1][2], bold:true,color:'red'}],
          [{text:[ {text: `Control Measure:`,bold: true},`\n\nFlight Limit set inside Flight Controller Software to ensure the aircraft is geo-fenced automatically.`]}, [{text:`Final\n\n`},{text: controlMeasure[1][0], bold:true,color:'red'}],[{text:`Final\n\n`},{text: controlMeasure[1][1], bold:true,color:'red'}],[{text:`Final\n\n`},{text: controlMeasure[1][2], bold:true,color:'red'}]],
        ]
      }
    },
    //RISK #3
    {text: '\n\n\n\n\n\n\n\n '},
      {
      style: 'table',
      table: {
        widths: [250, '*', '*', '*'],
        body: [
          [{text:[ {text: `Risk #3`, bold:true,color:'red'},{text: `\n\n Operational Risk:`,bold: true},`\n\nMid-Air Collision \n- Other aircraft\n- Birds\n-	Buildings\n- Power Lines\n- Vegetation\n\n`]}, {text: operationalRisk[2][0], bold:true,color:'red'},{text: operationalRisk[2][1], bold:true,color:'red'},{text: operationalRisk[2][2], bold:true,color:'red'}],
          [{text:[ {text: `Control Measure:`,bold: true},`\n\nOther Aircraft: \nPROFLIGHT will ensure that the RPA is not flown within 500 feet vertically and 1500 metres horizontally of any manned aircraft. If any lowflying manned aircraft are detected within the vicinity of the RPA Flight Zone, the Controller of the RPA will return the RPA safely and quickly to the landing location and not restart the operation until the manned aircraft is no longer within the vicinity of the RPA flight zone.
PROFLIGHT is to monitor the appropriate air traffic frequency for aircraft traffic 15 minutes before the first launch and then continuously for the duration of the operation of the RPA.\n\nBirds, Building, Power Lines, Vegetation: The Flight Controller is highly competent in avoiding hazards. Safety Crew will warn the Flight Controller of any hazards during flight.`]}, [{text:`Final\n\n`},{text: controlMeasure[2][0], bold:true,color:'red'}],[{text:`Final\n\n`},{text: controlMeasure[2][1], bold:true,color:'red'}],[{text:`Final\n\n`},{text: controlMeasure[2][2], bold:true,color:'red'}]],
        ]
      }
    },
    //RISK #4
    {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'},
      {
      style: 'table',
      table: {
        widths: [250, '*', '*', '*'],
        body: [
          [{text:[ {text: `Risk #4`, bold:true,color:'red'},{text: `\n\n Operational Risk:`,bold: true},`\n\nPeople who are not part of the operation who stray into the operational area. \n\n`]}, {text: operationalRisk[3][0], bold:true,color:'red'},{text: operationalRisk[3][1], bold:true,color:'red'},{text: operationalRisk[3][2], bold:true,color:'red'}],
          [{text:[ {text: `Control Measure:`,bold: true},`\n\nThe area of operation is to be clearly marked with warning signage. \n\nNo Flight will be conducted over a populous area or within 30 metres of a person not involved in the operation.`]}, [{text:`Final\n\n`},{text: controlMeasure[3][0], bold:true,color:'red'}],[{text:`Final\n\n`},{text: controlMeasure[3][1], bold:true,color:'red'}],[{text:`Final\n\n`},{text: controlMeasure[3][2], bold:true,color:'red'}]],
        ]
      }
    },
    //RISK #5
    {text: '\n '},
      {
      style: 'table',
      table: {
        widths: [250, '*', '*', '*'],
        body: [
          [{text:[ {text: `Risk #5`, bold:true,color:'red'},{text: `\n\n Operational Risk:`,bold: true},`\n\nPopulous Area in Proximity to Flight Area. There is a gathering of population at the site adjacent to the planned flight area of the RPA.\n\n`]}, {text: operationalRisk[4][0], bold:true,color:'red'},{text: operationalRisk[4][1], bold:true,color:'red'},{text: operationalRisk[4][2], bold:true,color:'red'}],
          [{text:[ {text: `Control Measure:`,bold: true},`\n\nThe RPA will not at any time fly over a populous area that contains a sufficient density of population.\n\nThe RPA will observe a safe distance from the area of population at all times. An exclusion zone will be in effect.\n\nThe Remote Pilot in charge will not permit the RPA to enter inside a 30 metres horizontal radius of the populous area at any altitude. Altitude outside of this radius is permitted up to 400 feet.\n\nIn the event of an emergency, the RP is to find a suitable place to land the aircraft free of population density. This may require the aircraft to be ditched into the water if a controlled landing cannot be affected.`]}, [{text:`Final\n\n`},{text: controlMeasure[4][0], bold:true,color:'red'}],[{text:`Final\n\n`},{text: controlMeasure[4][1], bold:true,color:'red'}],[{text:`Final\n\n`},{text: controlMeasure[4][2], bold:true,color:'red'}]],
        ]
      }
    },
  ],
  styles: {
    header: {
      fontSize: 16,
      bold: true
    },
    tableHeader: {
      bold: true
    }
  }


  }
  return content;
}
