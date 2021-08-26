window.addEventListener("load", () => {
  let prvBtn = document.querySelector(".prv");
  let nextBtn = document.querySelector(".next");
  let sliderItems = document.querySelectorAll(".sliderItem");
  let sliderIndex = 0;
  let sliderHolder = document.querySelector(".sliderholder");
  let sliderContainer = document.querySelector(".slidercontainer");
  sliderContainer.classList.add("slide");
  let image = document.querySelector("img");
  let smallestWidth;
  let smallestHeight;

  sliderItems.forEach((element) => {
    let width = element.children[0].clientWidth;
    let height = element.children[0].clientHeight;
    if (width < smallestWidth || !smallestWidth) {
      smallestWidth = width;
    }
    if (height < smallestHeight || !smallestHeight) {
      smallestHeight = height;
    }
  });
  sliderContainer.style.setProperty(
    "--left-pos",
    -sliderIndex * smallestWidth + "px"
  );
  for (sliderItem of sliderItems) {
    sliderHolder.style.width = `${smallestWidth}px`;
    sliderItem.style.width = `${smallestWidth}px`;
    sliderItem.style.height = `${smallestHeight}px`;
  }
  prvBtn.addEventListener("click", () => {
    if (sliderIndex === 0) {
      sliderIndex = sliderItems.length - 1;
    } else {
      sliderIndex = sliderIndex - 1;
    }
    sliderContainer.style.setProperty(
      "--left-pos",
      -sliderIndex * smallestWidth + "px"
    );
  });
  nextBtn.addEventListener("click", () => {
    if (sliderIndex === sliderItems.length - 1) {
      sliderIndex = 0;
    } else {
      sliderIndex = sliderIndex + 1;
    }
    sliderContainer.style.setProperty(
      "--left-pos",
      -sliderIndex * smallestWidth + "px"
    );
  });
  let timer;
  function autoplay() {
    timer = window.setInterval(() => {
      if (sliderIndex === sliderItems.length - 1) {
        sliderIndex = 0;
      } else {
        sliderIndex = sliderIndex + 1;
      }
      sliderContainer.style.setProperty(
        "--left-pos",
        -sliderIndex * smallestWidth + "px"
      );
    }, 4000);
  }
  autoplay();
  sliderHolder.addEventListener("mouseenter", () => {
    window.clearInterval(timer);
  });
  sliderHolder.addEventListener("mouseleave", () => {
    autoplay();
  });
});
