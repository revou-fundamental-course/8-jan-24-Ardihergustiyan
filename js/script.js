function calculate() {
    // Mendapatkan nilai sisi dari input
    var sideLength = parseFloat(document.getElementById("side").value);
  
    // Memeriksa apakah nilai sisi valid
    if (isNaN(sideLength) || sideLength <= 0) {
      alert("Masukkan panjang sisi yang valid.");
      return;
    }
  
    // Menghitung luas dan keliling persegi
    var area = sideLength * sideLength;
    var perimeter = 4 * sideLength;
  
    // Menampilkan hasil pada elemen span
    document.getElementById("square-area-formula").textContent = area.toFixed(2);
    document.getElementById("rectangle-area-formula").textContent = perimeter.toFixed(2);
  
    // Menampilkan container hasil
    document.getElementById("result-container").style.display = "block";
  }
  
  function resetForm() {
    // Mereset nilai pada input
    document.getElementById("calculator-form").reset();
  
    // Mereset hasil menjadi tanda "-"
    document.getElementById("square-area-formula").textContent = "-";
    document.getElementById("rectangle-area-formula").textContent = "-";
  
    // Menyembunyikan container hasil
    document.getElementById("result-container").style.display = "none";
  }
  