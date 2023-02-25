const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzzz`);
      this.isTired = 1;
    },

    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play");
        this.sleep();
      } else {
        console.log(`yay! ${this.name} loves to play!`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

//Make sure all objects were created
//console.log(sora, clover, baxter, cleo, francine);

//Call the methods to make sure they work.
// clover.sleep();
// baxter.play();

// console.log(clover);
// console.log(baxter);

//Update Properties and Create an Array of Objects to loop through
clover.isTired = 8;
francine.isTired = 9;

const allPets = [sora, clover, baxter, cleo, francine];
//console.log(allPets);

//Display Pets in the Browser
const showPets = function (allPets) {
  //empty the list
  pets.innerHTML = "";

  for (let key of allPets) {
    let status = "ready to play";
    if (key.isTired >= 7) {
      status = "sleeping";
    }

    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${key.name}</span> the ${key.species} is ${status}`;
    pets.append(li);
  }
};

statusButton.addEventListener("click", function () {
  showPets(allPets);
});
