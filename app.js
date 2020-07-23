const colors = ["green","red","rgba(133,122,200)","#f15025"];
let btn = document.getElementById('btn');
// console.log(btn)
let color = document.querySelector('.color')
// console.log(color)

btn.addEventListener('click', function(){

    // console.log(document.body)
    //get random between 0-3 //colors(3)
    const randomNumber =getRandomNumber();
    //console.log(randomNumber)
    // console.log(colors[randomNumber])
    document.body.style.backgroundColor = colors[randomNumber];
    // color.innerHTML = colors[randomNumber]
    color.textContent = colors[randomNumber];
    
})

function getRandomNumber (){
    // let a = Math.random()
    // let b = colors.length
    // console.log(a)
    // console.log(b)
    // console.log(a*b)
    return Math.floor(Math.random()*colors.length);
}