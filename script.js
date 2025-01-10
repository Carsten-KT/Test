// Sobald die Seite geladen ist, werden Event-Listener registriert
document.addEventListener("DOMContentLoaded", function() {
  const scrollBtn = document.getElementById("scrollToChat");
  const chatSection = document.getElementById("chatSection");
  const sendBtn = document.getElementById("sendBtn");
  const userInput = document.getElementById("userInput");
  const chatContainer = document.getElementById("chatContainer");
  const contactForm = document.getElementById("contactForm");
  const formFeedback = document.getElementById("formFeedback");

  // Button zum Scrollen in den Chat-Bereich
  if (scrollBtn && chatSection) {
    scrollBtn.addEventListener("click", () => {
      chatSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Sendet eine neue Chatnachricht, wenn der Button geklickt wird
  if (sendBtn && userInput && chatContainer) {
    sendBtn.addEventListener("click", () => {
      const text = userInput.value.trim();
      if (text) {
        // Nutzer-Nachricht anzeigen
        const userMessage = document.createElement("div");
        userMessage.className = "message user";
        userMessage.innerHTML = `
          <span class="sender">Du:</span>
          <span class="text">${text}</span>
        `;
        chatContainer.appendChild(userMessage);

        // Kurz darauf eine fiktive Bot-Antwort generieren
        setTimeout(() => {
          const botMessage = document.createElement("div");
          botMessage.className = "message bot";
          botMessage.innerHTML = `
            <span class="sender">Bot:</span>
            <span class="text">Danke für deine Frage! Ich bin nur eine Demo. :)</span>
          `;
          chatContainer.appendChild(botMessage);
          // Automatisch nach unten scrollen
          chatContainer.scrollTop = chatContainer.scrollHeight;
        }, 500);

        userInput.value = "";
        // Automatisch nach unten scrollen
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    });
  }

  // Einfaches Kontaktformular: Verhindert das Standard-Submit-Verhalten und gibt eine Meldung aus
  if (contactForm && formFeedback) {
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Verhindere, dass die Seite neu geladen wird
      // Einfacher Feedback-Text
      formFeedback.textContent = "Vielen Dank für deine Nachricht! Wir melden uns bald.";
      // Formular zurücksetzen
      contactForm.reset();
    });
  }
});
