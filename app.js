// Accordion
const accordions = document.querySelectorAll(".accordion");

// Check if there are accordions
if (accordions) {
  // Loop through each accordion
  accordions.forEach((accordion) => {
    let accordionMode = accordion.dataset.mode;
    const accordionItems = accordion.querySelectorAll(".accordion__item");
    const accordionButtons = accordion.querySelectorAll(".accordion__button");

    // Loop through each accordion button
    accordionButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        const accordionItem = accordionItems[index];

        if (accordionMode === "single") {
          accordionItems.forEach((item) => {
            if (item !== accordionItem) {
              item.classList.remove("active");
            } else {
              accordionItem.classList.toggle("active");
            }
          });
        } else if (accordionMode === "multiple") {
          accordionItem.classList.toggle("active");
        }
      });
    });
  });
}
