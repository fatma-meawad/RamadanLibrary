
const container = document.getElementById("card-container");
container.innerHTML = ""; // Clear previous cards

data.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");


    card.innerHTML = `
        <a href="${item.link}" target="_blank"><img src="${item.image}" alt="${item.title}"></a>
        <div class="card-content">
            <h5>${item.title}</h5>
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
