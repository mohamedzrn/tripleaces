const bioConfig = {
  handle: "tripleacesvc",
  bio: "Serve, Spike, Inspire — Nepali youth rising in London, Ontario",
  socials: [
    {
      id: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/tripleacesvc",
      icon: "M8 3c2-2 6-2 8 0s2 6 0 8l-8 8-8-8c-2-2-2-6 0-8s6-2 8 0z",
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
      label: "Facebook Page",
      description: "See match photos, schedules, and club news.",
      url: "https://www.facebook.com/tripleacesvolleyballclub",
      initial: "FB",
    },
    {
      id: "instagram-card",
      label: "Instagram",
      description: "Highlights, reels, and behind-the-scenes moments.",
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
  document.getElementById("handle").textContent = `@${bioConfig.handle}`;
  document.getElementById("bio").textContent = bioConfig.bio;

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

    const badge = document.createElement("div");
    badge.className = "link-avatar";
    badge.textContent = link.initial;

    const meta = document.createElement("div");
    meta.className = "link-meta";

    const title = document.createElement("p");
    title.className = "link-label";
    title.textContent = link.label;

    const desc = document.createElement("p");
    desc.className = "link-desc";
    desc.textContent = link.description;

    meta.appendChild(title);
    meta.appendChild(desc);

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
