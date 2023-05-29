const express = require('express');
const path = require('path');
const multer = require('multer');

const app = express();
const port = 5500;

app.set('port', port);

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, __dirname + '/public/images');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
  })
  
const upload = multer({ storage: storage })

app.post("/api", upload.array("files"), (req, res) => {

    console.log(req.body); 
    console.log(req.files); 
    res.json({ message: "File(s) uploaded successfully" });

});

app.listen(port, () => {
  console.log(`Сервер запущено на порту ${port}`);
});