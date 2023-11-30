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

var maxCapacity = {
  'Kecil': 5,
  'Sedang': 10,
  'Besar': 15,
  'Jumbo': 20
};

let ukuranKapasitas;
let totalHiasan = 0;
let totalBunga = 0;
let totalKeseluruhan = 0;

function tambahHiasan(element) {
    totalHiasan++
    let count = parseInt(element.parentNode.querySelector('.jumlah').innerHTML);
    count++;
    element.parentNode.querySelector('.jumlah').innerHTML = count;
    console.log(count)

    console.log('total hiasan: ',totalHiasan)
    updateTotal()
}

function kurangHiasan(element) {
  totalHiasan--
  let count = parseInt(element.parentNode.querySelector('.jumlah').innerHTML);
  count--;
  element.parentNode.querySelector('.jumlah').innerHTML = count;
  console.log(count)

  console.log('total hiasan: ',totalHiasan)
  updateTotal()
}

function tambah(element) {

  console.log(maxCapacity[ukuranKapasitas])
  if (totalBunga < maxCapacity[ukuranKapasitas]) {
    totalBunga++
    let count = parseInt(element.parentNode.querySelector('.jumlah').innerHTML);
    count++;
    element.parentNode.querySelector('.jumlah').innerHTML = count;
    console.log(count)
    console.log('totalBunga: ',totalBunga)
  
    // var jumlahElement = element.parentElement.querySelector('.jumlah');
    var size = element.parentElement.parentElement.querySelector('.nama p').innerText.trim();

    console.log('tes')

    

    updateTotal();
  } else {
    alert('Maksimal kapasitas telah tercapai!');
  }

}

function kurang(element) {
  var jumlahElement = element.parentElement.querySelector('.jumlah');
  var jumlah = parseInt(jumlahElement.innerText);

  if (jumlah > 0) {
    totalBunga--;
    let count = parseInt(element.parentNode.querySelector('.jumlah').innerHTML);
    count--;
    element.parentNode.querySelector('.jumlah').innerHTML = count;
    console.log(count)
    console.log('totalBunga: ',totalBunga)
  }
  
  updateTotal();
}

function updateTotal() {

  totalKeseluruhan = totalBunga + totalHiasan

  console.log('total keseluruhan', totalKeseluruhan)

  document.getElementById('total-pesanan').innerText = 'TOTAL PESAN ' + totalKeseluruhan;

  console.log('ini update')

  
}

function addToCart() {
  // Implement your logic to add items to the cart here
  // You can access the quantities and other details from the DOM
  alert('Items added to cart!');
}


function selectSize(size) {
  totalBunga = 0
  var jumlahElements = document.querySelectorAll('.jumlah');

  jumlahElements.forEach(function (element) {
    element.innerText = '0'
  });
  ukuranKapasitas = size;

  // Remove the 'selected' class from all elements
  var allItems = document.querySelectorAll('.item-ukuran');
  allItems.forEach(function (item) {
    console.log(allItems)
    item.classList.remove('selected');
  });

  console.log(allItems)

  // Add the 'selected' class to the clicked element
  var selectedElement = document.querySelector(`.item-ukuran button[data-size='${size}']`);
  console.log(selectedElement)
  selectedElement.parentElement.classList.add('selected');

  alert('Selected Size: ' + size);
}

function selectAddress(addressElement) {
  // Remove the 'selected-address' class from all elements
  var allAddresses = document.querySelectorAll('.address');
  allAddresses.forEach(function (address) {
    address.classList.remove('selected-address');
    address.querySelector('.address-details button').classList.add('d-none');
    address.querySelector('.bi-record-circle').classList.add('d-none');
    address.querySelector('.bi-circle').classList.remove('d-none');
  });

  // Add the 'selected-address' class to the clicked element
  addressElement.classList.add('selected-address');
  addressElement.querySelector('.address-details button').classList.remove('d-none');
  addressElement.querySelector('.bi-circle').classList.add('d-none');
  addressElement.querySelector('.bi-record-circle').classList.remove('d-none');
}

function selectDeliveryOption(optionElement) {
  // Remove the 'selected-option' class from all elements
  var allOptions = document.querySelectorAll('.delivery-option');
  allOptions.forEach(function (option) {
    option.classList.remove('selected-option');
    option.querySelector('.bi-record-circle').classList.add('d-none');
    option.querySelector('.bi-circle').classList.remove('d-none');
  });

  // Add the 'selected-option' class to the clicked element
  optionElement.classList.add('selected-option');
  optionElement.querySelector('.bi-circle').classList.add('d-none');
  optionElement.querySelector('.bi-record-circle').classList.remove('d-none');
}

