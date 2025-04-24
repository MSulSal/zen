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
function animate() {
  const index = uniqueRand(0, combinations.length - 1, prev),
    combo = combinations[index];
  wrapper.dataset.configuration = combo.configuration;
  wrapper.dataset.roundness = combo.roundness;
  prev = index;
  for (let shape of shapes) {
    const r = Math.floor(Math.random() * 256),
      g = Math.floor(Math.random() * 256),
      b = Math.floor(Math.random() * 256),
      a = Math.random().toFixed(2);
    shape.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
  }
  document.getElementById("overlay").textContent = breaths[breathIndex];
  breathIndex = (breathIndex + 1) % breaths.length;
}
animate();
setInterval(animate, 8000);
