// Hàm đăng nhập
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const message = document.getElementById("login-message");

  if (user === "Hạnh Vũ" && pass === "31082024") {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    startCounter();
  } else {
    message.innerText = "Sai tên đăng nhập hoặc mật khẩu 😢";
  }
}

// Hàm đếm ngày yêu
function startCounter() {
  const startDate = new Date("2024-08-31T00:00:00");

  function updateCounter() {
    const now = new Date();
    const diffTime = now - startDate;
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diffTime / (1000 * 60)) % 60);
    const seconds = Math.floor((diffTime / 1000) % 60);

    document.getElementById(
      "days-counter"
    ).innerText = `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây 💕`;
  }

  updateCounter();
  setInterval(updateCounter, 1000);
}
