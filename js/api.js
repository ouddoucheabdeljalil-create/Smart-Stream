import { setDataLocaleSorage } from "./storage.js";
export async function fetchData(){
    const url = 'https://6af1ff2842c6561ced38e417.mockapi.io/channels';
    try{
         let response = await fetch (url); 
   
       let data = await response.json()
       setDataLocaleSorage(data)
  
    }
    catch{
        console.log('erorak')
    }
   
    
}