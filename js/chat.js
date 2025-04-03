import { db, collection, addDoc, serverTimestamp } from "./firebase-config.js";

// Captura o formulário
document.getElementById("chat-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;

  if (nome && mensagem) {
    try {
      await addDoc(collection(db, "chats"), {
        nome: nome,
        mensagem: mensagem,
        timestamp: serverTimestamp(),
      });

      alert("Mensagem enviada com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }
  }
});
