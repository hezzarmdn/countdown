// ====== KONFIGURASI LOGIN ======
const CONFIG = {
    username: "admin",     // ubah sesuai kebutuhan
    password: "12345"      // ubah sesuai kebutuhan
};
// ===============================

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const msg = document.getElementById("msg");

function showSuccess() {
    document.getElementById("login-area").style.display = "none";
    document.getElementById("success-area").style.display = "block";
}

loginBtn.addEventListener("click", function() {
    const user = usernameInput.value;
    const pass = passwordInput.value;

    if (user === CONFIG.username && pass === CONFIG.password) {
        showSuccess();
    } else {
        msg.textContent = "Username atau password salah.";
    }
});
