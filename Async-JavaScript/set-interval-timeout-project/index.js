//generate random colors

const randomcolor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0;i<6;i++){
        color+= hex[Math.floor(Math.random() * 16)]
    }
    return color
};
let intervalId
const startchange = function(){
    setInterval(changebg,1000)
    
    function changebg (){
        document.body.style.backgroundColor = randomcolor();
    }
}

const stopchange = function(){
    clearInterval(intervalId)
}

document.querySelector('#start').addEventListener('click' ,startchange())

document.querySelector('#stop').addEventListener('click' ,stopchange())