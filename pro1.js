$(document).ready(function(){
    $('#menu').click(function(){
        $('#nav-menu').slideToggle('slow')
    })


})
let x = window.matchMedia("(max-width:890px)")

function my(){
    if(x.matches) {
        document.getElementById('#nav-menu').style.display = 'block'
        document.getElementById('#nav-menu').style.backgroundColor = 'red'
    }
    else{
        document.getElementById('#nav-menu').style.display = 'none'
        document.getElementById('#nav-menu').style.backgroundColor = 'white'
    }
}
my();