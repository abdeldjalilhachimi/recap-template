/**
 * Display Menu 
 * 
 */

const burger = document.getElementById('burger'); 
console.log(burger)
burger.addEventListener('click', function () {
        const list = document.getElementById('list')

        if(list.style.display ===  'block'){
            list.style.display =  'none'
        } else {
            list.style.display =  'block'
        }
})