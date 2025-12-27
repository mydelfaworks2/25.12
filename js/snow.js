// Функция создания снежинки
function createSnowflake() {
    // Создаем элемент изображения
    const snowflake = document.createElement("img");
    // Добавляем класс для стилей
    snowflake.classList.add("snowflake");
    // Указываем путь к картинке снежинки
    snowflake.src = "snowflake.png";

    // Настройка альтернативного текста (для доступности)
    snowflake.alt = "Снежинка";

    // 1. Случайная позиция по ширине (от 0 до 100vw)
    // Math.random() дает число от 0 до 1
    // Умножаем на 100 чтобы получить проценты
    snowflake.style.left = Math.random() * 100 + "vw";

    // 2. Рандомный размер по формуле: Math.random() * (max - min) + min
    // Пусть размер будет от 15px до 40px
    const minSize = 15; // минимальный размер
    const maxSize = 40; // максимальный размер
    const randomSize = Math.random() * (maxSize - minSize) + minSize;

    // Задаем размер для картинки (ширина и высота одинаковые)
    snowflake.style.width = randomSize + "px";
    snowflake.style.height = randomSize + "px";

    // 3. Случайная прозрачность от 0.4 до 1
    // min = 0.4, max = 1
    const minOpacity = 0.4;
    const maxOpacity = 1;
    snowflake.style.opacity =
        Math.random() * (maxOpacity - minOpacity) + minOpacity;

    // 4. Случайная скорость падения от 3 до 8 секунд
    const minSpeed = 3;
    const maxSpeed = 8;
    const randomSpeed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
    snowflake.style.animationDuration = randomSpeed + "s";

    // 5. Добавим немного случайного вращения
    snowflake.style.transform = `rotate(${Math.random() * 360}deg)`;

    // Добавляем снежинку в контейнер
    document.getElementById("snow-container").append(snowflake);
}

// Создаем снежинки каждые 150ms (немного реже для производительности)
setInterval(createSnowflake, 150);

// Создаем несколько снежинок сразу при загрузке
for (let i = 0; i < 20; i++) {
    // Создаем с задержкой, чтобы они появлялись не все сразу
    setTimeout(() => createSnowflake(), i * 100);

}
