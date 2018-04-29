//Unlink Chain Animation 
function unlinkChain() {
  let chain = document.getElementById('chain');
  chain.innerHTML = '&#xf0c1;';

  setTimeout(function () {
    chain.innerHTML = "&#xf127;";
  }, 1000);
}
//Call unlinkChain function
unlinkChain();
//Repeat every 2 Seconds
setInterval(unlinkChain, 2000);

//Lock Animation
function unLock() {
  let lock = document.getElementById('lock');
  lock.innerHTML = "&#xf023;";

  setTimeout(function () {
    lock.innerHTML = "&#xf09c;";
  }, 1000);
}
//Calling function
unLock();
// Animation repeats every 2 seconds
setInterval(unLock, 2000);


//Battery Animation
function batteryRecharge() {
  let battery = document.getElementById('battery');
  battery.innerHTML = "&#xf244;";
  setTimeout(function () {
    battery.innerHTML = "&#xf243;";
  }, 1000);

  setTimeout(function () {
    battery.innerHTML = "&#xf242;";
  }, 2000);

  setTimeout(function () {
    battery.innerHTML = "&#xf241;";
  }, 3000);

  setTimeout(function () {
    battery.innerHTML = "&#xf240;";
  }, 4000);
}

batteryRecharge();
setInterval(batteryRecharge, 5000);

// Hour Glass Animation

function hourGlass() {
  let glass = document.getElementById('glass');
  glass.innerHTML = "&#xf251";

  setTimeout(function () {
    glass.innerHTML = "&#xf252;";
  }, 1000);
  setTimeout(function () {
    glass.innerHTML = "&#xf253;";
  }, 2000);
}

hourGlass();
setInterval(hourGlass, 3000);