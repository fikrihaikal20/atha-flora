document.addEventListener("DOMContentLoaded", function () {
    // Ambil elemen-elemen yang diperlukan
    var menuButton = document.querySelector(".menu");
    var closeIcon = document.querySelector(".sidebar li:first-child a");
    var sidebar = document.querySelector(".main-container");

    // Tambahkan event listener untuk klik pada tombol menu
    menuButton.addEventListener("click", function () {
      // Toggle kelas 'd-none' pada elemen sidebar
      sidebar.classList.toggle("d-none");
    });

    // Tambahkan event listener untuk klik pada ikon penutup
    closeIcon.addEventListener("click", function (event) {
      event.preventDefault();
      // Tambahkan kelas 'd-none' pada elemen sidebar
      sidebar.classList.add("d-none");
    });
});

function tambah(element) {
  let count = parseInt(element.parentNode.querySelector('.jumlah').innerHTML);
  count++;
  element.parentNode.querySelector('.jumlah').innerHTML = count;
}

function kurang(element) {
  let count = parseInt(element.parentNode.querySelector('.jumlah').innerHTML);
  if (count > 0) {
      count--;
      element.parentNode.querySelector('.jumlah').innerHTML = count;
  }
}

$("#arrowUp").click(function () {
  $(".danaLogo, .gopayLogo, .ovoLogo").removeClass("d-none").addClass("d-flex");
  $("#arrowUp").addClass("d-none");
  $("#arrowDown").removeClass("d-none");
});

$("#arrowDown").click(function () {
  $(".danaLogo, .gopayLogo, .ovoLogo").removeClass("d-flex").addClass("d-none");
  $("#arrowUp").removeClass("d-none");
  $("#arrowDown").addClass("d-none");
});

$("#arrowUp2").click(function () {
  $(".bcaLogo, .briLogo, .bniLogo").removeClass("d-none").addClass("d-flex");
  $("#arrowUp2").addClass("d-none");
  $("#arrowDown2").removeClass("d-none");
});

$("#arrowDown2").click(function () {
  $(".bcaLogo, .briLogo, .bniLogo").removeClass("d-flex").addClass("d-none");
  $("#arrowUp2").removeClass("d-none");
  $("#arrowDown2").addClass("d-none");
});