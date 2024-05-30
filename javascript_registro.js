document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional
    
    // Obtiene los valores de los campos del formulario de registro
    const nombre = document.getElementById('nombre').value;
    const emailRegistro = document.getElementById('email_registro').value;
    const passwordRegistro = document.getElementById('password_registro').value;
    
    // Crea la cuenta con Firebase Authentication
    firebase.auth().createUserWithEmailAndPassword(emailRegistro, passwordRegistro)
        .then((userCredential) => {
            // Registro exitoso
            console.log("Cuenta creada exitosamente");
            // Redirigir al usuario a la página de inicio de sesión
            window.location.href = "pagina_de_inicio_de_sesion.html"; // Cambia "pagina_de_inicio_de_sesion.html" por la URL de tu página de inicio de sesión
        })
        .catch((error) => {
            // Maneja los errores de creación de cuenta
            console.error("Error al crear cuenta:", error);
        });
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional
      
    // Obtiene los valores de los campos del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
      
    // Inicia sesión con Firebase Authentication
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Inicio de sesión exitoso
            console.log("Inicio de sesión exitoso");
        })
        .catch((error) => {
            // Maneja los errores de inicio de sesión
            console.error("Error al iniciar sesión:", error);
        });
});
