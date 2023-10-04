const back2top = document.querySelector("#back2top");

back2top.addEventListener('click', (e)=>{
    e.preventDefault();
    window.scroll({top:0, left:0, behavior:"smooth"});
});




