 // 取得數量輸入框與總金額欄位
 const quantityInputs = document.querySelectorAll('.quantity');
 const totalAmount = document.getElementById('totalAmount');
 
 // 綁定事件監聽器，監聽數量變化
 quantityInputs.forEach(input => {
   input.addEventListener('input', () => {
     updateCart();
   });
 });
 
 function updateCart() {
   let total = 0; // 初始化總金額
   const rows = document.querySelectorAll('tbody tr'); // 取得所有商品行
 
   rows.forEach(row => {
     const price = parseInt(row.querySelector('.price').innerText.replace('$', '')); // 單價
     const quantity = parseInt(row.querySelector('.quantity').value); // 數量
     const subtotal = price * quantity; // 計算小計
     row.querySelector('.subtotal').innerText = `$${subtotal}`; // 更新小計
     total += subtotal; // 累加總金額
   });
 
   // 更新總金額
   totalAmount.innerText = `$${total}`;
 }
 
 // 初始化購物車總金額
 updateCart();