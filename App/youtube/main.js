const burger = document.querySelector('.burger')
const toggle_sidebar = document.querySelector('.toggle_slide_bar')
const static_sidebar = document.querySelector('.static_slide_bar')
const containt = document.querySelector('#containt')
burger.addEventListener('click', (e) => {
    toggle_sidebar.classList.toggle('show_toggleBar')
    if(toggle_sidebar.classList.contains('show_toggleBar')){
        // toggle_sidebar.style.width = '250px'
        containt.style.marginLeft = '250px'
        static_sidebar.style.display = 'none'
        console.log('appaer')
    }else{
        containt.style.marginLeft = '0px'
        static_sidebar.style.display = 'block'
        console.log('disappaer')
    }
})