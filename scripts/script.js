const ratingBtn = document.querySelectorAll(".rate");
const subBtn = document.querySelector(".sub_btn");

for (let i = 0; i < ratingBtn.length; i++) {
  ratingBtn[i].addEventListener("click", () => {
    for (let x = 0; x < ratingBtn.length; x++) {
      ratingBtn[x].style.background = "var(--very-dark-blue)";
      ratingBtn[x].style.color = "var(--light-grey)";
    }
    ratingBtn[i].style.background = "var(--orange)";
    ratingBtn[i].style.color = "var(--white)";
  });
}

const submitUserRate = () => {
  const infoAboutUserRate = document.querySelector(".selected_txt");
  const mainComponentRate = document.querySelector(".component_one");
  const secondComponent = document.querySelector(".component_two");
  const choseRate = document.querySelectorAll(".rate");

  mainComponentRate.style.display = "none";
  secondComponent.style.display = "block";
  for (let i = 0; i < choseRate.length; i++) {
    if (choseRate[i].style.background === "var(--orange)") {
      infoAboutUserRate.textContent = `You selected ${choseRate[i].value} out of 5`;
    }
  }
};

subBtn.addEventListener("click", submitUserRate);
