const loadDoc = (name) => {
  name = name.replace("#", "");
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("article").innerHTML = this.responseText;
      if (name != "index") {
        let back = document.createElement("span");
        back.innerHTML = "&emsp;Go back";
        back.id = "back";
        back.onclick = () => {
          history.pushState("", document.title, location.pathname + location.search);
          window.onhashchange();
        }
        document.getElementById("article").prepend(back);
      }
    }
  };
  xhttp.open("GET", `/docs/files/${name}.html`, true);
  xhttp.send();
}

window.onload = window.onhashchange = () => {
  if (location.hash == "") {
    loadDoc("index")
  } else {
    loadDoc(location.hash)
  }
}