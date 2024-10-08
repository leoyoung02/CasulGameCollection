let clickCount = 0;
let clicksPerSecond = 0;
let intervalId;

const clickCounterElement = document.getElementById("Clik");

function Clicker() {
    clickCount++;
    clickCounterElement.textContent = `Click: ${clickCount}`;
}

function startClicking() {
    intervalId = setInterval(function() {
        clickCount += clicksPerSecond;
        clickCounterElement.textContent = `Click: ${clickCount}`;
    }, 1000);
}

function stopClicking() {
    clearInterval(intervalId);
}

function Upgrade1() {
    const cost = 10;
    if (clickCount >= cost) {
        clickCount -= cost;
        clicksPerSecond += 1;
        startClicking();
        alert(`Upgrade 1 purchased! Clicks per second +1. Cost: ${cost} clicks`);
    } else {
        alert("Not enough clicks to purchase Upgrade 1");
    }
}

function Upgrade2() {
    const cost = 20;
    if (clickCount >= cost) {
        clickCount -= cost;
        clicksPerSecond += 2;
        startClicking();
        alert(`Upgrade 2 purchased! Clicks per second +2. Cost: ${cost} clicks`);
    } else {
        alert("Not enough clicks to purchase Upgrade 2");
    }
}

function Upgrade3() {
    const cost = 30;
    if (clickCount >= cost) {
        clickCount -= cost;
        clicksPerSecond += 3;
        startClicking();
        alert(`Upgrade 3 purchased! Clicks per second +3. Cost: ${cost} clicks`);
    } else {
        alert("Not enough clicks to purchase Upgrade 3");
    }
}

function Upgrade4() {
    const cost = 40;
    if (clickCount >= cost) {
        clickCount -= cost;
        clicksPerSecond += 4;
        startClicking();
        alert(`Upgrade 4 purchased! Clicks per second +4. Cost: ${cost} clicks`);
    } else {
        alert("Not enough clicks to purchase Upgrade 4");
    }
}

// Start clicking automatically when the page loads
startClicking();