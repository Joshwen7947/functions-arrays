function makePhrases() {
  const words1 = ["red", "blue", "green", "brown", "orange"];
  const words2 = ["fat", "skinny", "tall", "short", "funny"];
  const words3 = ["cat", "tiger", "dog", "elephant", "moose"];

  let rand1 = Math.floor(Math.random() * words1.length);
  let rand2 = Math.floor(Math.random() * words2.length);
  let rand3 = Math.floor(Math.random() * words3.length);

  const phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
  alert(phrase);
}

makePhrases();

let scores = [
  60,
  50,
  60,
  58,
  54,
  54,
  58,
  50,
  52,
  54,
  48,
  69,
  34,
  55,
  51,
  52,
  44,
  51,
  69,
  64,
  66,
  55,
  52,
  61,
  46,
  31,
  57,
  52,
  44,
  18,
  41,
  53,
  55,
  61,
  51,
  44,
];

function printAndGetHighScores(scores) {
  let output;
  let highScore = 0;

  for (let i = 0; i < scores.length; i++) {
    output = `Bubble Solution #` + i + ` score: ` + scores[i];
    console.log(output);

    if (scores[i] > highScore) {
      highScore = scores[i];
    }
  }
  return highScore;
}

function bestOptions(scores, highScore) {
  let bestSolutions = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
      bestSolutions.push(i);
    }
  }
  return bestSolutions;
}

let highScore = printAndGetHighScores(scores);
console.log(`Bubbles tests: ` + scores.length);
console.log(`Highest bubble score: ` + highScore);

let bestSolutions = bestOptions(scores, highScore);
console.log(`Solutions with the highest scores ` + bestSolutions);

// Trial and error
let costs = [
  0.25,
  0.27,
  0.25,
  0.25,
  0.25,
  0.25,
  0.33,
  0.31,
  0.25,
  0.29,
  0.27,
  0.22,
  0.31,
  0.25,
  0.25,
  0.22,
  0.21,
  0.25,
  0.25,
  0.25,
  0.28,
  0.25,
  0.24,
  0.22,
  0.2,
  0.25,
  0.3,
  0.25,
  0.24,
  0.22,
  0.2,
  0.25,
  0.3,
  0.25,
  0.24,
  0.24,
  0.25,
  0.25,
  0.27,
  0.25,
  0.26,
  0.29,
];

function printAndGetHighCosts(costs) {
  let output;
  let highestCost = 0;

  for (let i = 0; i < costs.length; i++) {
    output = `Cost Solution #` + i + ` costs: ` + costs[i];
    console.log(output);

    if (costs[i] > highestCost) {
      highestCost = costs[i];
    }
  }
  return highestCost;
}

function cheapestOptions(costs, highestCost) {
  let bestCosts = [];
  for (let i = 0; i < costs.length; i++) {
    if (costs[i] == highestCost) {
      bestCosts.push(i);
    }
  }
  return bestSolutions;
}

let highestCost = printAndGetHighCosts(costs);
console.log(`Price tests: ` + costs.length);
console.log(`Highest price is: ` + highestCost);

let bestCosts = cheapestOptions(costs, highestCost);
console.log(`Solutions with the best costs are ` + bestCosts);

function getMostCostEffectiveSolution(scores, costs, highScore) {
  let cost = 100;
  let index;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
      if (cost > costs[i]) {
        index = i;
        cost = costs[i];
      }
    }
  }
  return index;
}

let mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log(
  `Bubble solution #` + mostCostEffective + ` is the most cost effective`
);
