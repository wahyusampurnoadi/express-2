// mengimport dari module npm
const express = require("express");
const dotenv = require("dotenv");

// membuat konfigurasi dari file .env
dotenv.config();

const app = express();
// membuat port jika .env error maka akan berjalan di port 8080
const port = process.env.PORT || 8080;

// untuk mengubah format JSON menjadi object
app.use(express.json());
// untuk mengubah URL menjadi objek
app.use(express.urlencoded({ extended: true }));

// endpoint get menjalankan kode ini akan mengektrak parameter query string menggunakan req.query
app.get("/biodata", function (req, res) {
  const nama = req.query.name;
  const tempatLahir = req.query["tempat-lahir"];
  const tanggalLahir = req.query["tanggal-lahir"];
  const alamat = req.query.alamat;

  // nilai digunakan dibuat objek biodata
  const biodata = {
    nama: nama,
    "tempat-lahir": tempatLahir,
    "tanggal-lahir": tanggalLahir,
    alamat: alamat,
  };

  // menampilkan object ke console
  console.log(biodata);
  // dikirim sebagai respon format JSON
  res.json(biodata);
});

// endpoint post akan mengekstrak data dari body
app.post("/biodata", function (req, res) {
  const nama = req.body.name;
  const tempatLahir = req.body["tempat-lahir"];
  const tanggalLahir = req.body["tanggal-lahir"];
  const alamat = req.body.alamat;

  // nilai digunakan dibuat objek biodata
  const biodata = {
    nama: nama,
    "tempat-lahir": tempatLahir,
    "tanggal-lahir": tanggalLahir,
    alamat: alamat,
  };

  // menampilkan object ke console
  console.log(biodata);
  // dikirim sebagai respon format JSON
  res.json(biodata);
});

// untuk menjalankan port
app.listen(port, () => {
  console.log("Server started at http://localhost:" + port);
});
