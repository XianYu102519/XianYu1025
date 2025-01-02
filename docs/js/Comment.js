document.addEventListener("DOMContentLoaded", function () {
   // 評分功能
   document.querySelectorAll(".rating .star").forEach(star => {
      star.addEventListener("click", function () {
         const ratingValue = this.dataset.value;
         const ratingContainer = this.parentElement;
         
         // 更新評分顯示
         ratingContainer.querySelectorAll(".star").forEach(star => {
            star.style.color = star.dataset.value <= ratingValue ? "gold" : "#ccc";
         });

         // 更新平均評分 (模擬更新，可以用後端來處理持久化)
         const averageRating = ratingContainer.querySelector(".average-rating");
         averageRating.textContent = `${ratingValue}.0`;
      });
   });

   // 提交評論
   document.querySelectorAll(".submit-review").forEach(button => {
      button.addEventListener("click", function () {
         const productId = this.dataset.id;
         const newReviewTextarea = document.querySelector(`#new-review-${productId}`);
         const reviewText = newReviewTextarea.value.trim();

         if (reviewText) {
            const reviewsList = document.querySelector(`#reviews-${productId}`);
            const newReview = document.createElement("li");
            newReview.textContent = reviewText;
            reviewsList.appendChild(newReview);

            // 清空輸入框
            newReviewTextarea.value = "";

            // 在此可添加 AJAX 或 API 請求，將新評論發送到後端
            console.log(`提交評論：${reviewText} (商品ID: ${productId})`);
         } else {
            alert("請輸入評論內容！");
         }
      });
   });
});

 