// Google 登入按鈕事件處理
document.getElementById('google-login-btn').addEventListener('click', function() {
    // 假設 Google 登入成功
    alert('Google 登入成功！');
    
    // 顯示登入成功訊息並顯示返回首頁按鈕
    document.getElementById('login-status').style.display = 'block';
    document.getElementById('login-status').innerHTML = '<p>Google 登入成功！</p><button class="btn" id="home-btn">返回首頁</button>';
    
    // 點擊返回首頁按鈕時跳轉回首頁
    document.getElementById('home-btn').addEventListener('click', function() {
        window.location.href = '/public/html/member.html';  // 替換為首頁的URL
    });
});

// LINE 登入按鈕事件處理
document.getElementById('line-login-btn').addEventListener('click', function() {
    // 假設 LINE 登入成功
    alert('LINE 登入成功！');
    
    // 顯示登入成功訊息並顯示返回首頁按鈕
    document.getElementById('login-status').style.display = 'block';
    document.getElementById('login-status').innerHTML = '<p>LINE 登入成功！</p><button class="btn" id="home-btn">返回首頁</button>';
    
    // 點擊返回首頁按鈕時跳轉回首頁
    document.getElementById('home-btn').addEventListener('click', function() {
        window.location.href = '/public/html/member.html';  // 替換為首頁的URL
    });
});

// 註冊按鈕事件處理
document.getElementById('register-btn').addEventListener('click', function() {
    // 假設註冊成功，並顯示登入成功訊息
    alert('註冊成功！登入成功！');
    
    // 顯示登入成功訊息並顯示返回首頁按鈕
    document.getElementById('login-status').style.display = 'block';
    document.getElementById('login-status').innerHTML = '<p>登入成功！</p><button class="btn" id="home-btn">返回首頁</button>';
    
    // 點擊返回首頁按鈕時跳轉回首頁
    document.getElementById('home-btn').addEventListener('click', function() {
        window.location.href = '/public/html/member.html';  // 替換為會員的URL
    });
});
