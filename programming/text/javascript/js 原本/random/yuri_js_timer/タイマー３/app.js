let countdown = setInterval(function(){
    const now = new Date();
    //今の時間をnowに
    const target = new Date( '2023/12/31 23:59:59');

    //now.getFulltear()などで値を取得。
    const remaintime = target - now

    if(remaintime < 0) return false;

    const difsec  = Math.floor(remaintime /1000) % 60;
    
    document.getElementById("sec").textContent = difsec;
    
    if(remaintime < 0) clearInterval(countdown);

    console.log();
    

})
window.setTimeout(function(){
    alert("ストップ");
},remaintime);