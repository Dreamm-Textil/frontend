const express = require('express');
const path = require('path');
const multer = require('multer');

const app = express();
const port = 5500;

app.set('port', port);
// Налаштування шляху до статичних файлів
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// Маршрут для головної сторінки
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Обробка інших маршрутів та запитів
// Start by creating some disk storage options:
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, __dirname + '/public/images');
    },
    // Sets file(s) to be saved in uploads folder in same directory
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
    // Sets saved filename(s) to be original filename(s)
  })
  
// Set saved storage options:
const upload = multer({ storage: storage })

app.post("/api", upload.array("files"), (req, res) => {
// Sets multer to intercept files named "files" on uploaded form data

    console.log(req.body); // Logs form body values
    console.log(req.files); // Logs any files
    res.json({ message: "File(s) uploaded successfully" });

});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущено на порту ${port}`);
});