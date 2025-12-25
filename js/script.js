import { predictions } from "./data.js";

const predictionBtn = document.getElementById('predictionBtn');
const predictionRes = document.getElementById('predictionRes');

let currentIndex = 0;
let isClick = false;
let predictionInterval;

function startInterval() {
    predictionInterval = setInterval(() => {
        if (currentIndex >= predictions.length) {
            currentIndex = 0;
        }

        predictionRes.textContent = predictions[currentIndex]["text"]
        predictionRes.style.opacity = 0.3;

        currentIndex++;
    }, 50);
}

predictionBtn.addEventListener('click', (event) => {
    if (!isClick) {
        clearInterval(predictionInterval);
        predictionRes.style.opacity = 1;
        event.currentTarget.style.backgroundColor = "red";
    }
    else {
        startInterval();
        event.currentTarget.style.backgroundColor = "#357b35";
    }

    isClick = !isClick;
});

startInterval();