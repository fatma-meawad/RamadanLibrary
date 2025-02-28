const data = [
    {
        "title": "<strong>تفسير الشعراوي : سورة الفاتحة، الجزء الاول</strong>",
        "link": "https://app.quizwhizzer.com/play?code=51174",
        "reference": "https://shamela.ws/book/1083/1",
        "text": `📌 بداية نزول القرآن الكريم وارتباطه بسم الله<br>
        📌 القدرة الإلهية والتسخير في الكون <br>
        📌 فضل البدء باسم الله وأهميته في الأعمال والقرآن <br>
        📌 تفسير معاني الرحمن والرحيم ودور البسملة في القرآن والصلاة <br>
        📌 رحمة الله وعدله في القرآن والسنة <br>
        📌 الحمد لله ونعمه التي تسبق الوجود الإنساني <br>`,
        "image": "./images/Fatiha1.webp",
        "questions": 72
    },
    {
        "title": "<strong>تفسير الشعراوي : سورة الفاتحة، الجزء الثاني</strong>",
        "link": "#",
        "reference": "https://shamela.ws/book/1083/28",
        "text": "هذا هو العنصر الثاني من الفئة ١.",
        "image": "./images/Fatiha2.webp",
        "questions": "In Progress"
    }
];

const container = document.getElementById("card-container");
container.innerHTML = ""; // Clear previous cards

data.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");


    card.innerHTML = `
        <a href="${item.link}" target="_blank"><img src="${item.image}" alt="${item.title}"></a>
        <div class="card-content">
            <h2>${item.title}</h2>
            <p>${item.text}</p>
        </div>
        <div class="card-footer">
            <span class="clickable">
                📖 <a href="${item.link}" target="_blank">${item.questions} سؤال</a>
            </span>
            <span class="clickable">
                🌐 <a href="${item.reference}" target="_blank">المصدر الأصلي</a>
            </span>
            <span class="clickable report">
                ⚠️ <a href="https://github.com/fatma-meawad/RamadanLibrary/discussions/new?category=general&title=إبلاغ%20عن%20مشكلة%20في%20${encodeURIComponent(item.title)}" 
                target="_blank">إبلاغ عن مشكلة</a>
            </span>
        </div>
    `;

    container.appendChild(card);
});
