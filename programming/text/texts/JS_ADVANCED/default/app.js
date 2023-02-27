const sayHello = (name = "ゲスト") => console.log(`${name}さん、こんにちは。`);

sayHello();
sayHello("太郎");

const profile = {
    age:28,
}

const { name="ゲスト"} = profile;
const message = `${name}さん、こんにちは。`;
console.log(message);