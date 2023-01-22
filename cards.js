let projects = [
  {
    background: `linear-gradient(245.73deg, #FFA28D 0%, #EF47D4 100%)`,
    button: {
      text: "Start writing",
      url: "https://github.com/sargent-coding/jumblejot"
    },
    desc: "Simply productive, productivly simple.",
    icon: "/icons/jj.png",
    name: "Jumblejot"
  },
  {
    background: `var(--blue)`,
    button: {
      text: "Browse our icons",
      url: "https://github.com/sargent-coding/icons"
    },
    desc: "Pretty icons designed by us.",
    icon: "/icons/icons.png",
    name: "Icons"
  },
  {
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(90deg, #FF4455 0%, #FFAA33 18.75%, #FFCC00 36.98%, #00CC66 49.48%, #22BBFF 68.23%, #1177FF 83.85%, #7755EE 100%)`,
    button: {
      text: "Learn more",
      url: "https://github.com/sargent-coding/colours"
    },
    desc: "A colourful library for colourful projects.",
    icon: "/icons/colours.png",
    name: "Colours"
  },
]

let team = [
  {
    name: "Aetinx",
    pfp: "https://github.com/aetinx.png",
    roles: ["Founder"],
    url: "https://aetinx.saco.dev"
  },
  {
    name: "Risograph",
    pfp: "https://github.com/risograph.png",
    roles: ["UX", "Marketing"],
    url: "https://risograph.github.io"
  },
  {
    name: "Ejaz Ali",
    pfp: "https://github.com/ejaz4.png",
    roles: ["Back-end"],
    url: "https://ejaz.is-a.dev"
  },
  {
    name: "Lumins",
    pfp: "https://github.com/luminslo.png",
    roles: ["API", "Authentication"],
    url: "https://github.com/luminslo"
  }
]

for (let item of projects) {
  document.getElementById("projectsList").innerHTML += `
  <div class="project-card" style="background: ${item.background}">
    <div class="list-icon" style="background-image: url('${item.icon}')"></div>
    <div class="list-info">
      <span class="list-title">${item.name}</span>
      <span class="list-desc">${item.desc}</span>
    </div>
    <a class="button list-button" href="${item.button.url}">${item.button.text}</a>
  </div>
  `
}

for (let member of team) {
  document.getElementById("teamList").innerHTML += `
  <div>
    <div class="list-pfp" style="background-image: url('${member.pfp}')"></div>
    <div class="list-info">
      <span class="list-title">${member.name}</span>
      <span class="list-desc">${member.roles.join("&ensp;&bull;&ensp;")}</span>
    </div>
    <a class="button list-button" href="${member.url}">${member.url.split("https://")[1]}</a>
  </div>
  `
}