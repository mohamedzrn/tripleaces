const bioConfig = {
  handle: "tripleacesvc",
  bio: "Serve, Spike, Inspire — Nepali Youth Rising in London, Ontario",
  socials: [
    {
      id: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/tripleacesvc",
      icon: "M7 2h6a5 5 0 015 5v6a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z M10 7.25a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5z M16 5.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
    },
    {
      id: "facebook",
      label: "Facebook",
      url: "https://www.facebook.com/tripleacesvolleyballclub",
      icon: "M14 3h-3c-1.7 0-3 1.3-3 3v3H6v3h2v6h3v-6h2.5l.5-3H11V6.5C11 6 11.4 5.5 12 5.5h2V3z",
    },
  ],
  links: [
    {
      id: "facebook-card",
      type: "featured",
      label: "Facebook",
      url: "https://www.facebook.com/tripleacesvolleyballclub",
    },
    {
      id: "instagram-card",
      type: "small",
      label: "Instagram",
      url: "https://www.instagram.com/tripleacesvc",
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

function createLogoSVG(size = 84) {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 200 200");
  svg.setAttribute("width", size);
  svg.setAttribute("height", size);

  const shield = document.createElementNS(svgNS, "path");
  shield.setAttribute(
    "d",
    "M100 12c26 0 46 12 46 12v66c0 37-46 72-46 72s-46-35-46-72V24s20-12 46-12z"
  );
  shield.setAttribute("fill", "#fff");
  shield.setAttribute("stroke", "#b91c1c");
  shield.setAttribute("stroke-width", "4");

  const ball = document.createElementNS(svgNS, "circle");
  ball.setAttribute("cx", "100");
  ball.setAttribute("cy", "50");
  ball.setAttribute("r", "20");
  ball.setAttribute("fill", "#b91c1c");
  ball.setAttribute("stroke", "#7c3aed");
  ball.setAttribute("stroke-width", "3");

  const text = document.createElementNS(svgNS, "text");
  text.setAttribute("x", "50%");
  text.setAttribute("y", "150");
  text.setAttribute("text-anchor", "middle");
  text.setAttribute("font-size", "18");
  text.setAttribute("fill", "#0f172a");
  text.setAttribute("font-family", "Inter, system-ui, sans-serif");
  text.setAttribute("font-weight", "700");
  text.textContent = "TRIPLE ACES V.C.";

  svg.appendChild(shield);
  svg.appendChild(ball);
  svg.appendChild(text);
  return svg;
}

function renderProfile() {
  document.getElementById("handle").textContent = bioConfig.handle;
  document.getElementById("bio").textContent = bioConfig.bio;

  // place logo inside avatar
  const avatar = document.getElementById("avatar");
  avatar.innerHTML = "";
  avatar.appendChild(createLogoSVG(90));

  const actions = document.getElementById("social-actions");
  actions.innerHTML = "";
  bioConfig.socials.forEach((social) => {
    const a = document.createElement("a");
    a.className = "icon-button";
    a.href = social.url;
    a.target = "_blank";
    a.rel = "noreferrer";
    a.title = social.label;
    a.appendChild(createIcon(social.icon));
    actions.appendChild(a);
  });
}

function renderLinks() {
  const list = document.getElementById("link-list");

  list.innerHTML = "";

  bioConfig.links.forEach((link) => {
    const item = document.createElement("li");

    if (link.type === "featured") {
      const card = document.createElement("a");
      card.className = "link-card featured";
      card.href = link.url;
      card.target = "_blank";
      card.rel = "noreferrer";

      const imgWrap = document.createElement("div");
      imgWrap.className = "card-image";
      imgWrap.appendChild(createLogoSVG(120));

      const label = document.createElement("p");
      label.className = "link-label";
      label.textContent = link.label;

      const kebab = document.createElement("button");
      kebab.className = "kebab";
      kebab.title = "More";
      kebab.textContent = "⋮";
      kebab.addEventListener("click", (e) => {
        e.preventDefault();
        window.open(link.url, "_blank");
      });

      card.appendChild(imgWrap);
      const metaRow = document.createElement("div");
      metaRow.style.display = "flex";
      metaRow.style.justifyContent = "space-between";
      metaRow.style.alignItems = "center";
      metaRow.appendChild(label);
      metaRow.appendChild(kebab);
      card.appendChild(metaRow);

      item.appendChild(card);
      list.appendChild(item);
      return;
    }

    // small card
    const anchor = document.createElement("a");
    anchor.className = "link-card";
    anchor.href = link.url;
    anchor.target = "_blank";
    anchor.rel = "noreferrer";

    const badge = document.createElement("div");
    badge.className = "small-icon";
    // render instagram icon in badge for instagram entry
    if (link.id === "instagram-card") {
      const ic = createIcon(bioConfig.socials.find((s) => s.id === "instagram").icon);
      ic.style.width = "20px";
      ic.style.height = "20px";
      badge.appendChild(ic);
    }

    const meta = document.createElement("div");
    meta.className = "link-meta";

    const title = document.createElement("p");
    title.className = "link-label";
    title.textContent = link.label;

    meta.appendChild(title);

    const arrow = document.createElement("span");
    arrow.className = "link-arrow";
    arrow.textContent = "→";

    anchor.appendChild(badge);
    anchor.appendChild(meta);
    anchor.appendChild(arrow);

    item.appendChild(anchor);
    list.appendChild(item);
  });
}

renderProfile();
renderLinks();
