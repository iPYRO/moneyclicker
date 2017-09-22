function give1m() {
  money += 1e6;
  updateMoney();
}
function addMoney() {
  money += mpc;
  updateMoney();
}
function alertMoney() {
  alert("$" + money);
  updateMoney();
}
function upgrade1() {
  if(money < 100) {
    alert("You need more money");
  }
  if(money > 99) {
    money -= 100;
    mpc += 1;
  }
  updateMoney();
}
function upgrade2() {
  if(money < 15) {
    alert("You need more money");
  }
}
function intervalM() {
  setTimeout(intervalM, 1000);
  money+=0.1*mpc;
  updateMoney();
}
function updateMoney() {
  self.postMessage('money'+money);
}
var money = 0;
var mpc = 1;
var click = 0.1;

self.addEventListener('message', ({data}) => {
  switch(data) {
    case 'start': {
      money = 0;
      mpc = 1;
      click = 0.1;
      updateMoney();
      return console.log('Started/Reset');
    }
    case '1m': {
      return give1m();
    }
    case 'add': {
      return addMoney();
    }
    case 'addauto': {
      return intervalM();
    }
  }
}, false);
