import { setDataLocaleSorage } from "./storage.js";
import { AddloadingSpin , loadingSearch} from "./ui.js";
export async function fetchData(){
    const url = 'https://6af1ff2842c6561ced38e417.mockapi.io/channels';
    try{
         let response = await fetch(url);
         if(!response.ok) throw new Error(response.status);
         
       let data = await response.json()
       console.log(data)
       
       setDataLocaleSorage(data)
  
    }
    catch(error){
        console.log('erorak')
        console.error("error     :" ,error)
        AddloadingSpin()
        loadingSearch()
    }
   
    
}