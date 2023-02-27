let question = [
    {
    title:"第１問 三角形の内角の和は？",
    select1:"270度",
    select2:"145度",
    select3:"90度",
    select4:"180度" },
        {
    title:"日銀、黒田総裁の任期は？",
    select1:"6月2日",
    select2:"3月9日",
    select3:"4月8日",
    select4:"9月23日"},
    {
   title:"過去50年のドル円の底値は？",
   select1:"1ドル129円",
   select2:"1ドル89円",
   select3: "1ドル56円",
   select4: "1ドル75円"
}]
//for(key in question){
  
console.log(question[0].select2)
//変数[配列番号].キーで出したい文字列一つだけを呼び出せる。
//console.log(question[1]);
//console.log(question[2]);

let value = Object.values(question[0]);

document.getElementById("ques_main").innerHTML=value;
/*Object.data(question).forEach(function(value){
console.log(question[value]);
}*/
//console.log(output);
