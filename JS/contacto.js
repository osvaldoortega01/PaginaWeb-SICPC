window.onload = function() {
    const btn = document.getElementById('button');
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        btn.value = 'Enviando...';
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_bktc20k', 'template_lgazytl', this)
            .then(function() {
                alert('Enviado')
                btn.value = 'Enviando...';
                document.getElementById('contact-form').reset();
            }, function(error) {
                btn.value = 'Enviar';
                alert('Ocurrió un error inesperado inténtelo más tarde')
            });
        });

}