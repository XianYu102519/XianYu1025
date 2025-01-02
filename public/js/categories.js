const cart = [];
        const cartIcon = document.getElementById('cart-icon');
        const cartWindow = document.getElementById('cart-window');
        const cartItems = document.getElementById('cart-items');
        const cartCount = document.getElementById('cart-count');
        const totalPrice = document.getElementById('total-price');
        const closeCart = document.getElementById('close-cart');
// 加入購物車功能
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
        const image = button.getAttribute('data-image');

        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name, price, image, quantity: 1 });
        }
        updateCart();
    });
});

// 更新購物車內容
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    let itemCount = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        itemCount += item.quantity;

        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <p>${item.name}</p>
                <p>$${item.price} x ${item.quantity}</p>
                <button class="quantity-btn decrease" data-name="${item.name}">-</button>
                <button class="quantity-btn increase" data-name="${item.name}">+</button>
            </div>
            <button class="remove-item" data-name="${item.name}">移除</button>
        `;
        cartItems.appendChild(div);
    });

    cartCount.textContent = itemCount;
    totalPrice.textContent = total.toFixed(2);

    // 綁定增加和減少按鈕
    document.querySelectorAll('.quantity-btn.increase').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const item = cart.find(item => item.name === name);
            if (item) item.quantity++;
            updateCart();
        });
    });

    document.querySelectorAll('.quantity-btn.decrease').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const item = cart.find(item => item.name === name);
            if (item && item.quantity > 1) {
                item.quantity--;
            } else if (item && item.quantity === 1) {
                const index = cart.findIndex(item => item.name === name);
                if (index !== -1) cart.splice(index, 1);
            }
            updateCart();
        });
    });

    // 綁定移除按鈕
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const index = cart.findIndex(item => item.name === name);
            if (index !== -1) cart.splice(index, 1);
            updateCart();
        });
    });
}

cartIcon.addEventListener('click', () => {
    cartWindow.style.display = 'block';
});

closeCart.addEventListener('click', () => {
    cartWindow.style.display = 'none';
});





