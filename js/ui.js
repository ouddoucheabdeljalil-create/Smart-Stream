import { getDataLocaleSorage } from "./storage.js";

const channelsSpace = document.getElementById('channel-space')
const spaceCategory = document.getElementById('space-catregory');
const btnRemove = document.getElementById('btn-remove')
const catregoryPlace = document.getElementById('category-place')
const search = document.querySelector('#search-search')
// const showPlace = document.getElementById('show-place')
const detailsPlace = document.getElementById('detais-space')
const header = document.querySelector('header')
let data = getDataLocaleSorage()

export function showChannels() {




    data.forEach(element => {
        const list = document.createElement('li')
        list.setAttribute('id', `list${element.id}`)
        list.dataset.id= element.id
        list.className = `list flex flex-row justify-between px-8 text-2xl text-amber-50 border-amber-50 border text-center`

        list.innerHTML = `<span>${element.channelNumber}</span><span>${element.name}</span>`
        channelsSpace.appendChild(list)

    });
    search.addEventListener('input', () => {
        channelsSpace.innerHTML = ''
        let x = search.value.toLowerCase()


        const filtered = data.filter(p => p.name.toLowerCase().includes(x) || p.channelNumber.toLowerCase().includes(x));

        console.log(filtered)
        filtered.forEach(element => {
            const list = document.createElement('li')
            list.dataset.id= element.id
            list.className = `list flex flex-row justify-between px-8 text-2xl text-amber-50 border-amber-50 border text-center`

            list.innerHTML = `<span>${element.channelNumber}</span><span>${element.name}</span>`
            channelsSpace.appendChild(list)

        });

    })
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
        btnRemove.classList.toggle('bg-[url(/assest/right_panel.svg)]')
        btnRemove.classList.toggle('bg-[url(/assest/left_panel.svg)]')

    })
    channelsSpace.addEventListener('click', () => {
        spaceCategory.classList.add('hidden')
        btnRemove.classList.add('bg-[url(/assest/right_panel.svg)]')
        btnRemove.classList.remove('bg-[url(/assest/left_panel.svg)]')

    })

}
export function filterByCategory() {
    spaceCategory.addEventListener('click', (e) => {



        let id = e.target.id
        console.log(id)
        console.log(e.target)

        if (e.target.id === 'tout') {
            data.forEach(element => {
                
                const list = document.createElement('li')
                list.dataset.id= element.id
                list.className = `list flex flex-row justify-between px-8 text-2xl text-amber-50 border-amber-50 border text-center`
                list.innerHTML = ` <span>${element.channelNumber}</span><span>${element.name}</span>`
                channelsSpace.appendChild(list)
                 changeBgChannel()
            });
        }
        else {
            let channels = data.filter(e => e.category == id)

            
            channelsSpace.innerHTML = ''
            channels.forEach(element => {
                const list = document.createElement('li')
                list.dataset.id= element.id
                list.className = `list flex flex-row justify-between px-8 text-2xl text-amber-50 border-amber-50 border text-center`
                list.innerHTML = ` <span>${element.channelNumber}</span><span>${element.name}</span>`
                channelsSpace.appendChild(list)
                changeBgChannel()
            });

        }

    })
}

export function AddloadingSpin() {
    const spin = document.getElementById('spin')
    spin.classList.add('loader')
}
export function loadingSearch() {
    const loadingSearch = document.getElementById('loading-search')
    loadingSearch.classList.add('loader1')
    // spaceCategory.innerHTML = ''
    // channelsSpace.innerHTML = ''
    localStorage.clear()

}
export function changeBgChannel() {
    const channels = document.querySelectorAll('.list')
    // bg.addEventListener('click' , (e) => {
    //     console.log(e.target)
    // })

    channels.forEach(channel => {
        channel.addEventListener('click', (e) => {
           
            channels.forEach(chann => {
                chann.classList.remove('bg-red-600')
            })
            channel.classList.add('bg-red-600')
        })
    })
}

export function showDetailsChannel(){
    
    channelsSpace.addEventListener('click' , (e) =>{
        let channelsClass = e.target.closest('.list')
        data.forEach(element => {
            if(element.id === channelsClass.dataset.id){
                detailsPlace.innerHTML = ` <div class="flex items-center justify-center rounded-2xl">
                <img src="${element.logo}" alt="" class="w-40  h-40 rounded-2xl max-sm:w-20 max-sm:h-20">
            </div>
            <div class="flex flex-col justify-around ">
                <div class="flex flex-col gap-8 max-sm:gap-4">

                    <h2 class="text-2xl max-sm:text-xl">${element.name}</h2>


                    <div class=" font-roboto font-normal text-xl max-sm:text-lg">
                        <p>${element.epg.currentProgram}</p>

                    </div>
                </div>
                <div class="font-roboto font-normal text-xl flex gap-8 max-sm:text-lg">
                    <p>start : ${element.epg.startTime}</p>
                    <p>end : ${element.epg.endTime}</p>
                </div>
            </div>
            <div class="flex items-center max-sm:w-30">
                <div class="flex flex-col justify-center gap-2 h-20 pl-15 border-l border-l-white max-sm:pl-5">
                    <p class="border bg-amber-50 rounded-xl p-1 text-[#080808] text-center italic">FHD</p>
                    <P class="border border-[#FF1010] rounded-xl p-1 text-[#FF1010]   ">ch. ${element.channelNumber}</P>
                </div>
            </div>`

            }
        })
    })

}
export function playStream(){
    const video = document.getElementById('videoPlayer')
    channelsSpace.addEventListener('click' , (e) =>{
    let channelsClass = e.target.closest('.list')
    let url = data.find(element => element.id === channelsClass.dataset.id)
    

    console.log(url)
    if(Hls.isSupported()){
        const hls = new Hls()
        hls.loadSource(url.streamUrl)
        hls.attachMedia(video)
    }
})
}
