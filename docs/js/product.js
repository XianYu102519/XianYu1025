document.querySelectorAll('.products-container .box').forEach((product, productIndex) => {
    const stars = product.querySelectorAll('.star');
    const reviewList = product.querySelector('.review-list');
    const submitButton = product.querySelector('.submit-review');
    const reviewText = product.querySelector('.review-text');

    // 先載入存儲的評論和評分（如果有的話）
    loadReviews(productIndex);

    // 星星評分事件
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            stars.forEach((s, i) => {
                s.classList.toggle('active', i <= index);
            });
        });
    });

    // 提交評論事件
    submitButton.addEventListener('click', () => {
        const text = reviewText.value.trim();
        const rating = Array.from(stars).filter((star) => star.classList.contains('active')).length;

        if (!text) {
            alert('請撰寫評論內容！');
            return;
        }

        // 新增評論
        const newReview = document.createElement('div');
        newReview.innerHTML = `
            <p><strong>評分：</strong>${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</p>
            <p>${text}</p>
        `;
        reviewList.prepend(newReview); // 最新評論放最上

        // 儲存評論和評分到 LocalStorage
        saveReview(productIndex, text, rating);

        // 清空輸入框
        reviewText.value = '';
        stars.forEach((star) => star.classList.remove('active'));
    });

    // 儲存評論和評分
    function saveReview(productIndex, text, rating) {
        let reviews = JSON.parse(localStorage.getItem('reviews')) || {};
        if (!reviews[productIndex]) {
            reviews[productIndex] = [];
        }
        reviews[productIndex].push({ text, rating });
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }

    // 載入存儲的評論和評分
    function loadReviews(productIndex) {
        let reviews = JSON.parse(localStorage.getItem('reviews')) || {};
        if (reviews[productIndex]) {
            reviews[productIndex].forEach(review => {
                // 顯示評論
                const newReview = document.createElement('div');
                newReview.innerHTML = `
                    <p><strong>評分：</strong>${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</p>
                    <p>${review.text}</p>
                `;
                reviewList.appendChild(newReview);
            });
        }
    }
});

