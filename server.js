const express = require('express');
const path = require('path');
const app = express();
const PORT = 80;

// السماح بقراءة الملفات الثابتة مثل html وغيرها
app.use(express.static(path.join(__dirname)));

// تحديد المسار الرئيسي لفتح index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});