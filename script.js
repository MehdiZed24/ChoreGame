//Selecteurs DOM
const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");

const botDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/robot.svg"; //image du robot.
const beachDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/space.svg";

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;


let randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  } else if (choreDoor === 1) {
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 2) {
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = botDoorPath;
  }
};

//fonctions ONCLICK
doorImage1.onclick = () => {
  doorImage1.src = openDoor1;
};
doorImage2.onclick = () => {
  doorImage2.src = openDoor2;
};
doorImage3.onclick = () => {
  doorImage3.src = openDoor3;
};

randomChoreDoorGenerator();