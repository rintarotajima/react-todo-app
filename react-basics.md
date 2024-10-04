# Reactメモ
### なぜReactが開発されたのか？
ReactはFacebookが2013年に開発・公開したライブラリ。
その背景には、FacebookやInstagramのような巨大なウェブアプリケーションでは、頻繁にデータが変わる部分のUIを効率的に再レンダリングすることが課題だった。従来のDOM操作（Vanilla JSやjQuery）では複雑でパフォーマンスが低下しがちで、Reactはこの問題を解決するため、コンポーネントベースの設計と効率的なUIの更新方法を提供する。

### Reactのメリットは?
- 宣言的なUI: Reactは「状態が変わったらUIをどのように更新するか」をプログラムする必要がなく、UIの最終状態だけを宣言することによって状態とUIが同期しやすくなり、コードがシンプルになる。

- コンポーネントベース: UIを小さな再利用可能な「部品（コンポーネント）」に分割し、アプリケーションを構築することができ、開発効率が向上し、コードの再利用性が高まる。

- 仮想DOM: Reactは「仮想DOM」という仕組みで、UIの変更部分だけを効率的に更新するため、パフォーマンスが向上する。

### Reactがどこで活用されるか？
Webブラウザ上で動作するSPA（Single Page Application）に主に使われる。コンポーネントごとにページを構成するので、ユーザーがページを移動するたびに全体を再読み込みせずに、必要な部分だけを更新できるのが特徴。


## ReactやVueを使うためのJavaScriptの基本

### DOMと仮想DOMの概念

DOMとはDocument Object Modelの略で、HTMLなどを解釈し、木構造で表現したもの。

画面変更方法➡DOMを直接操作していた。レンダリングコストやコードが複雑化。

仮想DOMの登場

JSのオブジェクトで仮想的に作られたDOMのこと。

いきなりDOMを操作するのではなく、JS上で仮想DOMを操作し、差分を出してからDOMに反映する。

### npmやyarnの意義

かつてのJavaScript→1つのJSファイルにすべての処理を記述していた。コードが複雑になりカオス化&再利用できない

改善されたJavaScript→複数のJSファイルに分割することでコードが再利用できたり、複雑化しにくくなった。依存関係が複雑になった。何がどこから読み込まれたかわからない。

モダンなJavaScript→npmやyarnなどにより依存関係やどこから読み込まれたかが分かりやすくなった。チーム内での共有も可能になった。

npm・・・パッケージの場所、これらのパッケージをNode.jsのプロジェクトにインストールし、管理するためのコマンドラインツール

package.json・・・設計書の役割

package-lock.json、yarn-lock.json・・・依存関係が書かれているファイル

node_modules・・・実際のパッケージ（プログラム）が書かれているファイル、ファイルサイズが大きいため、githubに公開しない。package.jsonやpackage-lock.jsonを見るだけで同じような環境を整えられる。

### ECMAScriptとは？

JavaScriptにある程度ルールをつけたもの。

ES5→2014、ES6→2015だとわかりにくいことからES20XXみたいな表示になった。

ES6(2015)から新たに追加された概念がある。

ex) letやconstを用いた変数宣言、スプレット構文、アロー関数、Promise、その他たくさんあるが。

### モジュールバンドラーとトランスパイラーについて

- 開発効率を上げたり、再利用性を高くするために分割されたJSファイル（CSSファイルやimage)を本番環境（実行時）には一つにしたほうがパフォーマンスが良いことから、それらをバンドル（束ねる、結合）する役割を担う。ex）webpack, Vite
- ES6で便利な記法を書けるようになったが、ブラウザによっては、新しいJSを読み込めないものもある。そこで、ES6からES5へ変換する役割を担う。ex) Babel, SWC

### SPAの概念

SPA→Single Page Applicationの略で、HTMLファイルが１つのみで、JavaScriptで画面を書き換える。

従来のWebページ→リクエストに応じて、サーバーがHTMLファイルを返して、ユーザ画面に表示

SPA→リクエストに応じて、サーバーは空のHTMLを返して、JavaScriptによって画面を装飾し表示

仮想DOMを利用している。

メリット

- 画面遷移時にちらつきが生じにくい。
- コンポーネント分割による開発で効率がよい。
- 表示速度がはやい。

## モダンJavaScriptの機能

### varキーワードで定義した変数とlet、constキーワードで定義した変数の違い

