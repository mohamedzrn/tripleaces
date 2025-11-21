const crestSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#d92228" />
      <stop offset="100%" stop-color="#8f1d2c" />
    </linearGradient>
  </defs>
  <rect width="200" height="200" rx="28" fill="#f2f3f5" />
  <circle cx="100" cy="70" r="46" fill="url(#g)" />
  <path d="M66 74c10-6 26-6 36 0 10 6 26 6 36 0" fill="none" stroke="#f7e9d7" stroke-width="8" stroke-linecap="round" />
  <path d="M62 118c14 14 32 24 38 24s24-10 38-24" fill="none" stroke="#1f2937" stroke-width="6" stroke-linecap="round" />
  <text x="50%" y="86" text-anchor="middle" font-family="'Inter', system-ui" font-size="24" font-weight="700" fill="#f7e9d7">ACES</text>
  <text x="50%" y="136" text-anchor="middle" font-family="'Inter', system-ui" font-size="14" font-weight="600" fill="#111827">TRIPLE ACES V.C</text>
  <text x="50%" y="154" text-anchor="middle" font-family="'Inter', system-ui" font-size="12" font-weight="600" fill="#374151">EST. 2020</text>
</svg>`;

const crestImage = `data:image/svg+xml,${encodeURIComponent(crestSvg)}`;

const bioConfig = {
  handle: "tripleacesvc",
  bioLines: [
    "Serve, Spike, Inspire — Nepali",
    "Youth Rising in London, Ontario",
  ],
  profileImage: crestImage,
  socials: [
    {
      id: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/tripleacesvc",
      icon: "M12 4H8c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4h4c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4zm0 11H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3zm-2-7a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm3.5-6a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z",
    },
    {
      id: "facebook",
      label: "Facebook",
      url: "https://www.facebook.com/tripleacesvolleyballclub",
      icon: "M14 2H9.5C6.5 2 4 4.5 4 7.5V10H2v4h2v6h4v-6h3.5l.5-4H8v-2.5A1.5 1.5 0 0 1 9.5 6H14V2z",
    },
  ],
  links: [
    {
      id: "facebook-card",
      label: "Facebook",
      url: "https://www.facebook.com/tripleacesvolleyballclub",
      image: crestImage,
      initial: "FB",
    },
    {
      id: "instagram-card",
      label: "Instagram",
      url: "https://www.instagram.com/tripleacesvc",
      initial: "IG",
    },
  ],
};

function createIcon(pathD) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 20 20");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  svg.classList.add("icon");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", pathD);
  path.setAttribute("fill", "currentColor");

  svg.appendChild(path);
  return svg;
}

function renderProfile() {
  document.getElementById("handle").textContent = bioConfig.handle;
  document.getElementById("bio").innerHTML = bioConfig.bioLines.join("<br />");

  const avatar = document.getElementById("avatar");
  avatar.style.backgroundImage = `url('${bioConfig.profileImage}')`;
  avatar.style.backgroundSize = "cover";
  avatar.style.backgroundPosition = "center";

  const actions = document.getElementById("social-actions");
  bioConfig.socials.forEach((social) => {
    const button = document.createElement("a");
    button.className = "icon-button";
    button.href = social.url;
    button.target = "_blank";
    button.rel = "noreferrer";
    button.title = social.label;
    button.appendChild(createIcon(social.icon));
    actions.appendChild(button);
  });
}

function renderLinks() {
  const list = document.getElementById("link-list");

  bioConfig.links.forEach((link) => {
    const item = document.createElement("li");

    const anchor = document.createElement("a");
    anchor.className = "link-card";
    anchor.href = link.url;
    anchor.target = "_blank";
    anchor.rel = "noreferrer";

    if (link.image) {
      const img = document.createElement("img");
      img.className = "link-preview";
      img.src = link.image;
      img.alt = `${link.label} preview`;
      anchor.appendChild(img);
    }

    const footer = document.createElement("div");
    footer.className = "link-footer";

    const pill = document.createElement("div");
    pill.className = "link-pill";
    pill.textContent = link.initial;

    const title = document.createElement("p");
    title.className = "link-label";
    title.textContent = link.label;

    const arrow = document.createElement("span");
    arrow.className = "link-arrow";
    arrow.textContent = "→";

    footer.appendChild(pill);
    footer.appendChild(title);
    footer.appendChild(arrow);

    anchor.appendChild(footer);

    item.appendChild(anchor);
    list.appendChild(item);
  });
}

renderProfile();
renderLinks();
