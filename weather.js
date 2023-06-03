// let data = {
//   "coord": {
//     "lon": 116.3972,
//     "lat": 39.9075
//   },
//   "weather": [
//     {
//       "id": 803,
//       "main": "Clouds",
//       "description": "曇りがち",
//       "icon": "04d"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 9.94,
//     "feels_like": 8.65,
//     "temp_min": 9.94,
//     "temp_max": 9.94,
//     "pressure": 1022,
//     "humidity": 14,
//     "sea_level": 1022,
//     "grnd_level": 1016
//   },
//   "visibility": 10000,
//   "wind": {
//     "speed": 2.65,
//     "deg": 197,
//     "gust": 4.84
//   },
//   "clouds": {
//     "all": 53
//   },
//   "dt": 1646542386,
//   "sys": {
//     "type": 1,
//     "id": 9609,
//     "country": "CN",
//     "sunrise": 1646520066,
//     "sunset": 1646561447
//   },
//   "timezone": 28800,
//   "id": 1816670,
//   "name": "北京市",
//   "cod": 200
// };

////////// 課題3-2 ここからプログラムを書こう

// let c1 = document.querySelector('#countory01');
// c1.addEventListener('click', changeColor);

// let c2 = document.querySelector('#countory02');
// c2.addEventListener('click', changeColor);

// let c3 = document.querySelector('#countory03');
// c3.addEventListener('click', changeColor);

// let c4 = document.querySelector('#countory04');
// c4.addEventListener('click', changeColor);

// let c5 = document.querySelector('#countory05');
// c5.addEventListener('click', changeColor);

// let c6 = document.querySelector('#countory06');
// c6.addEventListener('click', changeColor);

// let c7 = document.querySelector('#countory07');
// c7.addEventListener('click', changeColor);

// let c8 = document.querySelector('#countory08');
// c8.addEventListener('click', changeColor);

// let c9 = document.querySelector('#countory09');
// c9.addEventListener('click', changeColor);

// let c10 = document.querySelector('#countory10');
// c10.addEventListener('click', changeColor);

// let c11 = document.querySelector('#countory11');
// c11.addEventListener('click', changeColor);

// let c12 = document.querySelector('#countory12');
// c12.addEventListener('click', changeColor);


// function changeColor(event) {
// 	// ランダムな RGB の色
// 	let r = Math.floor(Math.random() * 256);
// 	let g = Math.floor(Math.random() * 256);
// 	let b = Math.floor(Math.random() * 256);
// 	// 色のプロパティ値を作る
// 	let color = 'rgb(' + r + ',' + g + ',' + b + ')';

// 	let div = event.target;
// 	div.style.backgroundColor = color;
// }

let a = document.querySelector('button#btn');
a.addEventListener('click',ShowWeather);

function ShowWeather() {
  let s = document.querySelector('select#ten');
  let idx =s.selectedIndex;
  let os = s.querySelectorAll('option');
  let o = os.item(idx);
  console.log(o);
  cood = (o.value);
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+cood+'.json';
console.log(url);
axios.get(url)
  .then(ShowResult)
  .catch(showError)
  .then(finish);
}

function ShowResult(resp) {
  let data = resp.data;
  if (typeof data === 'string') {
    data = JSON.parse(date);
  }
let coorda= data.coord.lon;
let coordb= data.coord.lat;
let tennki = data.weather[0].description;
let max = data.main.temp_max;
let min = data.main.temp_min;
let humidity = data.main.humidity;
let speed = data.wind.speed;
let deg = data.wind.deg;
let kuni =data.name;

let e1 = document.querySelector('span#coordlon');
let e2 = document.querySelector('span#coordlat');
let e3 = document.querySelector('span#weather');
let e4 = document.querySelector('span#max');
let e5 = document.querySelector('span#min');
let e6 = document.querySelector('span#humidity');
let e7 = document.querySelector('span#windsp');
let e8 = document.querySelector('span#winddeg');
let e9 = document.querySelector('span#name');

e1.textContent = '緯度は'+coorda+'です。';
e2.textContent = '経度は'+coordb+'です。';
e3.textContent = '天候は'+tennki+'です。';
e4.textContent = '最高気温は'+max+'です。';
e5.textContent = '最低気温は'+min+'です。';
e6.textContent = '湿度は'+humidity+'です。';
e7.textContent = '風速は'+speed+'です。';
e8.textContent = '風向は'+deg+'です。';
e9.textContent = '都市名は'+kuni+'です。';




}
function showError(err) {
  console.log(err);
}
function finish() {
  console.log('Ajax 通信が終わりました');
}