```jsx
//** 以前の変数宣言 */
var myName = "Rintaro";
// console.log(myName); Rintaro

// varでは再代入・再宣言が可能
myName = "Rinta"; // 再代入
// console.log(myName); Rinta

var myName = "Rintaro Tajima";　// 再宣言
// console.log(myName); Rintaro Tajima

//** letの登場 */
let myHobby = "Watching Fooball games";
// console.log(myHobby); Watching Football games

// letは再代入が可能、再宣言が不可能。  */
myHobby = "Reading a book"; // 再代入
// console.log(myHobby); Reading a book

let myHobby = "Watching Baseball game"; 再宣言はダメ
// Uncaught SyntaxError: Identifier 'myHobby' has already been declared

//** constの登場 */
const todayWeather = "Sunny";
// console.log(todayWeather); "Sunny"

//  constは再代入・再宣言ともに不可能
todayWeather = "Rainy";  // 再代入ダメ
// app.js:27 Uncaught TypeError: Assignment to constant variable.
const todayWeather = "cloudy";　// 再宣言ダメ
//  Uncaught SyntaxError: Identifier 'todayWeather' has already been declared

```

テンプレート文字列

```jsx
//** テンプレート文字列 */
「私の名前はりんたろうです。年齢は22歳です。」を表示したいとき
// テンプレート文字列を使わないと...
const myName = "りんたろう";
const myOld = "22";
const message1 =
  "私の名前は" + myName + "です。" + "年齢は" + myOld + "歳です。";
// console.log(message1);

// テンプレート文字列を使う...
const message2 = `私の名前は${myName}です。年齢は${myOld}歳です。`;
// console.log(message2);
```

アロー関数

```jsx
// 従来の関数宣言
function func1(str) {
  return str;
}
// console.log(func1("Hello World")); 出力 "Hello World"

// 関数式
const func1 = function (str) {
  return str;
};
// console.log(func1("Hello, World")); 出力 "Hello World"

// アロー関数
const func1 = (str) => {
  return str;
};
// console.log(func1("Hello, World")); 出力 "Hello World"
```

```jsx
const addition = (a, b) => a + b;
console.log(addition(4, 5));
9;
```

分割代入（配列、オブジェクト）

```jsx
const myProfile2 = ["りんた", 22];
const mymessage3 = `ニックネームは${myProfile2[0]}です。年齢は${myProfile2[1]}です。`;
// console.log(mymessage3) ニックネームはりんたです。年齢は22です。

const [nickName2, age2] = myProfile2; // 変数名としてnickName、ageを設定
const mymessage4 = `ニックネームは${nickName2}です。年齢は${age2}です。`;
// console.log(mymessage4) ニックネームはりんたです。年齢は22です。
```

```jsx
//** 分割代入 */
const myProfile1 = {
  nickName: "りんた",
  age: "22",
};
const mymessage1 = `ニックネームは${myProfile1.nickName}です。年齢は${myProfile1.age}です`
// console.log(mymessage1) ニックネームはりんたです。年齢は22です。

const {nickName, age} = myProfile1; 
const mymessage2 = `ニックネームは${nickName}です。年齢は${age}です。`
// console.log(message2) ニックネームはりんたです。年齢は22です。
```

スプレット構文

```jsx
// 配列の展開 (配列の中身を並べるイメージ)
const arr1 = [10, 20];
// console.log(...arr1) 10 20

const sumFunc = (num1, num2) => num1 + num2;
// console.log(sumFunc(...arr1)) 30 // 展開された値を順に引数に渡す

// まとめる
const arr2 = [10, 20, 30, 40, 50];
const [num1, num2, ...arr3] = arr2;
// console.log(arr3) [30, 40, 50]

// コピーと結合
const arr4 = [10, 100];
const arr5 = [20, 200];
const arr6 = [...arr4];
// console.log(arr6) [10, 100]
const arr7 = [...arr4, ...arr5];
// console.log(arr7) [10, 100, 20, 200]

const arr8 = arr4; //にすると arr8の値を変更したときに、arr4も変更されてしまう。

```

mapメソッドとfilterメソッド

```jsx
//** mapやfilterを使った配列の処理 */
const nameArr = ["佐藤", "鈴木", "俺"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}
// 出力 佐藤、鈴木、俺
// 配列の要素を1つずつ取り出す処理でもmapメソッドのほうが楽にかける。
nameArr.map((lastName) => console.log(lastName));
// 出力 佐藤、鈴木、俺

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 == 1;
});
// console.log(newNumArr) [1, 3, 5]

```


三項演算子、論理演算子
```jsx
//** 三項演算子 */
// ある条件 ? 条件がtrueの時: 条件がfalseの時
const val1 = 1 > 2 ? "trueです" : "falseです";
// console.log(val1) falseです

const num = 1300;
const formatted =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formatted) 1,300


//** 論理演算子 */
// "ABC", 0,10,undefined, NaN, "", [], {}とかはtruthyかfalsy
// ||は左側がtruthyなとき、その時点で値を返す。
const color = 300;
const fee = color || "金額が未設定です";
// console.log(fee) 金額が未設定です(colorの値がfalsyのとき)

// &&は左側がfalsyのとき、その時点で値を返す。
const color2 = null;
const fee2 = color2 && "何か設定された";
console.log(fee2); //null(color2の値がfalsyのとき)
```