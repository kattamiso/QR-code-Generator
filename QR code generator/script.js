let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

// // Check if there's a stored value in localStorage
// if (localStorage.getItem("qrTextValue")) {
//   qrText.value = localStorage.getItem("qrTextValue");
//   generateQR();
// }

function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("show-img");

    // localStorage.setItem("qrTextValue", qrText.value);
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}

// Add an event listener for the "Enter" key
qrText.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    generateQR();
    event.preventDefault(); // Prevent the form from submitting (if applicable)
  }
});
