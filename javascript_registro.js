// Capturar el evento submit del formulario de registro
document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional
    
    // Obtiene los valores de los campos del formulario de registro
    const nombre = document.getElementById('nombre').value;
    const emailRegistro = document.getElementById('email_registro').value;
    const passwordRegistro = document.getElementById('password_registro').value;
    
    // Crea la cuenta con Firebase Authentication
    firebase.auth().createUserWithEmailAndPassword(emailRegistro, passwordRegistro)
        .then((userCredential) => {
            // Registro exitoso, puedes redirigir al usuario o realizar otras acciones
            console.log("Cuenta creada exitosamente");
        })
        .catch((error) => {
            // Maneja los errores de creación de cuenta
            console.error("Error al crear cuenta:", error);
        });
});
