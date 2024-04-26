// Configuración de tu aplicación Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAo48jIi_YLbn7fy7fhtTn4wiB7HlIslRY",
    authDomain: "usuarios-anima-fe499.firebaseapp.com",
    projectId: "usuarios-anima-fe499",
    storageBucket: "usuarios-anima-fe499.appspot.com",
    appId: "1:681582971447:web:87e95f9977e6e29e9c8db2"
  };
  
  // Inicializa Firebase con la configuración proporcionada
  const app = firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  
  // Capturar el evento submit del formulario de inicio de sesión
  document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita que el formulario se envíe de manera tradicional
      
      // Obtiene los valores de los campos del formulario
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      // Inicia sesión con Firebase Authentication
      const auth = firebase.auth();
      auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Inicio de sesión exitoso, puedes redirigir al usuario o realizar otras acciones
          console.log("Inicio de sesión exitoso");
        })
        .catch((error) => {
          // Maneja los errores de inicio de sesión
          console.error("Error al iniciar sesión:", error);
        });
  });
  
