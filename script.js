
document.querySelector('#menu').addEventListener('click', ()=>{
    document.querySelector('#menu-burger').style.left=`0px`;
})
document.querySelector('#croix').addEventListener('click', ()=>{
    document.querySelector('#menu-burger').style.left=``;
})


document.querySelector('#watch').addEventListener('click', ()=>{
    document.querySelector('#video').style.display='flex'
})

document.querySelector('#backteaser').addEventListener('click', ()=>{
    document.querySelector('#video').style.display='none'
    document.querySelector('#video').children[1].pause();
    document.querySelector('#video').children[1].currentTime = 0;
})