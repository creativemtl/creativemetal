const navItems = [
  ["Home", "#home"],
  ["Who We Are", "#who-we-are"],
  ["What We Do", "#services"],
  ["Our Work", "#work"],
  ["Testimonials", "#testimonials"],
  ["Contact", "#contact"],
];

const capabilities = ["Custom Fabrication", "Gates & Security", "Balustrades & Railings", "Industrial Steelwork"];

const services = [
  {
    icon: "G",
    title: "Gates and Fence",
    description:
      "Driveway gates, pedestrian gates, fencing, security panels and tailored access-control-ready steelwork.",
  },
  {
    icon: "S",
    title: "Smoking Shelters",
    description:
      "Durable outdoor smoking shelters designed for workplaces, hospitality spaces and commercial properties.",
  },
  {
    icon: "C",
    title: "Curtain Accessories",
    description:
      "Custom steel curtain rods, brackets, rails and accessory pieces made to suit your space and finish.",
  },
  {
    icon: "T",
    title: "Tables, Racks and Stands",
    description: "Steel tables, display racks, workshop stands, retail fixtures and practical custom storage solutions.",
  },
  {
    icon: "B",
    title: "Braai's and Outdoor Pieces",
    description:
      "Built-to-last braai units, outdoor frames, feature pieces and entertainment-area metalwork.",
  },
  {
    icon: "M",
    title: "Gym Equipment, Shelving and Mirrors",
    description:
      "Custom gym equipment, steel shelving and steel frame mirrors fabricated with a clean, professional finish.",
  },
];

const processSteps = [
  ["Tell us what you need", "Share your idea, measurements, photos or plans."],
  ["We assess and quote", "We recommend the best approach and provide a clear quote."],
  ["We fabricate with precision", "Your project is crafted using quality materials and proven workmanship."],
  ["We install and finish", "We complete the job carefully, cleanly and professionally."],
];

const galleryItems = [
  {
    caption: "Gates and fence",
    background: "url('images/gates-and-fence/gate_fabrication_and_installation_2.webp')",
    images: [
      "images/gates-and-fence/gate_fabrication_and_installation_2.webp",
      "images/gates-and-fence/gate_fabrication_and_installation_3.webp",
      "images/gates-and-fence/gate_fabrication_and_installation_4.webp",
      "images/gates-and-fence/gate_fabrication_and_installation_5.webp",
      "images/gates-and-fence/gate_fabrication_and_installation_6.webp",
      "images/gates-and-fence/gate_fabrication_and_installation_7.webp",
      "images/gates-and-fence/gate_fabrication_and_installation_8.webp",
      "images/gates-and-fence/gate_fabrication_and_installation_9.webp",
      "images/gates-and-fence/gate_fabrication_and_installation_10.webp",
    ],
  },
  {
    caption: "Smoking shelters",
    background: "url('images/smoking-shelters/smoking_shelter_01.webp')",
    images: ["images/smoking-shelters/smoking_shelter_01.webp"],
  },
  {
    caption: "Curtain accessories",
    background: "url('images/curtain-accessories/curtain_fabrication_01.webp')",
    images: [
      "images/curtain-accessories/curtain_fabrication_01.webp",
      "images/curtain-accessories/curtain_fabrication_02.webp",
      "images/curtain-accessories/curtain_fabrication_03.webp",
    ],
  },
  {
    caption: "Tables, racks and stands",
    background: "url('images/tables-racks-and-stands/Tables_racks_stands_fabrication_01.webp')",
    images: [
      "images/tables-racks-and-stands/Tables_racks_stands_fabrication_01.webp",
      "images/tables-racks-and-stands/Tables_racks_stands_fabrication_02.webp",
      "images/tables-racks-and-stands/Tables_racks_stands_fabrication_03.webp",
      "images/tables-racks-and-stands/Tables_racks_stands_fabrication_04.webp",
    ],
  },
  {
    caption: "Braai's and outdoor pieces",
    background: "url('images/braais-and-outdoor-pieces/braai_fabrication_01.webp')",
    images: [
      "images/braais-and-outdoor-pieces/braai_fabrication_01.webp",
      "images/braais-and-outdoor-pieces/braai_fabrication_02.webp",
      "images/braais-and-outdoor-pieces/braai_fabrication_03.webp",
      "images/braais-and-outdoor-pieces/braai_fabrication_04.webp",
      "images/braais-and-outdoor-pieces/braai_fabrication_05.webp",
      "images/braais-and-outdoor-pieces/braai_fabrication_06.webp",
      "images/braais-and-outdoor-pieces/braai_fabrication_07.webp",
    ],
  },
  {
    caption: "Gym equipment, shelving and steel frame mirrors",
    background: "url('images/gym-equipment-shelving-and-mirrors/gym_fabrication_04.webp')",
    images: [
      "images/gym-equipment-shelving-and-mirrors/gym_fabrication_04.webp",
      "images/gym-equipment-shelving-and-mirrors/gym_fabrication_01.webp",
      "images/gym-equipment-shelving-and-mirrors/gym_fabrication_02.webp",
      "images/gym-equipment-shelving-and-mirrors/gym_fabrication_03.webp",
      "images/gym-equipment-shelving-and-mirrors/gym_fabrication_05.webp",
      "images/gym-equipment-shelving-and-mirrors/shelving_fabrication_01.webp",
      "images/gym-equipment-shelving-and-mirrors/shelving_fabrication_02.webp",
      "images/gym-equipment-shelving-and-mirrors/shelving_fabrication_03.webp",
    ],
  },
];

