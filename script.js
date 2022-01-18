// Force HTTPS
if (location.protocol == "http:")
  location.replace("https://" + location.host + location.pathname);

// Nav
document.getElementById("nav").innerHTML = `
<span>
  <a href="/">
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.33333 0.5C3.73096 0.5 0 4.23096 0 8.83333C0 13.4357 3.73096 17.1667 8.33333 17.1667V25.5H16.6667C21.269 25.5 25 21.769 25 17.1667C25 12.5643 21.269 8.83333 16.6667 8.83333V0.5H8.33333ZM16.6667 8.83333H8.33333V17.1667H16.6667V8.83333Z"
        fill="#2255dd"
      />
    </svg>
  </a>
</span>
<span class="only-desktop">
  <a href="/#projects">Projects</a>
  <a href="/#team">Team</a>
  <a href="/#docs">Docs</a>
  <a href="https://discord.gg/ZYwF9q8ChB" target="_blank">Community</a>
  <!--<a href="/max">Max</a>-->
</span>
<span>
  <a href="http://accounts.saco.ml/login?redirect=https%3A%2F%2Fsaco.ml">
    <button id="noAccount">
      Log in
    </button>
  </a>
</span>`

// Footer
document.body.innerHTML += `<div id="footer">
  <div>
    <svg
      width="25"
      height="26"
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.33333 0.5C3.73096 0.5 0 4.23096 0 8.83333C0 13.4357 3.73096 17.1667 8.33333 17.1667V25.5H16.6667C21.269 25.5 25 21.769 25 17.1667C25 12.5643 21.269 8.83333 16.6667 8.83333V0.5H8.33333ZM16.6667 8.83333H8.33333V17.1667H16.6667V8.83333Z"
        fill="#2255DD"
      />
    </svg>
    <span>
      Sargent Coding is a group and developers and designers that dare to <b>go beyond imagination</b>.
      <br /><br />
      Since 29 January 2016<br />Maine, USA&ensp;⟶&ensp;Worldwide
    </span>
  </div>
  <span>
    <a href="https://twitter.com/saco_team" target="_blank">
      <span>Twitter</span>
      <span>@saco_team</span>
    </a>
    <a href="https://glitch.com/@saco" target="_blank">
      <span>Glitch</span>
      <span>@saco</span>
    </a>
    <a href="http://be.net/saco" target="_blank">
      <span>Bēhance</span>
      <span>@saco</span>
    </a>
    <a href="https://discord.gg/ZYwF9q8ChB" target="_blank">
      <span>Discord</span>
      <span>ZYwF9q8ChB</span>
    </a>
  </span>
</div>`;