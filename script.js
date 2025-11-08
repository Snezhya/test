
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  window.location.href = 'index3.html';
});

document.addEventListener("DOMContentLoaded", function () {
  const showBtn = document.querySelector(".show");
  const passInput = document.querySelector(".password");

  showBtn.addEventListener("click", function () {
    if (passInput.type === "password") {
      passInput.type = "text";
      showBtn.value = "Hide Password";
    } else {
      passInput.type = "password";
      showBtn.value = "Show Password";
    }
  });ojihugyvc
});

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}

document.getElementById("")