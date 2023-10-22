const homeScoreEl = document.getElementById("home-board-score");
let homeScore = 0;

const guestScoreEl = document.getElementById("guest-board-score");
let guestScore = 0;

function addOneHome () {
    homeScore += 1
    winner()
    homeScoreEl.textContent = homeScore;
}

function addTwoHome () {
    homeScore += 2
    winner()
    homeScoreEl.textContent = homeScore;
}

function addThreeHome () {
    homeScore += 3
    winner()
    homeScoreEl.textContent = homeScore;
}

function addOneGuest () {
    guestScore += 1
    winner()
    guestScoreEl.textContent = guestScore;
}

function addTwoGuest () {
    guestScore += 2
    winner()
    guestScoreEl.textContent = guestScore;
}

function addThreeGuest () {
    guestScore += 3
    winner()
    guestScoreEl.textContent = guestScore;
}

function reset () {
    homeScore = 0;
    guestScore = 0;
    winner()
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
}

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