const choices = [
  ["Custom craftsmanship", "Built around your practical needs and design preferences."],
  ["Quality materials", "Durable materials selected for the environment and application."],
  ["Clear communication", "Honest advice, straightforward quotes and no confusing process."],
  ["Professional finish", "Work that performs properly and looks considered from every angle."],
];

const testimonials = [
  [
    "Creative Metal transformed our entrance with a beautiful custom gate. The workmanship was exceptional, communication was clear throughout, and the finished result exceeded our expectations. They also made several other pieces for us, all of which are incredibly well made and finished to a very high standard.",
    "Nick Hall, Gqeberha",
  ],
  [
    "Superb workmanship. Gary only delivers perfection. He understands what the client wants and makes sure that you get what you have imagined. My slam lock security gates have given me back enjoyment of my home.",
    "Claudette Hancocks",
  ],
  [
    "Great service and excellent quality of work.",
    "Garrick Barber",
  ],
];

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function renderNav() {
  const linkMarkup = navItems.map(([label, href]) => `<a href="${href}">${label}</a>`).join("");
  const headerNav = qs("[data-nav]");
  const footerNav = qs("[data-footer-nav]");

  headerNav.innerHTML = `
    <div class="site-nav__links">
      ${linkMarkup}
      <a class="button button--primary" href="#contact">Request a Quote</a>
    </div>
  `;
  footerNav.innerHTML = linkMarkup;
}

function renderContent() {
  qs("[data-capabilities]").innerHTML = capabilities
    .map((item, index) => `<article class="capability reveal"><span>0${index + 1}</span><strong>${item}</strong></article>`)
    .join("");

  qs("[data-services]").innerHTML = services
    .map(
      (service, index) => `
        <article class="service-card reveal" data-index="${String(index + 1).padStart(2, "0")}">
          <span class="service-icon" aria-hidden="true">${service.icon}</span>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <a href="#contact" class="text-link">Enquire</a>
        </article>
      `,
    )
    .join("");

  qs("[data-process]").innerHTML = processSteps
    .map(
      ([title, description], index) => `
        <article class="process-card reveal" data-step="${String(index + 1).padStart(2, "0")}">
          <h3>${title}</h3>
          <p>${description}</p>
        </article>
      `,
    )
    .join("");

  qs("[data-gallery]").innerHTML = galleryItems
    .map(
      ({ caption, background, images }, index) => `
        <button class="gallery-card reveal ${images.length ? "gallery-card--photo" : ""}" type="button" ${images.length ? "" : `style="--gallery-bg: ${background}"`} data-caption="${caption}" data-gallery-index="${index}">
          ${images.length ? `<img class="gallery-card__image" src="${images[0]}" alt="" loading="lazy" decoding="async" />` : ""}
          <span class="gallery-card__caption">
            <strong>${caption}</strong>
            <span>${images.length ? "View gallery" : "View"}</span>
          </span>
        </button>
      `,
    )
    .join("");

  qs("[data-choices]").innerHTML = choices
    .map(
      ([title, description]) => `
        <article class="choice-card reveal">
          <h3>${title}</h3>
          <p>${description}</p>
        </article>
      `,
    )
    .join("");

  qs("[data-testimonials]").innerHTML = testimonials
    .map(
      ([quote, author]) => `
        <article class="testimonial-card reveal">
          <div class="stars" aria-label="Placeholder five star review">★★★★★</div>
          <blockquote>
            <p>“${quote}”</p>
            <cite>—  ${author}</cite>
          </blockquote>
        </article>
      `,
    )
    .join("");
}

