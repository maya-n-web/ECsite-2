// span要素にIDを足して、そのIDにmenuという名前をつけて定数定義
const menu = document.querySelector('#menu');


//navを定数定義　navは1つしかないのでID追加しなくてもいい。
const nav = document.querySelector('nav');


//クリックイベント
menu.addEventListener('click', () => {

  /*
  
  ★メモ
  アイコンを変更する処理↓↓↓
  menu.textContent = 'close';
  nav.classList.add('active');
  
  →→→→→→→→→→→→classListはクラス名を操作するオブジェクト
  「HTMLの < nav > タグに、新しく active というクラス名を書き加える」
  =activeのｃｓｓの動きが適応される。（メニューが画面上に隠れている状態）※ハンバーガーの画面
  
  ☆以下のようなメソッドを使用できる。
   - add    引数にしたクラス名を「付与」するもの。
   - remove 引数にしたクラス名を「削除」するもの。
   - toggle 引数にしたクラス名を「付与」「削除」を繰り返すもの。
   - contains 引数にしたクラス名の有無を確認するもの。
  持っていた場合  true を返し、そうでなければfalseを返す。*/


  // nav.classList.toggle('active'); この方法もある　

  if (nav.classList.contains('active')) { //containsを使ってnavがactiveというクラス名を持っているか確認
    nav.classList.remove('active')       //持っていたらremoveを使ってnavからactiveをリムーブする。そしてmenuというIｄのテキストデータをmenuにする。
    menu.textContent = 'menu';
    menu.style.color = '#000';
    
} else {                            //持っていなかったらaddを使ってnavにactiveというクラス名を追加そしてmenuというIｄのテキストデータをcloseにする。
    nav.classList.add('active');
    menu.textContent = 'close';
    menu.style.color = '#fff';
  }
});


// view more ボタン
const btn = document.querySelector('#view-more');
const hiddenItems = document.querySelector('.is-hidden');

btn.addEventListener('click', () => {
  // 隠れているアイテムすべてに対して処理を行う
  hiddenItems.forEach((item) => {
    item.classList.remove('is-hidden'); // クラスを外すと表示される
  });
  
  // ボタン自体を消す（任意）
  btn.style.display = 'none';
});