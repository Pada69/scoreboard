const homeScoreEl = document.getElementById("home-board-score");
let homeScore = 0;

const guestScoreEl = document.getElementById("guest-board-score");
let guestScore = 0;

function addOneHome () {
    homeScore += 1
    winner()
    homeScoreEl.textContent = homeScore;
}

window.addOneHome = addOneHome;

function addTwoHome () {
    homeScore += 2
    winner()
    homeScoreEl.textContent = homeScore;
}

window.addTwoHome = addTwoHome;

function addThreeHome () {
    homeScore += 3
    winner()
    homeScoreEl.textContent = homeScore;
}

window.addThreeHome = addThreeHome;

function addOneGuest () {
    guestScore += 1
    winner()
    guestScoreEl.textContent = guestScore;
}

window.addOneGuest = addOneGuest;

function addTwoGuest () {
    guestScore += 2
    winner()
    guestScoreEl.textContent = guestScore;
}

window.addTwoGuest = addTwoGuest;

function addThreeGuest () {
    guestScore += 3
    winner()
    guestScoreEl.textContent = guestScore;
}

window.addThreeGuest = addThreeGuest;

function reset () {
    homeScore = 0;
    guestScore = 0;
    winner()
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
}

window.reset = reset;

function winner () {
    if (homeScore > guestScore) {
        homeScoreEl.style.backgroundColor = "lightblue";
        guestScoreEl.style.backgroundColor = "#080001";
    } else if (guestScore > homeScore) {
        guestScoreEl.style.backgroundColor = "lightblue";
        homeScoreEl.style.backgroundColor = "#080001";
    } else {
        homeScoreEl.style.backgroundColor = "#080001"; 
        guestScoreEl.style.backgroundColor = "#080001";
    }
}

window.winner = winner;

