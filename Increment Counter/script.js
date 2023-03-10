const counters = document.querySelectorAll(".counter");

counters.forEach((counter)=>{
// console.log(counter);

counter.innerHTML= 0;

const updateCounter = () =>{
    const targetCount = +counter.getAttribute('data-target');
    // console.log(targetCount)

    const startNumber= Number(counter.innerHTML)

    const incr = targetCount / 100;

    if(startNumber < targetCount){
        counter.innerHTML = `${Math.round(startNumber + incr)}`;

        setTimeout(updateCounter, 20)
    } else{
        counter.innerHTML = targetCount;
    }




}

updateCounter();

})