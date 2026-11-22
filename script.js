// رسالة ترحيبية عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    console.log("تم تحميل السيرة الذاتية الرقمية بنجاح");

    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transition = "0.3s";
        });
    });
});

// تأثير بسيط على زر واتساب
const whatsappButton = document.querySelector(".whatsapp-btn");

if (whatsappButton) {
    whatsappButton.addEventListener("click", () => {
        alert("سيتم تحويلك إلى واتساب للتواصل مع أحمد عبد الباسط باجنيد");
    });
}