let banner = document.createElement("div")
banner.innerHTML = `<banner style="--banner: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(90deg, #FF4455 0%, #FFAA33 18.75%, #FFCC00 36.98%, #00CC66 49.48%, #22BBFF 68.23%, #1177FF 83.85%, #7755EE 100%), linear-gradient(245.73deg, #FFA28D 0%, #EF47D4 100%)">
  Happy pride month!
</banner>`
banner = banner.children[0]
document.body.prepend(banner)
