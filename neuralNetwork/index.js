const brain = require('brain.js');
const data = require('./data.json');

const network = new brain.recurrent.LSTM();

const trainingData = data.map((result) => {
  return ({
    input: [result.homeTeam, result.awayTeam],
    output: result.winner,
  });
});

network.train(trainingData, {
  iterations: 100,
});

const output = network.run(['Los Angeles Lakers', 'Boston Celtics']);

console.log('The winner should be', output);