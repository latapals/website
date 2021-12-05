// Force HTTPS
if (location.protocol == "http:")
  location.replace("https://" + location.host + location.pathname);

// Banners
var bannerData = {
  id: "uyy9878y98h982mmmkasd9k9j9j9j",
  text: "Welcome to our new site!",
  buttons: [
    [
      "OK",
      `localStorage.setItem(bannerData['id'], 'read');
       document.getElementById('banner').remove();`
    ]
  ],
  background: "var(--blue)",
  colour: "white"
}

let banner = document.createElement("div");
banner.id = "banner";
banner.innerHTML += bannerData.text;
let span = document.createElement("span");
for (let i in bannerData["buttons"]) {
  span.innerHTML +=
    `<button onclick="${bannerData["buttons"][i][1]}"
             style="background: ${bannerData["colour"]};
                    color: ${bannerData["background"]}">
       ${bannerData["buttons"][i][0]}
     </button>`
}
span.style.display = "grid";
span.style.gridAutoFlow = "column";
span.style.gridGap = "10px";
banner.append(span);
banner.style.background = bannerData["background"];
banner.style.color = bannerData["colour"];
document.body.prepend(banner);

if (localStorage.getItem(bannerData["id"]) == "read") {
  document.getElementById("banner").remove();
}

// Account button
if (true) {
  document.getElementById("account").style.display = "none";
  
}