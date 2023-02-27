let countdown = setInterval(function(){
    const now = new Date();
    const target = new Date(now.getFullYear(),now.getMonth() + 1,0,"23","59","59");
    const remaintime = target - now

    if(remaintime < 0) return false;

     //math.floor 時間で検索
    const difhour = Math.floor(remaintime / 1000 / 60 / 60 ) % 24;
    const difmin  = Math.floor(remaintime / 1000 / 60) % 60;
    const difsec  = Math.floor(remaintime /1000) % 60;
    
     document.getElementById("hour").textContent = difhour;
    document.getElementById("min").textContent = difmin;
    document.getElementById("sec").textContent = difsec;
    
    if(remaintime < 0) clearInterval(countdown);

    console.log();
})

