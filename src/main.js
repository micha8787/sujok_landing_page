import "./style.css";

/** Contact details — update here if they change. */
const THERAPIST_NAME = "אילה שפיר";
const PHONE_DISPLAY = "054-784-8776";
const PHONE_E164 = "972547848776";
const CITY = "ירושלים";

function applyPlaceholders() {
  document.querySelectorAll("[data-therapist-name]").forEach((el) => {
    el.textContent = THERAPIST_NAME;
  });

  document.querySelectorAll("[data-phone-display]").forEach((el) => {
    el.textContent = PHONE_DISPLAY;
  });

  document.querySelectorAll("[data-city]").forEach((el) => {
    el.textContent = CITY;
  });

  document.title = `${THERAPIST_NAME} · סו-ג'וק · ${CITY}`;

  const waLinks = document.querySelectorAll("[data-whatsapp-link]");
  const phoneLinks = document.querySelectorAll("[data-phone-link]");
  const wa = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(
    "שלום אילה, אשמח לשמוע עוד על טיפול סו-ג'וק",
  )}`;

  waLinks.forEach((a) => {
    a.href = wa;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  });
  phoneLinks.forEach((a) => {
    a.href = `tel:+${PHONE_E164}`;
  });
}

function setupReveals() {
  const sections = document.querySelectorAll(".section__inner");
  sections.forEach((el) => el.classList.add("reveal"));

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    sections.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.22, rootMargin: "0px 0px -8% 0px" },
  );

  sections.forEach((el) => observer.observe(el));
}

applyPlaceholders();
setupReveals();
