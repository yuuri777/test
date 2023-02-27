const quiz = [
    {
        question:"ゲーム市場、最も売れたゲーム機は次の内どれ？",
        answer:[
        'スーパーファミコン',
        'プレイステーション２',
        'ニンテンドースイッチ',
        'ニンテンドーDS'
    ],
    correct:'ニンテンドーDS'
    },{
        question:'日本で初めてノーベル賞を取った人は誰でしょう？',
        answer:[
        '川端康成',
        '湯川秀樹',
        '湯川秀樹',
        '福沢諭吉'
    ],
    correct:'湯川秀樹'
    },{
        question:"日本で一番高い山は?",
        answer:[
        '富士山',
        '北岳',
        '奥穂高岳',
        '高尾山'
    ],
    correct:'富士山'
    }
]
const quizlength = quiz.length;
let quizindex=0;
let c=console.log;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonlength = $button.length;

const setupquiz = () => {//問題切り替え
    document.getElementById('js-question').textContent = quiz[quizindex].question;
    let buttonindex = 0;
    //let buttonlength = $button.length;
    while(buttonindex < buttonlength){
    $button[buttonindex].textContent = quiz[quizindex].answer[buttonindex];
    buttonindex++;
}
}
setupquiz();

const clickhandler = (e) => {
    if(quiz[quizindex].correct === e.target.textContent){
        window.alert("正解");
        score++;
    }else{
        window.alert("不正解");
    }
    quizindex++;
    if(quizindex < quizlength){
        setupquiz();
    }else {
        window.alert("終了!");
        if(score === 0){
            window.alert("残念!");
        }else if(score === 1) {
            window.alert("まだまだ!");
        }else if(score === 2) {
            window.alert("おしい!");
        }else if(score === 3) {
            window.alert("素晴らしい!")
        }
    }
    
}

let handlerindex =0;

while(handlerindex < buttonlength){
    $button[handlerindex].addEventListener('click',(e) => {
    clickhandler(e);
    });
    handlerindex++;
}



