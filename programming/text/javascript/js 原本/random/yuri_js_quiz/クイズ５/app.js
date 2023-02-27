
let Q = [
'Q.日本で一番高い山は？',
' onclick="Q_1(1);" >富士山',
' onclick="Q_1(2);" >北岳', 
' onclick="Q_1(2);" >奥穂高岳', 
' onclick="Q_1(2);" >高尾山', 
'日本で一番高い山は富士山。なんと3,776Mもあります。',

'Q.アメリカ合衆国の首都はどこでしょう？', 
' onclick="Q_2(1);" >ワシントンDC',
' onclick="Q_2(2);" >ニューヨーク',
' onclick="Q_2(2);" >ロサンゼルス',
' onclick="Q_2(2);" >ドイツ', 
'常識といえば常識ですが、意外と間違いやすいのがこのクイズ。<br/>正解はワシントンDC。ニューヨークではりませんよ。',

'Q.世界三大珍味は何？', 
' onclick="Q_(2);" >うに、からすみ、このわた',
' onclick="Q_(2);" >すし、らーめん、てんぷら',
' onclick="Q_(1);" >フォアグラ、キャビア、トリュフ',
' onclick="Q_(2);" >ちくわ、カレー、シチュー', 
'世界三大珍味は一般的にキャビア・フォアグラ・トリュフと言われています。',
];
let c=console.log;
let r=0;
let t=1;
let y=2;

function Q_1(oxq) {
	
	if (oxq === 0){
	//仮引数が０だった場合
	 
 	 document.getElementById("ox").innerHTML = '';//正解不正解と出た文字を一度からにするためこのコード
	 document.getElementById("quiz").innerHTML = '';
//下にwriteでhtmlに表示させるためのidなどを書き、quiz変数にidを取得。

	 quiz = document.getElementById('quiz');
	 quiz.insertAdjacentHTML('afterbegin', '<p>'+Q[r]+'</p>');//quizの先頭に
     //問題をquizidのある場所に差し込んでいる。
     quiz.insertAdjacentHTML('beforeend', '<button'+Q[r+1]+'</button><br/>');//エレメントタグの末尾に
     quiz.insertAdjacentHTML('beforeend', '<button'+Q[r+2]+'</button><br/>');
	 quiz.insertAdjacentHTML('beforeend', '<button'+Q[r+3]+'</button><br/>');
	 quiz.insertAdjacentHTML('beforeend', '<button'+Q[r+4]+'</button><br/>');
	 
	} else if (oxq === 1) {//正解時の実行プログラムです
 	 document.getElementById("ox").innerHTML = '<p>正解！</p>';
	 document.getElementById("quiz").innerHTML = '<p>'+Q[r+5]+'</p>';
 	 document.getElementById("next").innerHTML = '<p><button onClick="Q_(0);">次の問題へ</button></p>';

	} else if (oxq === 2) {//失敗時の実行プログラムです
 	 document.getElementById("ox").innerHTML = '<p>不正解！</p>';
	 document.getElementById("quiz").innerHTML = '<p>'+Q[r+5]+'</p>';
 	 document.getElementById("next").innerHTML = '<p><button onClick="Q_(0);">次の問題へ</button></p>';
	}
}
document.write('<p id="ox"></p>');
document.write('<p id="quiz">');
document.write(Q[r] +'<br/>');
document.write('<button'+ Q[r+1] +'</button><br/>');
document.write('<button'+ Q[r+2] +'</button><br/>');
document.write('<button'+ Q[r+3] +'</button><br/>');
document.write('<button'+ Q[r+4] +'</button><br/>');

document.write('</p>');
document.write('<p id="next"><button onClick="Q_(0);">次の問題へ</button></p>');
