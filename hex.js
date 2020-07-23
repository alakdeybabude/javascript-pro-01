const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let btn = document.getElementById('btn');
let color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let hexColor = "#";
    
    for(let i = 0; i<6; i++){
        hexColor = hexColor+hex[getRandomNumber()]
        // console.log(hexColor)

        // let a = hex[getRandomNumber()]
        // console.log(a)

        // hexColor = hexColor + a
        // console.log(hexColor)


    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function getRandomNumber (){
//     let a = Math.random()
//     let b = hex.length
//     console.log(a)
//     console.log(b)
//     console.log(a*b)
//     console.log(Math.floor(a*b))
//    console.log( Math.floor(Math.random()*hex.length)) 
    return Math.floor(Math.random()*hex.length)
}

