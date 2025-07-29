document.getElementById("spinButton").addEventListener("click", function() {
    const wheel = document.getElementById("spinWheel");
    const randomDegree = Math.floor(Math.random() * 360 + 3600); // Spin 10x + random degrees
    wheel.style.transform = `rotate(${randomDegree}deg)`;
});
