const wrapper = document.getElementById("wrapper");
const shapes = document.getElementsByClassName("shape");
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const uniqueRand = (min, max, prev) => {
  let next = prev;
  while (prev === next) next = rand(min, max);
  return next;
};
const combinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 1, roundness: 4 },
  { configuration: 2, roundness: 2 },
  { configuration: 2, roundness: 3 },
  { configuration: 3, roundness: 3 },
];
let prev = 0;
const breaths = ["Inhale", "Exhale"];
let breathIndex = 0;
const inhaleBar = document.getElementById("inhale-scroller");
const exhaleBar = document.getElementById("exhale-scroller");
function animate() {
  const index = uniqueRand(0, combinations.length - 1, prev);
  const combo = combinations[index];
  wrapper.dataset.configuration = combo.configuration;
  wrapper.dataset.roundness = combo.roundness;
  prev = index;
  for (let shape of shapes) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.random().toFixed(2);
    shape.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
  }
  const current = breaths[breathIndex];
  document.getElementById("overlay").textContent = current;
  if (current === "Inhale") {
    inhaleBar.style.width = "10vmin";
    exhaleBar.style.width = "0";
  } else {
    exhaleBar.style.width = "10vmin";
    inhaleBar.style.width = "0";
  }
  breathIndex = (breathIndex + 1) % breaths.length;
}
animate();
setInterval(animate, 6000);
