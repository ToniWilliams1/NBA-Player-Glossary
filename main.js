 document.querySelector("button").addEventListener("click", getPlayer);

function getPlayer() {
  let name = document.querySelector("input").value;

  fetch(`https://www.balldontlie.io/api/v1/players?search=${name}`)
    .then((res) => res.json())
    .then((data) => {
      const firstPlayer = data.data[0];
    document
    document.querySelector("h3").innerText = `${firstPlayer.team.full_name} player ${firstPlayer.first_name} ${firstPlayer.last_name} is ${firstPlayer.height_feet} feet and ${firstPlayer.height_inches} inches tall; and weighs ${ firstPlayer.weight_pounds} pounds.  He plays for the ${firstPlayer.team.full_name} which is part of the ${firstPlayer.team.division} division and the  ${firstPlayer.team.conference} conference.` ;
      document.querySelector(".last-name").innerText = firstPlayer.last_name;
      document.querySelector(".height-feet").innerText =
        firstPlayer.height_feet;
      document.querySelector(".height-inches").innerText =
        firstPlayer.height_inches;
      document.querySelector(".position").innerText = firstPlayer.position;
      document.querySelector(".weight-pounds").innerText =
        firstPlayer.weight_pounds;
      document.querySelector(".name").innerText = firstPlayer.team.full_name;
      document.querySelector(".abbreviation").innerText =
        firstPlayer.team.abbreviation;
      document.querySelector(".division").innerText = firstPlayer.team.division;
      document.querySelector(".city").innerText = firstPlayer.team.city;

      document.querySelector(".conference").innerText =
        firstPlayer.team.conference;
    });
}

