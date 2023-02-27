let quiz=[
    ["180度","90度","145度","270度","ee"],
        ["6月2日","3月9日","4月8日","9月23日","dd"],
    ["1ドル129円","1ドル89円","1ドル56円","1ドル75円","33"]
]


    //console.log(quiz);
    const tb=document.getElementById("tbody");
     
    quiz.forEach((x)=>{
        //console.log(x);
        const tr=document.createElement("td");
        tb.appendChild(tr);
        //tdというタグを作成して
        for (let i = 0; i  < quiz.length; i++){
        //console.log(i)
        console.log(quiz[i]);
        //console.log(i[x]);
        tdi = `td${i}`;
        tdi = document.createElement("button");
        tdi.textContent = quiz[i];
        tr.appendChild(tdi);
            
        }

    })
