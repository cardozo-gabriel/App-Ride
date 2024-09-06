const speedElement = document.querySelector("#sped");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

let watchId = null;

startBtn.addEventListener("click", () => {
    if (watchId) return;

    function handleSuccess(position) {
        console.log("Position updated:", position);
        if (position.coords.speed !== undefined) {
            speedElement.innerText = (position.coords.speed * 3.6).toFixed(1);
        } else {
            speedElement.innerText = "Speed not available";
        }
    }

    function handleError(error) {
        console.error("Geolocation error:", error);
    }

    const options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 };

    watchId = navigator.geolocation.watchPosition(handleSuccess, handleError, options);
    
    startBtn.classList.add("d-none");
    stopBtn.classList.remove("d-none");
});

stopBtn.addEventListener("click", () => {
    if (!watchId) return;

    navigator.geolocation.clearWatch(watchId);
    watchId = null;

    stopBtn.classList.add("d-none");
    startBtn.classList.remove("d-none");
});
