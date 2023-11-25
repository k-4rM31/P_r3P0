import {
    fetchSerarchAPI
} from './fcnt.js'


const burger = document.querySelector('.burger')
const toggle_sidebar = document.querySelector('.toggle_slide_bar')
const static_sidebar = document.querySelector('.static_slide_bar')
const containt = document.querySelector('#containt')
const recupPropositioBar = document.querySelector('.propositionBar')
const recupIframe = document.querySelector('iframe')


burger.addEventListener('click', (e) => {
    toggle_sidebar.classList.toggle('show_toggleBar')
    if(toggle_sidebar.classList.contains('show_toggleBar')){
        containt.style.marginLeft = '250px'
        static_sidebar.style.display = 'none'
        recupIframe.style.width = '320px'
        recupIframe.style.height = '180px'

        console.log('appaer')
    }else{
        containt.style.marginLeft = '0px'
        static_sidebar.style.display = 'block'
        recupIframe.style.width = '400px'
        recupIframe.style.height = '250px'
        console.log('disappaer')
    }
})
recupPropositioBar.addEventListener(('scroll'),(e) => {
    console.log(e, [recupPropositioBar])
})

const search_cancel_btn = document.querySelector('.close')
const searchInput = document.querySelector('#search')
export const searchFrame = document.querySelector('.search_frame ul')


searchInput.addEventListener(('focus'), (e) => {
    e.currentTarget.parentNode.classList.add('active')
})
searchInput.addEventListener(('blur'), (e) => {
    e.currentTarget.parentNode.classList.remove('active')
})
searchInput.addEventListener(('input'), (e) => {
    const q = e.currentTarget.value
    const _q = q.trim()
    // console.log(q, q.length, _q, _q.length)
    if(_q.length > 0){
        fetchSerarchAPI(_q)

    }
    if(e.currentTarget.value.length > 0){
        search_cancel_btn.style.display = 'block'
    }else{
        search_cancel_btn.style.display = 'none'
    }
})
search_cancel_btn.addEventListener('click', (e) => {
    searchInput.value = ''
    if(searchInput.value.length === 0){
        search_cancel_btn.style.display = 'none'
    }
})


const navSetting = document.querySelector('.setting')
const nav_setting_dropdown = document.querySelector('.dropdown_content')
navSetting.addEventListener('click', (e) => {
    e.stopPropagation()
    nav_setting_dropdown.classList.toggle('show_sett_drop')
})
document.addEventListener('click', (e) => {
    if(nav_setting_dropdown.classList.contains('show_sett_drop')){
        nav_setting_dropdown.classList.remove('show_sett_drop')
    }
})


const static_sidebar_items = document.querySelectorAll('.static_slide_bar ul li')
const toggle_sidebar_items = document.querySelectorAll('.toggle_bar_btn')

static_sidebar_items.forEach(item => {
    item.addEventListener(('click'), (e) => {
        e.preventDefault()
        const itemsArray = Array.from(static_sidebar_items)
        for (const i of itemsArray) {
            i.classList.remove('static_bar_btn_active')
        }
        e.currentTarget.classList.add('static_bar_btn_active')
    })
})
toggle_sidebar_items.forEach(item => {
    item.addEventListener(('click'), (e) => {
        e.preventDefault()
        const itemsArray = Array.from(toggle_sidebar_items)
        for (const i of itemsArray) {
            i.classList.remove('toggle_bar_btn_active')
        }
        e.currentTarget.classList.add('toggle_bar_btn_active')
    })
})
// console.log(toggle_sidebar_items)

