import { getDataLocaleSorage } from "./storage.js";
const channelsSpace = document.getElementById('channel-space')
const spaceCategory = document.getElementById('space-catregory');
const btnRemove = document.getElementById('btn-remove')
const catregoryPlace = document.getElementById('category-place')

let data = getDataLocaleSorage()

export function showChannels() {
    data.forEach(element => {
        const list = document.createElement('li')
        list.innerHTML = ` <li class="flex flex-row justify-between px-8 text-2xl text-amber-50 border-amber-50 border text-center"><span>${element.channelNumber}</span><span>${element.name}</span></li>`
        channelsSpace.appendChild(list)

    });
}
export function showCategory() {
    data.forEach(e => {

        const list = document.querySelector(`#${e.category}`)


        if (!list) {
            const list = document.createElement('li')
            list.setAttribute('id', `${e.category}`)
            list.className = "text-2xl text-amber-50 border-amber-50 border text-center"
            list.dataset.id = e.id
            list.innerHTML = `${e.category}`
            catregoryPlace.appendChild(list)
        }
    })
}
export function removeHidden() {


    btnRemove.addEventListener('click', () => {

        spaceCategory.classList.toggle('hidden')

    })
    channelsSpace.addEventListener('click', () => {
        spaceCategory.classList.add('hidden')
    })

}
export function filterByCategory() {
    spaceCategory.addEventListener('click', (e) => {
        // if(e.target.) 
        let id = e.target.id
        console.log('rr' , id)
        if (e.target.id === 'tout') {
            data.forEach(element => {
                const list = document.createElement('li')
                list.innerHTML = ` <li class="flex flex-row justify-between px-8 text-2xl text-amber-50 border-amber-50 border text-center"><span>${element.channelNumber}</span><span>${element.name}</span></li>`
                channelsSpace.appendChild(list)

            });
        }
        else {
            let channels = data.filter(e => e.category == id)
            
            console.log(test)
            channelsSpace.innerHTML = ''
            channels.forEach(element => {
                const list = document.createElement('li')
                list.innerHTML = ` <li class="flex flex-row justify-between px-8 text-2xl text-amber-50 border-amber-50 border text-center"><span>${element.channelNumber}</span><span>${element.name}</span></li>`
                channelsSpace.appendChild(list)

            });

        }

    })
}