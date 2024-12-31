/* Filter Price */
const btnDownPrice = document.querySelector(".btn-down-price");
const btnUpPrice = document.querySelector(".btn-up-price");
const filterPrice = document.querySelector(".filter-price .filter-value");
btnDownPrice.addEventListener("click", function () {
    filterPrice.classList.add("open");
    btnDownPrice.style.display = "none";
    btnUpPrice.style.display = "block";
})

btnUpPrice.addEventListener("click", function () {
    filterPrice.classList.remove("open");
    btnUpPrice.style.display = "none";
    btnDownPrice.style.display = "block";
})

/* Filter Type Medicine */
const btnDownType = document.querySelector(".btn-down-type");
const btnUpType = document.querySelector(".btn-up-type");
const filterTypeMedicine = document.querySelector(".filter-type-medicine .filter-value");
btnDownType.addEventListener("click", function () {
    filterTypeMedicine.classList.add("open");
    btnDownType.style.display = "none";
    btnUpType.style.display = "block";
})

btnUpType.addEventListener("click", function () {
    filterTypeMedicine.classList.remove("open");
    btnUpType.style.display = "none";
    btnDownType.style.display = "block";
})

/* Filter Name Medicine */
const btnDownName = document.querySelector(".btn-down-name");
const btnUpName = document.querySelector(".btn-up-name");
const filterNameMedicine = document.querySelector(".filter-name-medicine .filter-value");
btnDownName.addEventListener("click", function () {
    filterNameMedicine.classList.add("open");
    btnDownName.style.display = "none";
    btnUpName.style.display = "block";
})

btnUpName.addEventListener("click", function () {
    filterNameMedicine.classList.remove("open");
    btnUpName.style.display = "none";
    btnDownName.style.display = "block";
})

// Lọc theo giá
function filterByPrice(order) {
    const cards = document.querySelectorAll('.card-item');
    const sortedCards = Array.from(cards).sort((a, b) => {
        const priceA = parseInt(a.querySelector('.card-item__price').textContent.replace(/\D/g, ''), 10);
        const priceB = parseInt(b.querySelector('.card-item__price').textContent.replace(/\D/g, ''), 10);
        return order === 'asc' ? priceA - priceB : priceB - priceA;
    });

    const container = document.querySelector('.card-list');
    container.innerHTML = ''; // Xóa danh sách cũ
    sortedCards.forEach(card => container.appendChild(card)); // Thêm danh sách mới
}

// Lọc theo loại thuốc
function filterByType() {
    const input = document.getElementById('type-medicine').value.toLowerCase();
    const cards = document.querySelectorAll('.card-item');
    cards.forEach(card => {
        const type = card.querySelector('.card-item__type span').textContent.toLowerCase();
        card.style.display = type.includes(input) ? '' : 'none';
    });
}

// Lọc theo tên thuốc
function filterByName() {
    const input = document.getElementById('name-medicine').value.toLowerCase();
    const cards = document.querySelectorAll('.card-item');
    cards.forEach(card => {
        const name = card.querySelector('.card-item__name span').textContent.toLowerCase();
        card.style.display = name.includes(input) ? '' : 'none';
    });
}
