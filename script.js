const togglebtn = document.querySelector('.toggle-btn')
const togglebtnicon = document.querySelector('.toggle-btn i')
const dropdownmenu = document.querySelector('.dropdown')

togglebtn.onclick = function(){
    dropdownmenu.classList.toggle('open')
    const isopen = document.classList.contains ('open')

    togglebtnicon.classList = isopen
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}