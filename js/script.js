import { predictions } from "./data.js";

const predictionBtn = document.getElementById('predictionBtn');
const predictionRes = document.getElementById('predictionRes');

let currentIndex = 0;
let isClick = false;
let predictionInterval;

function startInterval() {
    predictionInterval = setInterval(() => {

    }, 500);
}