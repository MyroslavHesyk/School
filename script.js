 // Таймер до літа
 function updateCountdown() {
  const now = new Date();
  let target = new Date(now.getFullYear(), 6, 7, 14, 0, 0); // 6 — липень (місяці з 0)

 

  const diff = target - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").textContent =
    `${days} дн ${hours} год ${minutes} хв ${seconds} с`;
}


  setInterval(updateCountdown, 1000);
  updateCountdown();

  // Мотиваційні цитати
  const quotes = [
   "“Успіх приходить до тих, хто не здається.” — Стів Джобс",
"“Можеш усе, якщо віриш у це.” — Арнольд Шварценеггер",
"“Щоб перемогти — потрібно діяти.” — Валерій Залужний",
"“Знання — це сила. Дія — це влада.” — Ентоні Роббінс",
"“Стань кращим на 1% щодня — і досягнеш всього.”",
"“Не бійся йти повільно — бійся стояти на місці.” — Китайське прислів’я",
"“Майбутнє належить тим, хто вірить у красу своєї мрії.” — Елеонора Рузвельт",
"“Труднощі загартовують характер.” — Уїнстон Черчилль",
"“Не чекай ідеального моменту — створи його.”",
"“Роби, що можеш, там, де ти є, з тим, що маєш.” — Теодор Рузвельт",
"“Справжня перемога — перемога над собою.” — Григорій Сковорода",
"“Великі справи починаються з малого кроку.”",
"“Важливе не те, де ти був, а куди йдеш.”",
"“Сила волі — найкращий інструмент успіху.”",
"“Ти сильніший, ніж думаєш.”",
"“Ніколи не пізно стати тим, ким ти хочеш бути.” — Джордж Еліот",
"“Успіх — це не випадковість, а результат рішень.”",
"“Кожен день — новий шанс змінити життя.”",
"“Віра у себе — перший крок до перемоги.”",
"“Падав — піднімись. Втратив — почни знову.”",
"“Мрій. Плануй. Дій.”"
  ];

  function rotateQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[index];
  }

  setInterval(rotateQuote, 10000); // кожні 10 сек


  function openModal(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "flex";
    modalImg.src = img.src;
  }

  function closeModal(event) {
    if (event.target.classList.contains('modal') || event.target.classList.contains('close')) {
      document.getElementById("modal").style.display = "none";
    }
  }

// Функція для переміщення слайдів
function moveSlide(direction) {
  const track = document.querySelector('.slider-track');
  const currentScroll = track.scrollLeft;
  const slideWidth = track.querySelector('img').offsetWidth + 15; // 15px - це gap між слайдами
  
  track.scrollTo({
    left: currentScroll + (slideWidth * direction),
    behavior: 'smooth'
  });
}

// Автоматичне гортання
let autoScrollInterval;

function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    const track = document.querySelector('.slider-track');
    const maxScroll = track.scrollWidth - track.clientWidth;
    
    if (track.scrollLeft >= maxScroll - 10) {
      // Якщо доскролили до кінця - повертаємо на початок
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      // Інакше скролимо далі
      moveSlide(1);
    }
  }, 2000); // Інтервал 2 секунди
}

// Зупиняємо автоматичне гортання при наведенні
function setupSliderHover() {
  const slider = document.querySelector('.gallery-slider');
  
  slider.addEventListener('mouseenter', () => {
    clearInterval(autoScrollInterval);
  });
  
  slider.addEventListener('mouseleave', () => {
    startAutoScroll();
  });
}

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  // Додаємо обробник подій для кнопок слайдера
  document.querySelectorAll('.slider-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });
  
  // Запускаємо автоматичне гортання
  startAutoScroll();
  
  // Налаштовуємо поведінку при наведенні
  setupSliderHover();
});