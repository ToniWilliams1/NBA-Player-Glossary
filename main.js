 document.querySelector("button").addEventListener("click", getPlayer);

function getPlayer() {
  let name = document.querySelector("input").value;

  fetch(`https://www.balldontlie.io/api/v1/players?search=${name}`)
    .then((res) => res.json())
    .then((data) => {
      const firstPlayer = data.data[0];
      document.querySelector(".first-name").innerText = firstPlayer.first_name;
      document.querySelector(".last-name").innerText = firstPlayer.last_name;
      document.querySelector(".height-feet").innerText =
        firstPlayer.height_feet;
      document.querySelector(".height-inches").innerText =
        firstPlayer.height_inches;
      document.querySelector(".position").innerText = firstPlayer.position;
      document.querySelector(".weight-pounds").innerText =
        firstPlayer.weight_pounds;
      document.querySelector(".name").innerText = firstPlayer.team.name;
      document.querySelector(".abbreviation").innerText =
        firstPlayer.team.abbreviation;
      document.querySelector(".division").innerText = firstPlayer.team.division;
      document.querySelector(".city").innerText = firstPlayer.team.city;

      document.querySelector(".conference").innerText =
        firstPlayer.team.conference;
    });
}
