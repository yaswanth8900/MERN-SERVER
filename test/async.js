function fetchData(callback){
    setTimeout(() => {
        callback("Admin")
    },500)
}
function MyData(callback){
    setTimeout(() => {
        callback({id:10011});
    },1000)
}
module.exports={fetchData,MyData};