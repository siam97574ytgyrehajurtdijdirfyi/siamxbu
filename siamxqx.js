// Enter your leaderboard name
let lname = "Siam X";
// Enter your initial capital
let iblafp = 30000;

// Change the URL to a new one
var newUrl = "https://qxbroker.com/en/trade";
window.history.pushState({}, "", newUrl);

// Change live accout to demo by text and active
setInterval(function () {
    let liveText = document.getElementsByClassName("usermenu__info-name")[0];
    if (liveText) {
        liveText.innerHTML = "LIVE";
        liveText.style.color = "#0faf59";
        liveText.style.fontWeight = "bold";
        liveText.style.fontSize = "10px";
    }
}, 500);

// আরও কোড চাইলে পুরা তোমার .js স্ক্রিপ্ট দিয়ে দাও আমি বানিয়ে দেব।
