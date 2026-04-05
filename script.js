const form = document.getElementById("contactForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = form[0].value;
    const email = form[1].value;
    const msg = form[2].value;

    message.textContent = `Asante ${name}, tumepokea message yako!`;
    message.style.color = "green";

    form.reset();
});
