function updateCountdown() {
    const now = new Date();
    const nextSunday = new Date(now);
    nextSunday.setDate(now.getDate() + (7 - now.getDay()) % 7); // Find the next Sunday
    nextSunday.setHours(10, 30, 0, 0); // Set the time to 10:30 AM

    const noon = new Date(nextSunday);
    noon.setHours(12, 0, 0, 0); // Set the time to noon

    const currentTime = now.getTime();
    const nextSundayTime = nextSunday.getTime();
    const noonTime = noon.getTime();

    let timeRemaining;
    if (currentTime < nextSundayTime) {
        timeRemaining = nextSundayTime - currentTime;
    } else if (currentTime < noonTime) {
        timeRemaining = noonTime - currentTime;
    } else {
        timeRemaining = nextSundayTime + (7 * 24 * 60 * 60 * 1000) - currentTime; // Add 7 days to find the next Sunday
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    let message;
    if (now.getUTCHours() === 10 && now.getUTCMinutes() === 30 && now.getUTCSeconds() === 0) {
        message = 'Live!';
    } else {
        message = `in ${hours}h ${minutes}m ${seconds}s`;
    }

    document.getElementById('countdown-results').textContent = message;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
