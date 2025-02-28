


const data = [
    {
        "title": "تفسير الشعراوي : سورة الفاتحة، الجزء الاول",
        "link": "https://app.quizwhizzer.com/play?code=51174",
        "text": `📌 بداية نزول القرآن الكريم وارتباطه بسم الله<br>
        📌  القدرة الإلهية والتسخير في الكون <br>
        📌 فضل البدء باسم الله وأهميته في الأعمال والقرآن <br>
        📌 تفسير معاني الرحمن والرحيم ودور البسملة في القرآن والصلاة <br>
        📌 رحمة الله وعدله في القرآن والسنة <br>
        📌 الحمد لله ونعمه التي تسبق الوجود الإنساني <br>"`,

        "image": "./images/Fatiha1.webp",
        "questions": 72,
        "isNew": true,
        "isActive": true
    },
    {
        "title": "تفسير الشعراوي : سورة الفاتحة، الجزء الثاني",
        "link": "#",
        "text": "هذا هو العنصر الثاني من الفئة ١.",
        "image": "./images/Fatiha2.webp",
        "questions": "In Progress",
        "isNew": false,
        "isActive": false
    }
]


const container = document.getElementById("card-container");
container.innerHTML = ""; // Clear previous cards

data.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Determine tag labels (optional)
    let tags = "";
    if (item.isNew) tags += `<span class="tag new">جديد</span>`;
    if (item.isActive) tags += `<span class="tag active">نشط</span>`;
    card.onclick = () => window.open(item.link, "_blank"); // Open link in new tab

    card.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <div class="card-content">
                        <h2>${item.title}</h2>
                        <p>${item.text}</p>
                    </div>
                    <div class="card-footer">
                        <span>${item.questions} أسئلة</span>
                        ${tags}
                    </div>
                `;

    container.appendChild(card);
});