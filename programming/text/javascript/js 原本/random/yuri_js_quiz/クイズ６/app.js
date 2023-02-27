
let Q = [//クイズ
'Q.日本で一番高い山は？',
' onclick="Q_(1);" >富士山',
' onclick="Q_(2);" >北岳', 
' onclick="Q_(2);" >奥穂高岳', 
'日本で一番高い山は富士山。なんと3,776Mもあります。',

'Q.アメリカ合衆国の首都はどこでしょう？', 
' onclick="Q_(1);" >ワシントンDC',
' onclick="Q_(2);" >ニューヨーク',
' onclick="Q_(2);" >ロサンゼルス',
'常識といえば常識ですが、意外と間違いやすいのがこのクイズ。<br/>正解はワシントンDC。ニューヨークではりませんよ。',

'Q.世界三大珍味は何？', 
' onclick="Q_(2);" >うに、からすみ、このわた',
' onclick="Q_(2);" >すし、らーめん、てんぷら',
' onclick="Q_(1);" >フォアグラ、キャビア、トリュフ',
'世界三大珍味は一般的にキャビア・フォアグラ・トリュフと言われています。',

'Q.次のうち、イタリアにないものなーんだ？', 
' onclick="Q_(2);" >ピザ',
' onclick="Q_(2);" >アクアパッツァ',
' onclick="Q_(1);" >ナポリタン',
'正解はナポリタン。ナポリにナポリタンはありません！',

'Q.日本で初めてノーベル賞を取った人は誰でしょう？', 
' onclick="Q_(2);" >川端康成',
' onclick="Q_(1);" >湯川秀樹',
' onclick="Q_(2);" >佐藤栄作',
'日本初のノーベル賞を受賞したのは湯川秀樹さん。',

'Q.ハロウィンで子供がお菓子を貰うお馴染みのセリフはなーんだ？', 
' onclick="Q_(2);" >ハッピーハロウィーン',
' onclick="Q_(1);" >トリック・オア・トリート ',
' onclick="Q_(2);" >メリークリスマス',
'「お菓子をくれなきゃイタズラするよ」でおなじみのこのフレーズ。<br/>ハロウィーンは、もともと古代ケルト民族でのサウィン祭りが起源といわれています。',
];
let c=console.log;
let r_1 = Q.length / 5;//クイズを出すための変数
//配列.length /5の５がないと３０通りになる。
//Qの変数にノーマルな状態で３０個変数が入っている。それを５で割ることにより問題から答えまでが一つの配列として扱われる？

let r_2 = Math.floor( Math.random() * r_1 ) ;
//ランダム要素最後の*r_1で配列６つのうち一つが出る。かける数字が２の場合は配列０と１の問題しか出ない。逆に６をかけると六問全部出る。
//r_1のランダム要素をr_2に入れる

let R = (r_2 * 5) ;//クイズを出すための変数

//console.log(R);
//なぜ５をかけるか
c();
//次の問題を表示するためのプログラムです
function Q_(oxq) {
	
	if (oxq === 0){
	//仮引数が０だった場合
	 r_1 = Q.length / 5;
	 r_2 = Math.floor( Math.random() * r_1 );
	 R = (r_2 * 5);
 	 document.getElementById("ox").innerHTML = '';//正解不正解と出た文字を一度からにするためこのコード
	 document.getElementById("quiz").innerHTML = '';
//下にwriteでhtmlに表示させるためのidなどを書き、quiz変数にidを取得。

	 quiz = document.getElementById('quiz');
	 quiz.insertAdjacentHTML('afterbegin', '<p>'+Q[R]+'</p>');//quizの先頭に
     //問題をquizidのある場所に差し込んでいる。
     quiz.insertAdjacentHTML('beforeend', '<button'+Q[R+1]+'</button><br/>');//エレメントタグの末尾に
     quiz.insertAdjacentHTML('beforeend', '<button'+Q[R+2]+'</button><br/>');
	 quiz.insertAdjacentHTML('beforeend', '<button'+Q[R+3]+'</button><br/>');
	 
	}
}
document.write('<p id="ox"></p>');
document.write('<p id="quiz">');
document.write(Q[R] +'<br/>');
document.write('<button'+ Q[R+1] +'</button><br/>');
document.write('<button'+ Q[R+2] +'</button><br/>');
document.write('<button'+ Q[R+3] +'</button><br/>');
document.write('</p>');
document.write('<p id="next"><button onClick="Q_(0);">次の問題へ</button></p>');