function initHeader() {
  const header = qs("[data-header]");
  const toggle = qs("[data-nav-toggle]");
  const nav = qs("[data-nav]");
  const syncHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
  const closeMenu = ({ returnFocus = false } = {}) => {
    if (!header.classList.contains("is-open")) return;

    header.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    if (returnFocus) toggle.focus();
  };

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  qsa("a", nav).forEach((link) => {
    link.addEventListener("click", () => closeMenu());
  });

  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu({ returnFocus: true });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) closeMenu();
  }, { passive: true });

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
}

function initReveal() {
  const revealItems = qsa(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
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
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initLightbox() {
  const lightbox = qs("[data-lightbox]");
  const art = qs("[data-lightbox-art]");
  const caption = qs("[data-lightbox-caption]");
  const thumbs = qs("[data-lightbox-thumbs]");
  const close = qs("[data-lightbox-close]");

  const setLightboxImage = (image, label) => {
    art.style.setProperty("--gallery-bg", `url('${image}')`);
    art.setAttribute("aria-label", label);
  };

  qsa("[data-gallery-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = galleryItems[Number(button.dataset.galleryIndex)];
      const [mainImage] = item.images;

      if (mainImage) {
        setLightboxImage(mainImage, item.caption);
        thumbs.innerHTML = item.images
          .map(
            (image, index) => `
              <button class="lightbox__thumb ${index === 0 ? "is-active" : ""}" type="button" style="--thumb-bg: url('${image}')" data-thumb-image="${image}">
                <span class="sr-only">View ${item.caption} image ${index + 1}</span>
              </button>
            `,
          )
          .join("");
      } else {
        art.style.setProperty("--gallery-bg", button.style.getPropertyValue("--gallery-bg"));
        art.removeAttribute("aria-label");
        thumbs.innerHTML = "";
      }

      caption.textContent = item.caption;
      if (typeof lightbox.showModal === "function") {
        lightbox.showModal();
      }
    });
  });

  thumbs.addEventListener("click", (event) => {
    const thumb = event.target.closest("[data-thumb-image]");
    if (!thumb) return;

    setLightboxImage(thumb.dataset.thumbImage, caption.textContent);
    qsa(".lightbox__thumb", thumbs).forEach((button) => button.classList.toggle("is-active", button === thumb));
  });

  close.addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });
}

function initForm() {
  const form = qs("[data-form]");
  const status = qs("[data-form-status]");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const fields = qsa("input[required], select[required], textarea[required]", form);
    const invalidFields = fields.filter((field) => !field.checkValidity());

    fields.forEach((field) => field.classList.toggle("is-invalid", !field.checkValidity()));

    if (invalidFields.length) {
      status.textContent = "Please complete the highlighted fields so we can respond properly.";
      invalidFields[0].focus();
      return;
    }

    status.textContent = "Thank you. This demo form is ready to connect to your chosen enquiry backend.";
    form.reset();
  });
}

renderNav();
renderContent();
initHeader();
initReveal();
initLightbox();
