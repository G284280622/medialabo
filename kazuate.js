// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let atari =0;
/*let atari = 0;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
hantei();
hantei();
hantei();
hantei();
*/
// ボタンを押した後の処理をする関数 hantei() の定義
let a = document.querySelector('button#kaitoubox');
a.addEventListener('click',hantei);
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="kaitoubox"]');
  let yoso = (i.value);
  kaisu = kaisu+1;

  let e1 = document.querySelector('span#kaisu');
  e1.textContent = kaisu;
  //let yoso = 4;
  let e2 = document.querySelector('span#answer');
  e2.textContent = yoso;
  let e3 = document.querySelector('p#result');
  console.log(kaisu+"回目の予想 : "+yoso);
  // 課題3-1: 正解判定する
  
  
  if (kaisu<3) {
    if (yoso == kotae) {
      atari = atari+1;
      e3.textContent = '正解です。おめでとう！';
    }if (yoso<kotae) {
      e3.textContent = 'まちがい、答えはもっと大きいですよ';
    }if (yoso>kotae) {
      e3.textContent = 'まちがい、答えはもっと小さいですよ';
    }
  }
   if (kaisu === 3) { 
    if (yoso === kotae) {
      e3.textContent = '正解です。おめでとう！';
    }if (yoso!=kotae) {
      e3.textContent = 'まちがい、残念でした答えは '+kotae+' です。';
    }
  }
  if (kaisu>=4) {
    e3.textContent = '答えは '+kotae+' でした。ゲームはすでに終わっています。';
  }
  console.log(atari);
}
  
