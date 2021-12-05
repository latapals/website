const teamSection = document.getElementById("team-cards");
fetch("/team.json")
  .then(function(result) {
    return result.text();
  })
  .then(function(result) {
    const team = JSON.parse(result);
    for (let i in team) {
      let card = "";
      card += (team[i].link != undefined) ?
        `<a href="${team[i].link}">`
        : "";
      card += `<div class="team-member">`;
      card += (team[i].pfp != undefined) ?
        `<div class="team-icon" style="background: url(${team[i].pfp})"></div>`
        : "";
      card += `<h2>${team[i].name}</h2>`;
      let jobs = "";
      for (let i2 in team[i].jobs) {
        jobs += team[i].jobs[i2];
        if (i2 != team[i].jobs.length - 1) {
          jobs += " • ";
        }
      }
      card += `<p>${jobs}</p>`;
      card += `</div>`;
      card += (team[i].link != undefined) ?
        `</a>`
        : "";
      teamSection.innerHTML += card;
      console.log(card)
    }
  })
  .catch(function(err) {
    console.warn(err.message);
  });