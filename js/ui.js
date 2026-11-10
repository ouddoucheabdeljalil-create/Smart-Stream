import { getDataLocaleSorage } from "./storage.js";

export function showChannels(){
    const channelsSpace = document.getElementById('channel-space')
    let data = getDataLocaleSorage()
    data.forEach(element => {
        const list = document.createElement('li')
        list.innerHTML = ` <li class="flex flex-row justify-between px-8 text-2xl text-amber-50 border-amber-50 border text-center"><span>${element.channelNumber}</span><span>${element.name}</span></li>`
        channelsSpace.appendChild(list)
    });
}
export function showCategory(){

}
export function removeHidden(){
    const spaceCategory = document.getElementById('space-catregory');
    const btnRemove = document.getElementById('btn-remove')
    btnRemove.addEventListener('click' , (e) => {
         console.log('rr')
        spaceCategory.classList.toggle('hidden')
        console.log('rr')
    })
    
}