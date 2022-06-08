const sourceData = require('./countries.geology.json').features
const sourceData1 = require('./countries.geology1.json')


const fs = require('fs');

sourceData.forEach(element => {
    /* console.log(element.properties.ISO_A3) */
});

sourceData1.features.forEach((feature, index) => {
    const found_geometry = sourceData.find(element => element.properties.ISO_A3 === feature.id)
    if(found_geometry) {

        const gmtry = sourceData.find(element => element.properties.ISO_A3 === feature.id).geometry
        sourceData1.features[index].geometry = gmtry
    }
})

let newFile = JSON.stringify(sourceData1);
fs.writeFileSync('continents-2.json', newFile);