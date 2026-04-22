// span要素にIDを足して、そのIDにmenuという名前をつけて定数定義
const menu = document.querySelector('#menu');


//navを定数定義　navは1つしかないのでID追加しなくてもいい。
const nav = document.querySelector('nav');


//クリックイベント
menu.addEventListener('click', () => {

  if (nav.classList.contains('active')) {
    nav.classList.remove('active')
    menu.textContent = 'menu';
    menu.style.color = '#000';

  } else {
    nav.classList.add('active');
    menu.textContent = 'close';
    menu.style.color = '#fff';
  }
});

////////////////////////////////////////////////////////////////////////////////

// view more ボタン
const btn = document.querySelector('#view_more');
const hiddenItems = document.querySelectorAll('.is_hidden');

// view more ボタン
btn.addEventListener('click', () => {
  hiddenItems.forEach(item => {
    item.classList.remove('is_hidden');
  });

  // ボタン自体を非表示にする
  btn.style.display = 'none';
});