const speedElement = document.querySelector("#sped")
const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")

startBtn.addEventListener("click", () => {

    function handleSuccess(position){

        console.log(position)

        speedElement.innerText = position.coords.speed ? (position.coords.speed * 3.6).toFixed(1) : 0
        
    }
    function handleError(error){

    }

    const options = { enableHighAccuracy: true } 

    navigator.geolocation.watchPosition(handleSuccess, handleError, options)
    
    startBtn.classList.add("d-none")
    stopBtn.classList.remove("d-none")

})
stopBtn.addEventListener("click", () => {

    stopBtn.classList.add("d-none")
    startBtn.classList.remove("d-none")
})