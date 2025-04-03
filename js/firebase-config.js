// Importa o Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Configuração do Firebase (copie do Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyDgGfpw9-zAy4KgFmGsMk7Nkc4SXZ36dHk",
  authDomain: "agencia-gerais.firebaseapp.com",
  projectId: "agencia-gerais",
  storageBucket: "agencia-gerais.firebasestorage.app",
  messagingSenderId: "949016224939",
  appId: "1:949016224939:web:925d0d4e51034b5d2f83ee"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exporta para usar em outros arquivos
export { db, collection, addDoc, serverTimestamp };
