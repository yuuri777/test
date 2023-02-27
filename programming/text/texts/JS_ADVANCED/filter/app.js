const arraynum = [3,19,25,32,40,49,53,55,73,90,100];

const arrayresult = arraynum.filter(num =>{
    return num % 5 === 0
});

console.log(arrayresult);