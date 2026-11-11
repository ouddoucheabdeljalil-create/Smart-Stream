import { getDataLocaleSorage } from "./storage.js";

const channelsSpace = document.getElementById('channel-space')
const spaceCategory = document.getElementById('space-catregory');
const btnRemove = document.getElementById('btn-remove')
const catregoryPlace = document.getElementById('category-place')
const search = document.getElementById('search-search')

let data = getDataLocaleSorage()

export function showChannels() {




    data.forEach(element => {
        const list = document.createElement('li')
        list.setAttribute('id', `list${element.id}`)
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
                list.className = `list flex flex-row justify-between px-8 text-2xl text-amber-50 border-amber-50 border text-center`
                list.innerHTML = ` <span>${element.channelNumber}</span><span>${element.name}</span>`
                channelsSpace.appendChild(list)
                 changeBgChannel()
            });
        }
        else {
            let channels = data.filter(e => e.category == id)

            console.log(test)
            channelsSpace.innerHTML = ''
            channels.forEach(element => {
                const list = document.createElement('li')
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
            console.log(e.target)
            channels.forEach(chann => {
                chann.classList.remove('bg-red-600')
            })
            channel.classList.add('bg-red-600')
        })
    })
}
