function addToCart(itemName, price) {
  const cart = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
  cart.push({ itemName, price });
  localStorage.setItem('cartItems', JSON.stringify(cart));

}

  displayCart();

function cancelItem() {
  // Реализуйте здесь логику отмены выбранного товара из корзины
  // Например, удаление элемента из списка или обновление данных в localStorage
  // После этого обновите отображение корзины вызовом функции displayCart()
  displayCart();
}
  
function updateTotal() {
    const cart = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
    let totalAmount = 0;
  
    cart.forEach(item => {
      totalAmount += item.price;
    });
  
    const total = document.getElementById('totalAmount');
    total.innerText = totalAmount.toFixed(2);
  }
  
  function displayCart() {
    const cart = document.querySelector('.cart');
    const cartItems = cart.querySelector('.cart-items');
    cartItems.innerHTML = '';
  
    const cartData = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
  
    cartData.forEach(item => {
      const newItem = document.createElement('li');
      newItem.innerText = `${item.itemName} - $${item.price}`;
      cartItems.appendChild(newItem);
    });
  
    updateTotal();
  }
  
  // Вызов функции для отображения корзины при загрузке страницы
  displayCart();
