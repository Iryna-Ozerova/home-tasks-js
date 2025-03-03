const timerElement = document.getElementById("timer");
const startButton = document.getElementById("startButton");

let timeLeft = 10; //лічильник, який зменшується на 1 кожну секунду.
let countdownInterval = null; //зберігає ідентифікатор setInterval(), щоб мати змогу його зупинити

startButton.addEventListener("click", () => {
    startButton.disabled = true; // Вимикаємо кнопку після старту

    countdownInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        // Зміна кольору залежно від значення часу
        if (timeLeft > 5) {
            timerElement.style.backgroundColor = "green";
        } else if (timeLeft > 2) {
            timerElement.style.backgroundColor = "orange";
        } else {
            timerElement.style.backgroundColor = "red";
        }

        // Зупинка таймера, коли доходить до 0
        if (timeLeft === 0) {
            clearInterval(countdownInterval);
            timerElement.textContent = "⏳";
            startButton.disabled = false; // Вмикаємо кнопку знову
        }
    }, 1000);
});
