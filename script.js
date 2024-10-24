document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Formulaire soumis avec succès !");
        document.getElementById('formMessage').textContent = "Merci, " + name + " ! Votre message a été envoyé.";
        this.reset();
    } else {
        alert("Veuillez remplir tous les champs !");
    }
});
