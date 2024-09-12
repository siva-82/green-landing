const counters = document.querySelectorAll(".number");
var manageCounterReveal = document.querySelectorAll(".help__section");

const observer = new IntersectionObserver(
  (entries) => {
    counters.forEach((counter) => {
      counter.innerText = "0";
      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");

        const c = +counter.innerText;

        const increment = target / 20;

        if (c < target) {
          var numberVal = Math.ceil(c + increment);
          counter.innerText = numberVal;
          setTimeout(updateCounter, 50);
        } else {
          var targetValue = Math.ceil(target);

          counter.innerText = targetValue.toLocaleString();
        }
      };

      updateCounter();
    });
    if (entries[0].isIntersecting) observer.unobserve(counters[0]);
  },
  {
    threshold: 1,
  }
);
observer.observe(counters[0]);
