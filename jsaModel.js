exports.show = function(formData, listOfImages){
  console.log("here")
  console.log(formData.checkItens)

var varPowerline = ""
if (formData.checkItens2.includes('1') == true) { varPowerline = "Yes"  }

var varMaps = ""
if (formData.checkItens.includes('0') == true) { varMaps = "EFB"  }

var extraImgs = []
for (var i = 0; i < 5; i++) {
  if (i >= listOfImages.length) {
    //blank
    extraImgs.push({src: 'layout-imgs/check-false.png', width:0 })
  } else {
    extraImgs.push({src: `img/${listOfImages[i]}`, width:320 })
  }
}

var content = {
    // a string or { width: number, height: number }
    pageSize: 'A4',
    // by default we use portrait, you can change it to landscape if you wish
    pageOrientation: 'landscape',
    pageMargins: [ 40, 50, 40, 10 ],
	content: [
    [{
            image: 'layout-imgs/proflight-logo.png',
            width: 100,
            border: [false, false, false, false]
          }],
    {
			text: 'Job Safety Assessment',
			style: 'header',
      margin: [0, 5, 0, 5]
		},
		{
			style: 'table',
			table: {
			    widths: [400,"*"],
				body: [
					[
					 //Line: 1
					   { table: {
            			    widths: [150,"*"],
            				body: [
            					[{text: 'Company', colSpan: 0, alignment: 'left', border: [false, false, true, false]},
            				    {text: formData.companyName, alignment: 'left', border: [false, false, false, false] }]
            				],
            			} , margin: [-3, -3, -3, -3] },
				    {text: `Date ${formData.dateOfFlight}`, alignment: 'left'}],

				    //Line: 2
				    [{ table: {
            			    widths: [150,"*"],
            				body: [
            					[{text: `Task: ${formData.task}`, colSpan: 0, alignment: 'left', border: [false, false, true, false]},
            				    {text: `Location: ${formData.address}`, alignment: 'left', border: [false, false, false, false] }]
            				],
            			} , margin: [-3, -3, -3, -3], alignment: 'left' } ,


				    {text: 'Check the following and address as needed', alignment: 'left'}],
				    //Line: 3
				     [{ table: {
            			    widths: ["*"],
            				body: [
            					[{text: 'Sketch of area (if necessary)', colSpan: 0, alignment: 'left', border: [false, false, false, false]}],
            					[{
                        			image: `img/${listOfImages[0]}`,
                        			width: 395,
                        		    border: [false, false, false, false]
                        		}]
            				],
            			} , margin: [-3, -3, -3, -3], alignment: 'left' }
				     ,


				    { table: {
            			    widths: [230,"*"],
            				body: [
            					[{text: 'Maps and charts available and checked', colSpan: 0, alignment: 'left', border: [false, false, true, true]},
            				    {text: varMaps, alignment: 'left', border: [false, false, false, true] }],

            				    [{text: `Weather, within limits for RPA and operation`, colSpan: 0, alignment: 'left', border: [false, false, true, true]},
                        {image:  `layout-imgs/check-${formData.checkItens.includes('1')}.png`, width: 8, border: [false, false, false, true]}],

            				    [{text: 'Airspace classification and requirements', colSpan: 0, alignment: 'left', border: [false, false, true, true]},
            				    {image: `layout-imgs/check-${formData.checkItens.includes('2')}.png`, width: 8, border: [false, false, false, true]}],


            				    [{text: 'NOTAMs', colSpan: 0, alignment: 'left', border: [false, false, true, true]},
            				    {image: `layout-imgs/check-${formData.checkItens.includes('3')}.png`, width: 8, border: [false, false, false, true]}],

            				    [{text: 'Possibility of public moving into area', colSpan: 0, alignment: 'left', border: [false, false, true, true]},
            				    {image: `layout-imgs/check-${formData.checkItens.includes('4')}.png`, width: 8, border: [false, false, false, true]}],

            				    [{text: 'Footpath/right of way', colSpan: 0, alignment: 'left', border: [false, false, true, true]},
            				    {image: `layout-imgs/check-${formData.checkItens.includes('5')}.png`, width: 8, border: [false, false, false, true]}],

            				    [{text: 'Landing area including alternate', colSpan: 0, alignment: 'left', border: [false, false, true, true]},
            				    {image: `layout-imgs/check-${formData.checkItens.includes('6')}.png`, width: 8, border: [false, false, false, true]}],

            				    [{text: 'Ability to maintain 30M of public', colSpan: 0, alignment: 'left', border: [false, false, true, true]},
            				    {image: `layout-imgs/check-${formData.checkItens.includes('7')}.png`, width: 8, border: [false, false, false, true]}],

            				    [{text: 'Obstructions (buildings, trees)\n(‘Return to Home’ height setting)', colSpan: 0, alignment: 'left', border: [false, false, true, true]},
            				    {image: `layout-imgs/check-${formData.checkItens2.includes('0')}.png`, width: 8, border: [false, false, false, true]}],

            				    [{text: 'Possible interference (Powerlines/antennas)', colSpan: 0, alignment: 'left', border: [false, false, true, true]},
            				    {text: varPowerline, alignment: 'left', border: [false, false, false, true] }],

            				    [{text: 'Ability to maintain visual line of sight', colSpan: 0, alignment: 'left', border: [false, false, true, true]},
            				    {image: `layout-imgs/check-${formData.checkItens2.includes('2')}.png`, width: 8, border: [false, false, false, true]}],

            				    [{text: 'Remote Pilot’s ability matches location/task', colSpan: 0, alignment: 'left', border: [false, false, true, true]},
            				    {image: `layout-imgs/check-${formData.checkItens2.includes('3')}.png`, width: 8, border: [false, false, false, true]}],

            				    [{text: 'Permission of any landowners', colSpan: 0, alignment: 'left', border: [false, false, true, true]},
            				    {image: `layout-imgs/check-${formData.checkItens2.includes('4')}.png`, width: 8, border: [false, false, false, true]}],

            				    [{text: 'Privacy', colSpan: 0, alignment: 'left', border: [false, false, true, true]},
            				    {image: `layout-imgs/check-${formData.checkItens2.includes('5')}.png`, width: 8, border: [false, false, false, true]}],

            				    [{text: 'Local restrictions/by laws', colSpan: 0, alignment: 'left', border: [false, false, true, true]},
            				    {image: `layout-imgs/check-${formData.checkItens2.includes('6')}.png`, width: 8, border: [false, false, false, true]}],

            				    [{text: 'Signage placement', colSpan: 0, alignment: 'left', border: [false, false, true, true]},
            				    {image: `layout-imgs/check-${formData.checkItens2.includes('7')}.png`, width: 8, border: [false, false, false, true]}],

            				    [{text: 'Jobs specific threat and error management', colSpan: 0, alignment: 'left', border: [false, false, true, false]},
            				    {image: `layout-imgs/check-${formData.checkItens2.includes('8')}.png`, width: 8, border: [false, false, false, false]}]
            				],
            			} , margin: [-3, -3, -3, -3] }],

            		//Line: 4
				    [{ table: {
            			    widths: [40,"*",80,"*"],
            				body: [
            					[{text: 'RP', colSpan: 0, alignment: 'left', border: [false, false, true, false]},
            					{text: formData.pilot, colSpan: 0, alignment: 'left', border: [false, false, true, false]},
            					{text: 'Signature', colSpan: 0, alignment: 'left', border: [false, false, true, false]},
            				    {text: formData.pilot, alignment: 'left', border: [false, false, false, false] }]
            				],
            			} , margin: [-3, -3, -3, -3], alignment: 'left' } ,


				    {text: '', alignment: 'left'}],

				    //Line: 5
				    [{ table: {
            			    widths: [40,"*"],
            				body: [
            					[{text: 'Crew', colSpan: 0, alignment: 'left', border: [false, false, true, false]},
            					{text: formData.crew, colSpan: 0, alignment: 'left', border: [false, false, false, false]}
            					]
            				],
            			} , margin: [-3, -3, -3, -3], alignment: 'left' } ,


				    {text: '', alignment: 'left'}],

				    //Line: 6
				    [ {colSpan: 2, text: `Comments: ${formData.comments}`, alignment: 'left'}]

				]
			}
		},
    {
    table: {
      body: [
        [{image: extraImgs[1].src, width: extraImgs[1].width, border: [false, false, false, false]},
         {image: extraImgs[2].src, width: extraImgs[2].width, border: [false, false, false, false]}],
         [{image: extraImgs[3].src, width: extraImgs[3].width, border: [false, false, false, false]},
         {image: extraImgs[4].src, width: extraImgs[4].width, border: [false, false, false, false]}],
      ]
    }
  }




	],
	styles: {
		table: {
			fontSize: 11,
		},
		tableHeader: {
			bold: true,
			color: 'black'
		},
    header: {
      fontSize:13,
      bold: true,
      color:'blue'
    }
	},
	defaultStyle: {
		// alignment: 'justify'
	}

}
return content;
}
