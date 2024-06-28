// var element = document.querySelector('.map');
// var styles = window.getComputedStyle(element,':after')
// styles.style.color="red"
// let m =window.getComputedStyle(
//     document.querySelector('.map'), ':after'
// );
// m.style.color="red"
let map = document.querySelector('.map');
let discription = document.querySelector('.discription');

map.addEventListener("hover",()=>{
    // map.style.opacity="0"
    discription.style.opacity="0"
})

map.onHover=()=>{
    discription.style.opacity="0"
}