/** @format */

let cardInfo = [
  {
    Name: "dog",
    image_src: "images/happy-puppy-with-heart-tag-illustration.png",
  },
  { Name: "pig", image_src: "images/37290005_8358486.png" },
  { Name: "elephant", image_src: "images/11464400.png" },
  { Name: "bear", image_src: "images/11503282.png" },
  { Name: "dear", image_src: "images/11504937.png" },
  { Name: "goat", image_src: "images/11428865.png" },
];

let maincontainer = document.getElementById("maincontainer");

let duplicate = cardInfo.concat(cardInfo);
console.log(duplicate);

let checkTwoImage = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(duplicate);

addCard();

function addCard() {
  duplicate.forEach((item, index) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("active");
    card.setAttribute("id", index);
    maincontainer.append(card);

    card.addEventListener("click", clickCard);
  });
}

function clickCard() {
  if (checkTwoImage.length < 2) {
    this.classList.add("addimage");
    let idCard = this.getAttribute("id");
    checkTwoImage.push(this);
    console.log(this);
    this.innerHTML = `<img src=${duplicate[idCard].image_src} class=imgCard>`;

    if (checkTwoImage.length == 2) {
      checkImages();
    }
  }
}

function checkImages() {
  let card1Id = checkTwoImage[0].getAttribute("id");
  let card2Id = checkTwoImage[1].getAttribute("id");

  if (duplicate[card1Id].Name === duplicate[card2Id].Name) {
    checkTwoImage[0].classList.add("addimageimg");
    checkTwoImage[1].classList.add("addimageimg");
    checkTwoImage = [];
  } else {
    setTimeout(() => {
      checkTwoImage[0].innerHTML = "";
      checkTwoImage[1].innerHTML = "";
      checkTwoImage[0].classList.remove("addimage");
      checkTwoImage[1].classList.remove("addimage");
      checkTwoImage = [];
    }, 1500);
  }
}
