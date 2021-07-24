const text1 = document.getElementById('text');
const speedel = document.getElementById('speed');
// console.log(speed1.value);

const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus excepturi cum consequuntur laborum? Tempora molestiae, magni rem distinctio asperiores ratione sunt libero incidunt quae aspernatur earum recusandae voluptatem"


let idx =1;
// let speed = 50 / speed1.value;
let speed = 1000;

function autotext(){
    // console.log('hay');
    text1.innerHTML = text.slice(0,idx);

    idx++;

    if(idx>text.length){
        idx++;
        
    }
    setTimeout(autotext,speed);



   
}
autotext();
speedel.addEventListener('click',()=>{
    speed = 2000/speedel.value;
});

