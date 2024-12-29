//function updateUI(data) {
//    let items = document.getElementsByClassName("quantity");
//    for (let item of items)
//        item.innerText = data.total_quantity;
//
//    let amounts = document.getElementsByClassName("quantity");
//    for (let item of amounts)
//        item.innerText = data.total_amount.toLocaleString();
//}

function addToCart(id, name, type, image, des, price) {
    fetch("/api/cart", {
        method: "POST",
        body: JSON.stringify({
            "id": id,
            "name": name,
            "type": type,
            "image": image,
            "des": des,
            "price": price
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(data => {
       console.info(data)
       let d = document.getElementsByClassName("quantity")
       for (let i =0; i< d.length; i++)
            d[i].innerText = data.total_quantity
    })
}

function updateCart(medicineId, obj) {
    fetch(`/api/cart/${medicineId}`, {
        method: "put",
        body: JSON.stringify({
            "quantity": obj.value
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json()).then(data => {
       let d = document.getElementsByClassName("quantity")
       for (let i =0; i< d.length; i++)
            d[i].innerText = data.total_quantity

       let d2 = document.getElementsByClassName("cart-amount")
       for (let i =0; i< d.length; i++)
            d2[i].innerText = data.total_amount.toLocaleString("en-US")
    })
}

function deleteCart(medicineId) {
    if (confirm("Bạn chac chan xoa khong?") == true) {
        fetch(`/api/cart/${medicineId}`, {
        method: "delete",
    }).then(res => res.json()).then(data => {
       let d = document.getElementsByClassName("quantity")
       for (let i =0; i< d.length; i++)
            d[i].innerText = data.total_quantity

       let d2 = document.getElementsByClassName("cart-amount")
       for (let i =0; i< d.length; i++)
            d2[i].innerText = data.total_amount.toLocaleString("en-US")

       let c = document.getElementById(`cart${medicineId}`)
       c.style.display = "none"
    }).catch(err => console.info(err)) //js promise
    }
}


document.getElementById('submit').addEventListener('click',submitForm)
async function submitForm(){
  // Lấy giá trị từ ô cart-amount
    const cartAmountElement = document.querySelector('.cart-amount');
    if (!cartAmountElement) {
        console.error('Element with class cart-amount not found!');
        alert('No total amount found.');
        return;
    }

    // Lấy số tiền (dạng chuỗi) và chuyển đổi sang số
    const cartAmountText = cartAmountElement.textContent.trim();
    const cartAmount = parseFloat(cartAmountText.replace(/,/g, ''));
  const response = await fetch('/create-payment-link',{
    method:'post',
    headers: {
                'Content-Type': 'application/json',
            },
    body: JSON.stringify({
                amount: cartAmount, // Tổng số tiền
            }),
  })
  const payment = await response.json()
  console.log(payment)
  window.open(payment.checkoutUrl);
}
