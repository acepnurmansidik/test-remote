const express = require("express");
const validator = require("validator");
// const { funcCheckUsername, funcCheckEmail } = require("./controller");
const app = express();
const port = 3000;

// Input biodata laki2
const inputBiodataMale = {
  nama: "acep",
  addres: "garut",
  gender: 1,
};
// input biodata perempuan
const inputBiodataFemale = {
  nama: "shabyyla",
  addres: "garut",
  gender: 0,
};
// untuk menampung data
DB_Biodata = [];
// fungsi utk cek gender
const biodata = (data) => {
  const { nama, addres, gender } = data;

  if (gender == 1) {
    return DB_Biodata.push({
      nama,
      addres,
      gender: "Male",
    });
  } else {
    return DB_Biodata.push({
      nama,
      addres,
      gender: "Female",
    });
  }
};
// ditampilkan ke http://localhost:3000/
app.get("/", async (req, res) => {
  biodata(inputBiodataFemale);
  biodata(inputBiodataMale);
  res.send(DB_Biodata);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
