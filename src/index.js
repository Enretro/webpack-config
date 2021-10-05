import "./styles/index.scss";


const elvenShield = {
  leatherStripe: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
}

const elvenGuant = {
  ...elvenShield,
  leather:1,
  refinedMoonstone: 4,
}

console.log(elvenShield);
console.log(elvenGuant);