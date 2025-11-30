// Atur tanggal tujuan countdown (format: YYYY-MM-DD HH:MM:SS)
const target = new Date("2025-11-30 22:00:00").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const diff = target - now;

    // Jika waktu habis
    if (diff <= 0) {
        document.getElementById("timer").innerHTML = "WAKTU HABIS";
        return;
    }

    // Perhitungan waktu
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    // Tampilkan ke HTML
    document.getElementById("timer").innerHTML =
        `${days}d ${hours}h ${mins}m ${secs}s`;
}

// Update setiap 1 detik
setInterval(updateTimer, 1000);

// Jalankan saat halaman pertama kali dibuka
updateTimer();
