const {getData,getRaw}=require('./utils');

function processRaw(){
    return  getRaw();
}

function processData(){
    return `Processed ${getData}`;
}
module.exports={processData,processRaw};