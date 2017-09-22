console.log('main.js load');

var clicker = new Worker('/javascripts/clicker.js');

function updateMoney(money) {
  document.querySelector('.balance1').innerHTML = 'Your balance: $'+Number(Math.round(money+'e'+ 2) +'e-2').toFixed(2);
}
clicker.addEventListener('message', function(e) {
  var money = (e.data.replace(/\s+/g,'').match(/^money(\d+.?\d*)/i)||[0,null])[1];
  money&&updateMoney(money);
  console.log('Worker onmessage'+e.data);
}, false);
function action(e) {
  clicker.postMessage(e);
}
clicker.postMessage('start');
