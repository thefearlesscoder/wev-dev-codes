const countValue=document.querySelector("#Counter");

const increment = () => {
    //get value from UI
    let value = parseInt(countValue.innerText);
    value = value + 1;
    //set the value onto UI
    countValue.innerText = value;
};

function decrement(){
    //get value from UI
    let value = parseInt(countValue.innerText);
    value = value - 1;
    //set the value onto UI
    countValue.innerText = value;

};