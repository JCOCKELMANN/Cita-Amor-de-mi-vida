document.getElementById("showInvitation").addEventListener("click", function () {
    document.getElementById("invitation").classList.remove("hidden");
    this.classList.add("hidden"); // Oculta el botón "Pulsa aquí"
  });
  
  function accept() {
    document.getElementById("response").classList.remove("hidden");
  }
  