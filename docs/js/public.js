const express = require('express');
const app = express();

// 設定靜態檔案的資料夾
app.use(express.static('public'));
console.log('public.js is running');

// 啟動伺服器
app.listen(3000, () => {
  console.log('Server is running on http://127.0.0.1:3000');
});
