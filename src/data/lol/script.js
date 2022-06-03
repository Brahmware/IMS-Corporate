const sourceData1 = require('./countries.geology.json').features
const sourceData2 = require('./countries.geology1.json')


const fs = require('fs');

sourceData1.forEach(element => {
    /* console.log(element.properties.ISO_A3) */
});

sourceData2.features.forEach((feature, index) => {
    const found_geometry = sourceData1.find(element => element.properties.ISO_A3 === feature.id)
    if(found_geometry) {

        const gmtry = sourceData1.find(element => element.properties.ISO_A3 === feature.id).geometry
        sourceData2.features[index].geometry = gmtry
    }
})

let newFile = JSON.stringify(sourceData2);
fs.writeFileSync('continents-2.json', newFile);