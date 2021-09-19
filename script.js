//Selecteurs DOM
const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");

//Images des portes
const botDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/space.svg";

//fonction ONCLICK
doorImage1.onclick = () => {
  doorImage1.src = botDoorPath;
};
doorImage2.onclick = () => {
  doorImage2.src = beachDoorPath;
};

doorImage3.onclick = () => {
  doorImage3.src = spaceDoorPath;
};
