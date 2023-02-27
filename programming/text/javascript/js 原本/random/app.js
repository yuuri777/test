let A=[1,2,3,4,5,6,7];
let B=[];

function shuffle(A){
    for (let i = A.length - 1; i >= 0; i--){
        let j = Math.floor(Math.random() * (i +1));

        [A[i],A[j]] = [A[j],A[i]];
    }
    return A;
}

A = shuffle(A);
B.push(A);
console.log(B);