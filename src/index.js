// const、let等の変数宣言
// var val1 = "var変数";
// console.log(val1);
// // var変数は上書き可能

// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// letは再宣言不可能
// let val2 = "let変数を再宣言";
// SyntaxError: /src/index.js: Identifier 'val2' has already been declared (21:4)

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き負荷
// // val3 = "const変数を上書き";
// // TypeError: "val3" is read-only

// const val3 = "const変数を再宣言";
// SyntaxError: /src/index.js: Identifier 'val3' has already been declared (31:6)

// constで定義したオブジェクトはプロパティの変更が可能

// const val4 = {
//   name: "じゃけぇ",
//   age: 28
// };
// console.log(val4);
// val4.name = "jak";
// val4.address = "Hiroshima";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "baid";
// val5.push("monkye");
// console.log(val5);

/***
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 28;
// // 「私の名前はじゃけぇです。年齢は28歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;

/**
 *アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// const func2 = (str) => {
//   return str;
// };

// ()を省略できる
// const func2 = (str) => {
//   return str;
// };

// const func2 = (str) => {
//   return str;
// };
// 関数の中身が1行でreturn文だった場合、{}とreturnを省略できる
// const func2 = (str) => str;

// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 *分割代入(オブジェクトから任意の要素を綺麗な記述で取り出すことができる。Reactでも多用する)
 */
// const myProfiel = {
//   name: "じゃけぇ",
//   age: 28
// };
// const message1 = `名前は${myProfiel.name}です。年齢は${myProfiel.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfiel;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// 分割代入は配列でも使用可
// const myProfile = ['じゃけぇ',28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name,age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 *デフォルト値、引数等(Reactで多用)。関数の引数の初期値を設定し、undefinedを出力しないように予防する
 */
// const sayHallo = (name = "ゲスト") => console.log(`こんにちは!${name}さん`);
// sayHallo("じゃぇ"); // こんにちは!じゃぇさん
// sayHallo(); // こんにちは!undefinedさん

/**
 *スプレッド構文...(ドットを3つ書く記法)
 */

// 配列の展開(順番に展開してくれる)
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// // sumFunc(...arr1);
// sumFunc(...arr1);

// まとめる(展開の反対)
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// // const arr5 = [30,40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6); //  [100, 20]
// console.log(arr4); //  [10, 20]

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);//  [10, 20, 30, 40]

// (大事) 同じ値を入れた、異なる変数同士でコピーすると、値の参照先が一緒になるため、
// //片方の変数の値に対して処理をしても、もう片方の変数内の値も同様に変わってしまう
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// // console.log(arr8);// (2) [100, 20]
// console.log(arr4); // (2) [100, 20]※arr4への処理はしていないのに同様に変わる

/**
 *mapやfilterを使った配列の処理(特にmapはReactでも多用する)
 */
// const nameArr = ["田中", "山田", "じゃけ"];
// 上記配列の値を順番に出力する場合、従来だとfor文を使っていた
// for(let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

//// mapで同様の処理を記載する(大きく2通りの使い方がある)
//1、return文を使い、設定された配列の値に何等かの処理をした結果をまとめた配列を返す方法
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);
//2、設定された配列内の値を1つずつ単純に出力する方法
// nameArr.map((name) => console.log(name));
//3、インデックス番号は2つ目の引数で取ることができる
// nameArr.map((name,index) => console.log(`${index + 1}番目は${name}です。`));

// filter(特定の条件に当てはまる値を返し、新たな配列を作る)
// 例)奇数の値だけ取り出し新しい配列を作るとした場合
// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 1;
// });
// console.log(newNumArr);

////mapを使ったより実践的な処理(特定の値以外に別の値にした配列を返す)
// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 *三項演算子(Reactでも使用すること多し。可読性注意)
 */
// 構文
// ある条件 ? 条件がtrueの時 : 条件がfolseの時
// const num = 1300;
// // console.log(num.toLocaleString());
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// 関数のreturn結果で三項演算子を使用する例 /　仮に合計の値が100を超えるかどうかを判定する三項演算子を作る

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "100未満です";
// };
// // console.log(checkSum(10, 30));
// console.log(checkSum(90, 30));

/**
 *論理演算子の本当の意味を知ろう
 */
// 一般的な使用方法
// const flag1 = true;
// const flag2 = false;
// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// || は ～または～がtrueの時という意味ではない。左側がfalseなら右側を返す、と読む
// JavaScriptではnullはfalse判定となる
// 数字は0以外がtrue
// const num = 100;
// const num = 2;
// // const num = null;

// // ↓の意味は || の左側がfalseであれば || の右側を返すという記述となる
// // 逆にいうと || の右側がtrueであれば || の左側を返すという記述となる
// const fee = num || "金額未設定です";
// console.log(fee);

// ↓ &&の場合、左の評価がtrueであった場合、右側を返すことになる
// ↓ &&を使用する例でif文の中で考えると、左側がtrueの結果を得られない=falseとなり、そのままif文は通れない結果となる
// REACT の JSXの中で下記の記述をすることがある
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
