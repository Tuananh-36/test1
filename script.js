// script.js - Thêm tính năng tương tác cho trang web

document.addEventListener("DOMContentLoaded", function () {
    // ---------------------------------------------------------
    // 1. Tự động đánh dấu (Highlight) menu trang hiện tại
    // ---------------------------------------------------------
    const currentLocation = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        const linkHref = link.getAttribute("href");
        // Nếu liên kết trùng với tên tệp hiện tại (hoặc mặc định là index.html)
        if (linkHref === currentLocation || (currentLocation === "" && linkHref === "index.html")) {
            link.classList.add("active");
        }
    });

    // ---------------------------------------------------------
    // 2. Lời chào theo thời gian thực (Sáng / Chiều / Tối)
    // ---------------------------------------------------------
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        const hour = new Date().getHours();
        let message = "";

        if (hour < 12) {
            message = "🌅 Chúc bạn một buổi sáng tốt lành!";
        } else if (hour < 18) {
            message = "☀️ Chúc bạn một buổi chiều làm việc hiệu quả!";
        } else {
            message = "🌙 Chúc bạn một buổi tối vui vẻ!";
        }

        greetingElement.textContent = message;
    }

    // ---------------------------------------------------------
    // 3. Chức năng Chuyển đổi Chế độ Tối (Dark Mode Toggle)
    // ---------------------------------------------------------
    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            // Cập nhật text trên nút bấm
            if (document.body.classList.contains("dark-mode")) {
                themeBtn.textContent = "☀️ Chế độ sáng";
            } else {
                themeBtn.textContent = "🌙 Chế độ tối";
            }
        });
    }
});
