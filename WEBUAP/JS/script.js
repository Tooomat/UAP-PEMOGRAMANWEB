list_item = [
  { kode: "001", barang: "Barang A", harga: 10000 },
  { kode: "002", barang: "Barang B", harga: 20000 },
  { kode: "003", barang: "Barang C", harga: 30000 },
];

function submitOnClick() {
  var kode = document.getElementById("input-kode").value;
  var nbarang = document.getElementById("input-n").value;
  var choseitem = list_item.find((item) => item.kode === kode);

  if (choseitem) {
    var totalBayar = choseitem.harga * nbarang;
    alert("total pembayaran adalah: " + totalBayar);
    var uang = prompt("masukkan uang user:")
    if(uang<totalBayar) {
        alert("uang anda kurang")
    }else{
        var kembalian = uang-totalBayar
        alert("total kembalian anda adalah: "+kembalian)
    }
  } else {
    alert("Kode barang " + choseitem + " tidak ditemukan");
  }
}
