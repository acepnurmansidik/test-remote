const express = require("express");
const validator = require("validator");
// const { funcCheckUsername, funcCheckEmail } = require("./controller");
const app = express();
const port = 3000;

// input dari user
const cekUsername = "acepnurmansidik";
const cekEmail = "acepnurmansidik@gmail.com";
const cekPassword = "acepd434cAB";
const words = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "L",
  "K",
  "J",
  "H",
  "G",
  "F",
  "D",
  "S",
  "A",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];
// function untuk validasi username
const funcCheckUsername = (username) => {
  if (
    !validator.isLowercase(username) &&
    validator.isLength(username, { min: 6 })
  ) {
    //   kondisi false
    return "Minimal 6 karakter, serta harap masukan huruf kecil";
  } else {
    //   kondisi true
    return "Username: Valid";
  }
};

// function utk validasi email
const funcCheckEmail = (email) => {
  if (!validator.isEmail(email) && !validator.isLowercase(email)) {
    //   kondisi false
    return "email invalid, harap cek kembali email anda";
  } else {
    //   kondisi true
    return "Email: Valid";
  }
};

// funtion untuk cek jumlah huruf kapital yang ada dalam string
const cekJumlahKapital = () => {
  // perulangan utk cek jumlah huruf kapital, yang akna disave kedalam array
  const word = [];
  for (let i = 0; i < words.length; i++) {
    word.push((cekPassword.match(new RegExp(words[i], "g")) || []).length);
  }
  //   function utk menjumlahkanjumla huruf kaital adalam array
  const countWord = word.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  return countWord;
};

// function utk validasi opassword
const funcCheckPassword = (password) => {
  const count = cekJumlahKapital();
  //   kondisi true
  if (validator.isLength(password, { min: 8 })) {
    if (validator.isAlphanumeric(password) && count > 1) {
      return "Password: Valid";
    }
  }
  //   kondisi false
  else {
    return "minimal masukan 8 karakter";
  }
};

// funtion di panggil lalu di tampilkan ke http://localhost:3000/
app.get("/", async (req, res) => {
  const usernameAfterCheck = await funcCheckUsername(cekUsername);
  const emailAfterCheck = await funcCheckEmail(cekEmail);
  const passwordAfterCheck = await funcCheckPassword(cekPassword);
  res.send(
    `${usernameAfterCheck} | ${emailAfterCheck} | ${passwordAfterCheck}`
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
