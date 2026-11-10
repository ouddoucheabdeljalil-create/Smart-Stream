export function setDataLocaleSorage(data){
    localStorage.setItem('channels' , JSON.stringify(data))
}
export function getDataLocaleSorage(){
    return JSON.parse(localStorage.getItem('channels'))
}