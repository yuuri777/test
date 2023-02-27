let c=console.log;
const test = name => {
    name=Math.floor(Math.random() * (3 +1 - 1)) + 1;
c(test2(name));

}
const test2 = name2 =>{

let result;
if(name2 === 1){
    result="大当たり";
}else if(name2 === 2){
    result="当たり";
}else {
    result="外れ";
}

    return result;
    
};

test();
