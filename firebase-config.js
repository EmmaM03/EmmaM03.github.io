// Configuración de tu aplicación Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAo48jIi_YLbn7fy7fhtTn4wiB7HlIslRY",
    authDomain: "usuarios-anima-fe499.firebaseapp.com",
    projectId: "usuarios-anima-fe499",
    storageBucket: "usuarios-anima-fe499.appspot.com",
    appId: "1:681582971447:web:87e95f9977e6e29e9c8db2"
};

// Inicializa Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
