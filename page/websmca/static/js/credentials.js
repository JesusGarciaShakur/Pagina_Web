const firebaseConfig = {
    apiKey: "AIzaSyCGeO9X01brIfhPZphJ2NupsBHHqZL14ps",
    authDomain: "newiot-632c1.firebaseapp.com",
    databaseURL: "https://newiot-632c1-default-rtdb.firebaseio.com",
    projectId: "newiot-632c1",
    storageBucket: "newiot-632c1.appspot.com",
    messagingSenderId: "58822421527",
    appId: "1:58822421527:web:f071d4a1bf3020b6554052"
};
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Obtener elementos del formulario
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const registerForm = document.getElementById('register-form');

// Escuchar el evento submit del formulario
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Verificar que las contraseñas coincidan
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    // Crear usuario con correo electrónico y contraseña
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Usuario registrado exitosamente
            var user = userCredential.user;
            alert('Usuario registrado exitosamente: ' + user.email);
        })
        .catch((error) => {
            // Error al registrar usuario
            var errorCode = error.code;
            var errorMessage = error.message;
            alert('Error al registrar usuario: ' + errorCode + ' - ' + errorMessage);
            // Verificar si el error es debido a un correo electrónico ya en uso
            if (errorCode === 'auth/email-already-in-use') {
                alert('Este correo electrónico ya está registrado');
            }
        });
});
