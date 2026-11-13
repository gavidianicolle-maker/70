// Fecha de celebración en hora de Perú (UTC-5): 23/12/2026 a la 1:00 p. m.
const eventDate = new Date("2026-12-23T13:00:00-05:00").getTime();

function updateCountdown() {
  const now = Date.now();
  const distance = eventDate - now;
  const note = document.getElementById("countdown-note");

  if (distance <= 0) {
    ["days", "hours", "minutes", "seconds"].forEach(id => {
      document.getElementById(id).textContent = "00";
    });
    note.textContent = "¡Hoy celebramos los 70 años de Jesús Roberto!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Invitación personalizada mediante parámetros de URL.
// Ejemplo: ?invitado=Familia%20Gavidia&pases=4
const params = new URLSearchParams(window.location.search);
const guest = params.get("invitado");
const passes = Number.parseInt(params.get("pases"), 10);
const guestName = document.getElementById("guest-name");
const guestPasses = document.getElementById("guest-passes");
const guestCaption = document.getElementById("guest-caption");
const inviteHelp = document.getElementById("invite-help");

if (guest && Number.isInteger(passes) && passes > 0 && passes <= 30) {
  guestName.textContent = guest;
  guestPasses.textContent = String(passes).padStart(2, "0");
  guestCaption.textContent = `Esta invitación ha sido preparada especialmente para ${guest}.`;
  inviteHelp.textContent = "Tu invitación es personal. Por favor, confirma cuántas personas asistirán.";
} else {
  guestName.textContent = "Tu familia";
  guestPasses.textContent = "—";
  guestCaption.textContent = "Cada invitación personalizada indicará aquí el nombre y los pases asignados.";
  inviteHelp.textContent = "Vista general de la invitación. Para ver un pase personalizado, abre el enlace que te compartió la familia.";
}

// Configuración de WhatsApp
const WHATSAPP_NUMBER = "51978318143";

const rsvpText = guest && Number.isInteger(passes) && passes > 0 && passes <= 30
  ? `Hola, confirmo la invitación para los 70 años de Jesús Roberto Gavidia Iverico. Invitación a nombre de ${guest}, con ${passes} pases. Asistiremos: `
  : "Hola, quisiera confirmar mi asistencia a los 70 años de Jesús Roberto Gavidia Iverico. Asistiremos: ";

const rsvpButton = document.getElementById("rsvp-button");

if (rsvpButton) {
  rsvpButton.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(rsvpText)}`;
}


// Botón de música: abre la búsqueda de la canción; los navegadores no permiten
// reproducir audio automáticamente sin interacción del visitante.
document.getElementById("music-toggle").addEventListener("click", () => {
  window.open("https://www.youtube.com/results?search_query=Queen+We+Are+The+Champions+official", "_blank", "noopener");
});

/* FUNCIONAMIENTO DEL CARRUSEL */

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".photo-carousel");
  if (!carousel) return;

  const track = carousel.querySelector(".carousel-track");
  const slides = [...track.querySelectorAll(".carousel-slide")];
  const prev = carousel.querySelector(".prev");
  const next = carousel.querySelector(".next");
  const dotsContainer = document.querySelector(".carousel-dots");

  let current = 0;
  let timer;

  slides.forEach((slide, index) => {
    const dot = document.createElement("button");
    dot.className = "carousel-dot";
    dot.setAttribute("aria-label", `Ver fotografía ${index + 1}`);
    dot.addEventListener("click", () => showSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = [...dotsContainer.children];

  function showSlide(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === current);
    });
  }

  function startAutoPlay() {
    stopAutoPlay();
    timer = setInterval(() => showSlide(current + 1), 5000);
  }

  function stopAutoPlay() {
    clearInterval(timer);
  }

  prev.addEventListener("click", () => {
    showSlide(current - 1);
    startAutoPlay();
  });

  next.addEventListener("click", () => {
    showSlide(current + 1);
    startAutoPlay();
  });

  carousel.addEventListener("mouseenter", stopAutoPlay);
  carousel.addEventListener("mouseleave", startAutoPlay);

  showSlide(0);
  startAutoPlay();
});
