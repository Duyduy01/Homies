$(document).ready(function(){
    $('.sub-menu').parent('li').addClass('has-child');

});
//$(document).ready(function(){
    //$('.sub-menu1').parent('li').addClass('has-child1');

//});
//$(document).ready(function(){
   // $('.sub-menu2').parent('li').addClass('has-child2');

//});
//let mainmenu = document.getElementById('mainmenu')
//document.addEventListener('scroll', (even) => {
    //if(window.scrollY > 500){
       // main-menu.classList.add('tofixed')
    //}else{
       // main-menu.classList.remove('tofixed')
    //}
//})
let items = document.querySelectorAll('.item');
document.addEventListener('scroll', (event) => {
    items.forEach(item => {
        if(item.offsetTop - window.scrollY < 300){
            item.classList.add('active');
        }
        
    })
})
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.anh');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.anh');
    document.getElementById('slide').prepend(lists[lists.length -1]);
}