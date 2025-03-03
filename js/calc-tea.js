// 1️⃣ Отримуємо елементи форми
const billInput = document.getElementById("billAmount");
const serviceSelect = document.getElementById("serviceQuality");
const calculateBtn = document.getElementById("calculateBtn");
const resultText = document.getElementById("resultText");

// 2️⃣ Додаємо слухач події на кнопку
calculateBtn.addEventListener("click", () => {
    // Отримуємо значення з полів
    const billValue = parseFloat(billInput.value);
    const serviceValue = parseFloat(serviceSelect.value);

    // 3️⃣ Перевіряємо, чи введено правильну суму
    if (isNaN(billValue) || billValue <= 0) {
        alert("Будь ласка, введіть коректну суму рахунку!");
        return;
    }

    // 4️⃣ Обчислюємо чайові
    const tipAmount = billValue * serviceValue;
    // 5️⃣ Виводимо результат з анімацією
     resultText.style.opacity = "0";
    setTimeout(() => {
        resultText.textContent = `Чайові: ${tipAmount.toFixed(2)} грн`;
        resultText.style.opacity = "1";
    }, 200);
});