document.getElementById("contact-form")?.addEventListener("submit", async function(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const button = form.querySelector("button");

    button.disabled = true;
    button.innerText = "Gönderiliyor...";

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            alert("Mesajınız başarıyla gönderildi!");
            form.reset();
        } else {
            alert("Bir hata oluştu. Lütfen Formspree ayarlarınızı veya limitinizi kontrol edin.");
        }
    } catch (error) {
        alert("Bağlantı hatası oluştu.");
    } finally {
        button.disabled = false;
        button.innerText = "Mesajı Gönder";
    }
});
