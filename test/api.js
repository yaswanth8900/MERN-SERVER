// async function fetchData(){
//     try {
//         const response=await fetch('http://localhost:3001/users/getusers')
//         if(!response){
//             throw new Error("Failed to fetch data")
//         }
//         const data=await response.json();
//         return data;
//     } catch (error) {
//         throw error;
//     }
// }
// module.exports=fetchData;

async function fetchData(){
    return{getAllUsers:[{
            "id": "1",
            "name": "abc",
            "email": "abc@gmail.com",
            "password": "123"
        }]}
}
module.exports=fetchData;