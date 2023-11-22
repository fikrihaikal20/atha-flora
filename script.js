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