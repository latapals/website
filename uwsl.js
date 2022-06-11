class UWSLNav extends HTMLElement {
  #update() {
    this.innerHTML = ""
    
    this.logo = document.createElement("div")
    this.logo.innerHTML = this.options.logo

    this.links = document.createElement("div")
    for (let item of this.options.links) {
      let link = document.createElement("a")
      link.innerText = item[0]
      link.href = item[1]
      if (link.hash == "") link.target = "_target"
      this.links.append(link)
    }

    this.account = document.createElement("div")
    this.loginButton = document.createElement("a")
    this.loginButton.innerText = "Log in"

    this.append(this.logo, this.links, this.account)
  }
  
  constructor(options) {
    super();
    this.options = options;
  }

  connectedCallback() {
    if (!this.options) return
    this.#update()
  }
};

customElements.define("uhpl-nav", UHPLNav);

let nav = new UWSLNav({
    logo: `svg code goes here`,
    links: [
      ["Products", "#products"],
      ["Team", "#team"],
      ["Community", "https://discord.gg/ZYwF9q8ChB"]
    ],
    account: true
  })

  document.body.prepend(nav)