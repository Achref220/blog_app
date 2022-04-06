const express = require('express');
const dotenv = require("dotenv");
const multer = require("multer");
const path = require('path');
const cors = require('cors')

const connectDB = require("./config/connectDB");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
dotenv.config();
app.use(express.json());


connectDB();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    }, filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.use("/images", express.static(path.join(__dirname, "/images")))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
    })
}

const upload = multer({storage: storage});
app.post("/api/upload", upload.single("file"), (req, res) =>{
    res.status(200).json("file has been uploaded")
})





app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))