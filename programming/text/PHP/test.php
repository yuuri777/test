<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <title>JavaScriptの学習</title>
</head>

<body>
   <p><?php echo "これはテストです"; ?></p>
     <script type="text/javascript" src="app.js"></script>

</body>

</html>
<html>
<head>
  <meta charset="utf-8">
  <title></title>
</head>
<body>
  <form　action = "">
    <p>メールアドレス：<input type="text"></p>
    <p>パスワード：<input type="text">
	<p>氏名：<input type="text">
	<p>住所：<input type="text">
	<p>電話番号：<input type="text">

    <p><input type="submit" value="送信"></p>
  </form>
</body>
</html>

<?php


/*
$word = "ss";

function A($a){
	
	$type = gettype($a);
		
	if($type == "string"){
		echo "引数の型はstringです";
	}else　if($type == "integer"){
		echo "引数の型はintegerです";
	}else if($type == "boolean"){
		echo "引数の型はbooleanです";
	}else if($type == "array"){
		echo "引数の型はarrayです";
	}

};

A($word);

//$array = [1,2,3,4,5];
$array = 1;
function A($a){
	echo is_array($a) ? "配列が渡されました！" : "配列が渡されていません！";
}
A($array);

$array = [1,2,3,4,5];
function A($a){
	foreach($a as $v){
	echo $v;
	}
	
}
A($array);
//A(array(1,2,3,4,5));



function A($a,$b,$c){
	$a = "私は";
	$b = "24歳";
	$c = "です。";
	echo B($a,$b,$c);

}
function B($a,$b,$c){
	$result= $a.$b.$c;
	echo $result;
	
}
A($d,$e,$f);


function A(){
	echo B();
}

function B(){
	$num1=10;
	$num2=5;
	$totle=$num1+$num2;
	return $totle;
}
echo A();



function A(){
	$message = "外部ファイルに作成された関数が実行されました。";
	return $message;
}
echo A();


$week = ["火" => "燃えるゴミ","水"=>"ペットボトル","木"=>"プラスチック"];

foreach($week as $key => $value){
	echo $key.":".$value."<br>";
}


$week=["月","火","水","木","金","土","日"];
foreach($week as $value){
	echo $value;
}

for($i = 0; $i < 5;$i++){
	echo "おはようございます！<br>";
}

$word = 0;
while($word < 5){
	$word++;
	echo "こんばんは！<br>";
}

$month = 1;
switch ($month){
	case 1:
	echo "31日";
	break;
	case 2:
	echo "28日";
	break;
	case 3:
	echo "31日";
	break;
	case 4:
	echo "30日";
	break;
	case 5:
	echo "31日";
	break;
	case 6:
	echo "30日";
	break;
	case 7:
	echo "31日";
	break;
	case 8:
	echo "31日";
	break;
	case 9:
	echo "30日";
	break;
	case 10:
	echo "31日";
	break;
	case 11:
	echo "30日";
	break;
	case 12:
	echo "31日";
	break;
	default:
	echo "値が無効です";
	
}



$age = "66";
$gender = "男性";

if($gender==="男性"&&$age==="25"||$gender==="男性"&&$age==="42"||$gender==="男性"&&$age==="61"||$gender==="女性"&&$age==="19"||$gender==="女性"&&$age==="33"||$gender==="女性"&&$age==="37"){
	echo "厄年です";
}else{
	echo "厄年ではありません";
}

$array = ["国語","算数","理科","社会"];
$array1= $array[3];
//$array1= "算数";

    if($array1=="国語"){
        echo "japaneseが選ばれました";
	  
}elseif($array1=="算数"){
        echo "mathが選ばれました";
	   
}elseif($array1=="理科"){
        echo "scienceが選ばれました";
	    
}elseif($array1=="社会"){
        echo "societyが選ばれました";

}


$text="PHPを勉強します!";

var_dump($text);

$array = [100,500,"aiueo",1000,"PHP",3000,"プログラミング"];

var_dump($array[0]);
var_dump($array[1]);
var_dump($array[3]);
var_dump($array[5]);
echo(5+3)."\n";
echo(5-3)."\n";
echo(5*3)."\n";
echo(6/3)."\n";

$a = 5; $b = 10;
$a += $b;
echo $a."\n";
$a -= 4;
echo $a."\n";
$a *= 5;
echo $a."\n";
$a /= 11;
echo $a."\n";

$c = 4; $d = 10; $e = 4;
var_dump($c <= $d);
var_dump($c > $d);

var_dump($c == $d);
var_dump($c== $e);*/
?>
